"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { type User, type AuthState, authService } from "@/lib/auth"

const AuthContext = createContext<{
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ error?: string }>
  register: (email: string, password: string, name: string) => Promise<{ error?: string }>
  logout: () => Promise<void>
}>({
  user: null,
  loading: true,
  login: async () => ({}),
  register: async () => ({}),
  logout: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
  })

  useEffect(() => {
    // Check for existing user on mount
    const user = authService.getCurrentUser()
    setAuthState({ user, loading: false })
  }, [])

  const login = async (email: string, password: string) => {
    const { user, error } = await authService.login(email, password)
    if (user) {
      setAuthState({ user, loading: false })
    }
    return { error }
  }

  const register = async (email: string, password: string, name: string) => {
    const { user, error } = await authService.register(email, password, name)
    if (user) {
      setAuthState({ user, loading: false })
    }
    return { error }
  }

  const logout = async () => {
    await authService.logout()
    setAuthState({ user: null, loading: false })
  }

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        loading: authState.loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
