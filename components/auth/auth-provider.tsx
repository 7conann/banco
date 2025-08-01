"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { authService, type AuthUser } from "@/lib/auth"

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  updateProfile: (updates: any) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const initializeUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser()
        if (mounted) {
          setUser(currentUser)
          setLoading(false)
        }
      } catch (error) {
        console.error("Erro ao inicializar usuário:", error)
        if (mounted) {
          setUser(null)
          setLoading(false)
        }
      }
    }

    initializeUser()

    const {
      data: { subscription },
    } = authService.onAuthStateChange((user) => {
      if (mounted) {
        setUser(user)
        setLoading(false)
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await authService.signIn(email, password)
    return { error }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error } = await authService.signUp(email, password, fullName)
    return { error }
  }

  const signOut = async () => {
    try {
      await authService.signOut()
      setUser(null)
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  const updateProfile = async (updates: any) => {
    try {
      const { error } = await authService.updateProfile(updates)
      if (!error) {
        const updatedUser = await authService.getCurrentUser()
        setUser(updatedUser)
      }
      return { error }
    } catch (error) {
      return { error }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
