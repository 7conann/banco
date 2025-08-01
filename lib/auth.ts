import { supabase } from "./supabase"
import type { User } from "@supabase/supabase-js"

export interface AuthUser extends User {
  profile?: {
    full_name: string | null
    phone: string | null
    document_number: string | null
    account_type: "personal" | "business"
    account_status: "pending" | "active" | "suspended"
  }
}

export const authService = {
  async signUp(email: string, password: string, fullName: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) {
        console.error("Erro no signup:", error)
        return { data: null, error }
      }

      return { data, error: null }
    } catch (error) {
      console.error("Erro no signup:", error)
      return { data: null, error }
    }
  },

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error("Erro no signin:", error)
        return { data: null, error }
      }

      return { data, error: null }
    } catch (error) {
      console.error("Erro no signin:", error)
      return { data: null, error }
    }
  },

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (error) {
      console.error("Erro no signout:", error)
      return { error }
    }
  },

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (error || !user) {
        console.error("Erro ao buscar usuário:", error)
        return null
      }

      // Buscar perfil do usuário
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

      if (profileError) {
        console.error("Erro ao buscar perfil:", profileError)
        // Retorna usuário mesmo sem perfil
        return { ...user, profile: null } as AuthUser
      }

      return { ...user, profile } as AuthUser
    } catch (error) {
      console.error("Erro ao buscar usuário atual:", error)
      return null
    }
  },

  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.id)

      if (session?.user) {
        const user = await this.getCurrentUser()
        callback(user)
      } else {
        callback(null)
      }
    })
  },
}
