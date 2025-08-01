-- Reset the public schema completely
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- Grant permissions to the authenticated role
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO anon;
GRANT ALL ON SCHEMA public TO authenticated;
GRANT ALL ON SCHEMA public TO service_role;

-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  document_number VARCHAR(20),
  account_type VARCHAR(50) DEFAULT 'personal' CHECK (account_type IN ('personal', 'business')),
  account_status VARCHAR(50) DEFAULT 'pending' CHECK (account_status IN ('pending', 'active', 'suspended')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy for profiles: Users can view and update their own profile
CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Create accounts table
CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles ON DELETE CASCADE NOT NULL,
  account_number VARCHAR(50) UNIQUE NOT NULL,
  balance NUMERIC(15, 2) DEFAULT 0.00 NOT NULL,
  currency VARCHAR(3) DEFAULT 'BRL' NOT NULL,
  account_type VARCHAR(50) DEFAULT 'checking' CHECK (account_type IN ('checking', 'savings', 'credit')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for accounts
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

-- Policy for accounts: Users can view and manage their own accounts
CREATE POLICY "Users can view their own accounts" ON accounts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own accounts" ON accounts FOR ALL USING (auth.uid() = user_id);

-- Create transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID REFERENCES accounts ON DELETE CASCADE NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('deposit', 'withdrawal', 'transfer_in', 'transfer_out', 'payment', 'reward')),
  amount NUMERIC(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'BRL' NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  transaction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for transactions
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Policy for transactions: Users can view their own transactions
CREATE POLICY "Users can view their own transactions" ON transactions FOR SELECT USING (
  EXISTS (SELECT 1 FROM accounts WHERE accounts.id = account_id AND accounts.user_id = auth.uid())
);

-- Create rewards table
CREATE TABLE rewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles ON DELETE CASCADE NOT NULL,
  reward_name VARCHAR(255) NOT NULL,
  points_awarded INT NOT NULL,
  awarded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'redeemed', 'expired')),
  redeemed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS for rewards
ALTER TABLE rewards ENABLE ROW LEVEL SECURITY;

-- Policy for rewards: Users can view and manage their own rewards
CREATE POLICY "Users can view their own rewards" ON rewards FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their own rewards" ON rewards FOR ALL USING (auth.uid() = user_id);

-- Create cashback_services table
CREATE TABLE cashback_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name VARCHAR(255) UNIQUE NOT NULL,
  cashback_percentage NUMERIC(5, 2) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_cashback table (to track user's earned cashback)
CREATE TABLE user_cashback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles ON DELETE CASCADE NOT NULL,
  service_id UUID REFERENCES cashback_services ON DELETE CASCADE NOT NULL,
  amount_earned NUMERIC(15, 2) NOT NULL,
  transaction_id UUID REFERENCES transactions ON DELETE SET NULL, -- Link to the transaction that generated cashback
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for user_cashback
ALTER TABLE user_cashback ENABLE ROW LEVEL SECURITY;

-- Policy for user_cashback: Users can view their own cashback
CREATE POLICY "Users can view their own cashback" ON user_cashback FOR SELECT USING (auth.uid() = user_id);

-- Create notifications table
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles ON DELETE CASCADE NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('transaction', 'reward', 'alert', 'promotion', 'system')),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for notifications
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Policy for notifications: Users can view and update their own notifications
CREATE POLICY "Users can view their own notifications" ON notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own notifications" ON notifications FOR UPDATE USING (auth.uid() = user_id);

-- Function to create a profile for new users
CREATE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call handle_new_user on auth.users insert
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Set up Realtime for public tables
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
ALTER PUBLICATION supabase_realtime ADD TABLE accounts;
ALTER PUBLICATION supabase_realtime ADD TABLE transactions;
ALTER PUBLICATION supabase_realtime ADD TABLE rewards;
ALTER PUBLICATION supabase_realtime ADD TABLE user_cashback;
ALTER PUBLICATION supabase_realtime ADD TABLE notifications;
