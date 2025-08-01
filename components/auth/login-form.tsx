"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "./auth-provider"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import Link from "next/link"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false) // Local loading state for form submission
  const [error, setError] = useState("")

  const { signIn } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Por favor, preencha todos os campos")
      return
    }

    setLoading(true)
    setError("")

    try {
      const { error } = await signIn(email, password)

      if (error) {
        console.error("Erro no login:", error)

        if (error.message?.includes("Invalid login credentials")) {
          setError("E-mail ou senha incorretos")
        } else if (error.message?.includes("Email not confirmed")) {
          setError("Por favor, confirme seu e-mail antes de fazer login")
        } else {
          setError(error.message || "Erro ao fazer login. Tente novamente.")
        }
      } else {
        // Login bem-sucedido, redirecionar
        router.push("/dashboard")
      }
    } catch (err) {
      console.error("Erro inesperado no login:", err)
      setError("Erro inesperado. Tente novamente.")
    } finally {
      setLoading(false) // Ensure loading state is reset
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary-foreground font-bold text-xl">Z</span>
        </div>
        <CardTitle className="text-2xl">Entrar na sua conta</CardTitle>
        <CardDescription>Digite suas credenciais para acessar sua conta Zi Credit</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Entrando..." : "Entrar"}
          </Button>

          <div className="text-center space-y-2">
            <Link href="/auth/forgot-password" className="text-sm text-gray-600 hover:text-primary">
              Esqueceu sua senha?
            </Link>
            <div className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <Link href="/auth/register" className="text-primary hover:text-primary/80 font-medium">
                Criar conta
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
