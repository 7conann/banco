DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO anon;
GRANT ALL ON SCHEMA public TO authenticated;
GRANT ALL ON SCHEMA public TO service_role;

-- Table: profiles
CREATE TABLE public.profiles (
    id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
    full_name text,
    email text UNIQUE,
    phone text,
    document_number text,
    account_type text,
    avatar_url text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Table: accounts
CREATE TABLE public.accounts (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
    account_number text UNIQUE NOT NULL,
    balance numeric DEFAULT 0 NOT NULL,
    currency text DEFAULT 'BRL' NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own accounts." ON public.accounts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own accounts." ON public.accounts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own accounts." ON public.accounts
  FOR UPDATE USING (auth.uid() = user_id);

-- Table: transactions
CREATE TABLE public.transactions (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    account_id uuid REFERENCES public.accounts ON DELETE CASCADE NOT NULL,
    type text NOT NULL, -- e.g., 'deposit', 'withdrawal', 'transfer', 'payment'
    amount numeric NOT NULL,
    currency text DEFAULT 'BRL' NOT NULL,
    description text,
    status text DEFAULT 'completed' NOT NULL, -- e.g., 'pending', 'completed', 'failed'
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own transactions." ON public.transactions
  FOR SELECT USING (EXISTS (SELECT 1 FROM public.accounts WHERE id = account_id AND user_id = auth.uid()));

CREATE POLICY "Users can insert their own transactions." ON public.transactions
  FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.accounts WHERE id = account_id AND user_id = auth.uid()));

-- Table: rewards
CREATE TABLE public.rewards (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
    points integer DEFAULT 0 NOT NULL,
    last_earned_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE public.rewards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own rewards." ON public.rewards
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own rewards." ON public.rewards
  FOR UPDATE USING (auth.uid() = user_id);

-- Table: cashback_services
CREATE TABLE public.cashback_services (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    name text NOT NULL,
    description text,
    cashback_rate numeric NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE public.cashback_services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cashback services are viewable by everyone." ON public.cashback_services
  FOR SELECT USING (true);

-- Table: notifications
CREATE TABLE public.notifications (
    id uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
    title text NOT NULL,
    message text NOT NULL,
    read_status boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own notifications." ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert notifications for themselves." ON public.notifications
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications." ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- Function to create a profile and account on new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    new_account_number TEXT;
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');

    -- Generate a unique 10-digit account number
    LOOP
        new_account_number := LPAD(FLOOR(RANDOM() * 10000000000)::TEXT, 10, '0');
        EXIT WHEN NOT EXISTS (SELECT 1 FROM public.accounts WHERE account_number = new_account_number);
    END LOOP;

    INSERT INTO public.accounts (user_id, account_number, balance)
    VALUES (NEW.id, new_account_number, 0);

    INSERT INTO public.rewards (user_id, points)
    VALUES (NEW.id, 0);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function on new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Function to delete profile and related data on user deletion
CREATE OR REPLACE FUNCTION public.handle_delete_user()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM public.profiles WHERE id = OLD.id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function on user deletion
CREATE TRIGGER on_auth_user_deleted
  AFTER DELETE ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_delete_user();
