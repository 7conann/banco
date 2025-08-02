export interface User {
  id: string
  email: string
  name: string
  created_at: string
}

export interface AuthState {
  user: User | null
  loading: boolean
}

// Mock users for testing
const mockUsers = [
  {
    id: "1",
    email: "usuario@exemplo.com",
    name: "Usuário Teste",
    password: "123456",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    email: "admin@zicredit.com",
    name: "Admin Zi Credit",
    password: "admin123",
    created_at: new Date().toISOString(),
  },
]

export const authService = {
  async login(email: string, password: string): Promise<{ user: User; error?: string }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser = mockUsers.find((u) => u.email === email && u.password === password)

    if (mockUser) {
      const user = {
        id: mockUser.id,
        email: mockUser.email,
        name: mockUser.name,
        created_at: mockUser.created_at,
      }

      // Store in localStorage
      localStorage.setItem("zi_credit_user", JSON.stringify(user))

      return { user }
    }

    return { user: null as any, error: "Credenciais inválidas" }
  },

  async register(email: string, password: string, name: string): Promise<{ user: User; error?: string }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email === email)
    if (existingUser) {
      return { user: null as any, error: "Usuário já existe" }
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      password,
      created_at: new Date().toISOString(),
    }

    mockUsers.push(newUser)

    const user = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      created_at: newUser.created_at,
    }

    // Store in localStorage
    localStorage.setItem("zi_credit_user", JSON.stringify(user))

    return { user }
  },

  async logout(): Promise<void> {
    localStorage.removeItem("zi_credit_user")
  },

  getCurrentUser(): User | null {
    if (typeof window === "undefined") return null

    const stored = localStorage.getItem("zi_credit_user")
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        return null
      }
    }
    return null
  },
}
