"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const [fullName, setFullName] = useState(user?.full_name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [phone, setPhone] = useState(user?.phone || "")
  const [documentNumber, setDocumentNumber] = useState(user?.document_number || "")
  const [accountType, setAccountType] = useState(user?.account_type || "personal")
  const [notificationsEnabled, setNotificationsEnabled] = useState(true) // Mock state

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend/Supabase
    console.log("Updating profile:", { fullName, email, phone, documentNumber, accountType })
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    })
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle password change via Supabase auth
    console.log("Changing password...")
    toast({
      title: "Senha alterada!",
      description: "Sua senha foi atualizada com sucesso.",
    })
  }

  const handleLogout = async () => {
    await signOut()
    router.push("/auth/login")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Configurações</h1>

          <div className="grid gap-8">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      disabled // Email usually not editable directly
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(XX) XXXXX-XXXX"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="documentNumber">CPF/CNPJ</Label>
                    <Input
                      id="documentNumber"
                      value={documentNumber}
                      onChange={(e) => setDocumentNumber(e.target.value)}
                      placeholder="XXX.XXX.XXX-XX ou XX.XXX.XXX/XXXX-XX"
                      disabled // Document number usually not editable directly
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="accountType">Tipo de Conta</Label>
                    <Select value={accountType} onValueChange={setAccountType}>
                      <SelectTrigger id="accountType">
                        <SelectValue placeholder="Selecione o tipo de conta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Pessoal</SelectItem>
                        <SelectItem value="business">Empresarial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit">Salvar Alterações</Button>
                </form>
              </CardContent>
            </Card>

            {/* Password Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <Input id="currentPassword" type="password" placeholder="Sua senha atual" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input id="newPassword" type="password" placeholder="Sua nova senha" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirme sua nova senha" />
                  </div>
                  <Button type="submit">Alterar Senha</Button>
                </form>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Notificação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="notifications">Receber Notificações por Email</Label>
                  <Switch id="notifications" checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Ative ou desative o recebimento de notificações importantes por e-mail.
                </p>
              </CardContent>
            </Card>

            {/* Logout */}
            <Card>
              <CardHeader>
                <CardTitle>Sair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Clique no botão abaixo para sair da sua conta.</p>
                <Button variant="destructive" onClick={handleLogout}>
                  Sair da Conta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
