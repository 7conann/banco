// Arquivo simplificado - não usa mais Supabase real
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          document_number: string | null
          account_type: "personal" | "business"
          account_status: "pending" | "active" | "suspended"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          document_number?: string | null
          account_type?: "personal" | "business"
          account_status?: "pending" | "active" | "suspended"
        }
        Update: {
          full_name?: string | null
          phone?: string | null
          document_number?: string | null
          account_type?: "personal" | "business"
          account_status?: "pending" | "active" | "suspended"
          updated_at?: string
        }
      }
      accounts: {
        Row: {
          id: string
          user_id: string
          account_number: string
          account_type: "zi_credit" | "nominal" | "escrow"
          balance: number
          monthly_fee: number
          status: "active" | "inactive" | "suspended"
          created_at: string
          updated_at: string
        }
      }
      transactions: {
        Row: {
          id: string
          account_id: string
          type: "pix" | "ted" | "boleto" | "boleto_pix" | "boleto_hybrid" | "split_payment" | "cashback"
          amount: number
          fee: number
          description: string | null
          status: "pending" | "completed" | "failed" | "cancelled"
          reference_id: string | null
          created_at: string
          updated_at: string
        }
      }
      rewards: {
        Row: {
          id: string
          user_id: string
          transaction_id: string | null
          service_type: string
          cashback_percentage: number
          original_amount: number
          cashback_amount: number
          status: "pending" | "credited" | "expired"
          expires_at: string
          created_at: string
          updated_at: string
        }
      }
      cashback_services: {
        Row: {
          id: string
          service_name: string
          service_type: string
          cashback_percentage: number
          icon_name: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: "info" | "success" | "warning" | "error"
          is_read: boolean
          created_at: string
        }
      }
    }
  }
}

// Mock client para manter compatibilidade
export const supabase = {
  auth: {
    signUp: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: () => Promise.resolve({ data: { user: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
  },
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
  }),
}
