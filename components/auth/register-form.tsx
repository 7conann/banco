"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useAuth } from "./auth-provider"
import { Eye, EyeOff, Loader2, CheckCircle, Mail } from "lucide-react"
import Link from "next/link"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    documentNumber: "",
    accountType: "personal" as "personal" | "business",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false) // Local loading state for form submission
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const { signUp } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos obrigatórios")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem")
      return
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres")
      return
    }

    setLoading(true)
    setError("")

    try {
      const { error } = await signUp(formData.email, formData.password, formData.fullName)

      if (error) {
        console.error("Erro no registro:", error)

        if (error.message?.includes("User already registered")) {
          setError("Este e-mail já está cadastrado")
        } else if (error.message?.includes("Password should be at least")) {
          setError("A senha deve ter pelo menos 6 caracteres")
        } else {
          setError(error.message || "Erro ao criar conta. Tente novamente.")
        }
      } else {
        setSuccess(true)
        // Redirecionar após 3 segundos
        setTimeout(() => {
          router.push("/auth/login")
        }, 3000)
      }
    } catch (err) {
      console.error("Erro inesperado no registro:", err)
      setError("Erro inesperado. Tente novamente.")
    } finally {
      setLoading(false) // Ensure loading state is reset
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900">Conta criada com sucesso!</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Verifique seu e-mail</span>
              </div>
              <p className="text-gray-600 text-sm">
                Enviamos um link de confirmação para <strong>{formData.email}</strong>
              </p>
              <p className="text-gray-600 text-sm">Clique no link para ativar sua conta e fazer login.</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">Redirecionando para o login em alguns segundos...</p>
              <Button className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/auth/login">Ir para Login</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary-foreground font-bold text-xl">Z</span>
        </div>
        <CardTitle className="text-2xl">Criar sua conta</CardTitle>
        <CardDescription>Preencha os dados para criar sua conta Zi Credit</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome completo *</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Seu nome completo"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="documentNumber">CPF/CNPJ</Label>
            <Input
              id="documentNumber"
              type="text"
              placeholder="000.000.000-00"
              value={formData.documentNumber}
              onChange={(e) => handleInputChange("documentNumber", e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-3">
            <Label>Tipo de conta</Label>
            <RadioGroup
              value={formData.accountType}
              onValueChange={(value) => handleInputChange("accountType", value)}
              disabled={loading}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal">Pessoa Física</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Pessoa Jurídica</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha *</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar senha *</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                required
                disabled={loading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={loading}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
            {loading ? "Criando conta..." : "Criar conta"}
          </Button>

          <div className="text-center text-sm text-gray-600">
            Já tem uma conta?{" "}
            <Link href="/auth/login" className="text-primary hover:text-primary/80 font-medium">
              Fazer login
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
