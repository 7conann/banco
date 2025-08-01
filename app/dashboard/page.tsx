"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/components/auth/auth-provider"
import { rewardsService } from "@/lib/rewards"
import {
  TrendingUp,
  DollarSign,
  CreditCard,
  Gift,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  EyeOff,
  Plus,
} from "lucide-react"
import { redirect } from "next/navigation"
import Link from "next/link"

interface DashboardStats {
  totalBalance: number
  totalCashback: number
  pendingCashback: number
  currentTier: string
  progressToNext: number
}

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const [stats, setStats] = useState<DashboardStats>({
    totalBalance: 0,
    totalCashback: 0,
    pendingCashback: 0,
    currentTier: "Bronze",
    progressToNext: 0,
  })
  const [showBalance, setShowBalance] = useState(false)
  const [recentTransactions] = useState([
    {
      id: "1",
      type: "PIX",
      description: "Transferência recebida",
      amount: 250.0,
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: "2",
      type: "Cashback",
      description: "Spotify Premium",
      amount: 1.5,
      date: "2024-01-14",
      status: "completed",
    },
    {
      id: "3",
      type: "TED",
      description: "Pagamento fornecedor",
      amount: -1200.0,
      date: "2024-01-13",
      status: "completed",
    },
  ])

  useEffect(() => {
    if (!loading && !user) {
      redirect("/auth/login")
    }
  }, [user, loading])

  useEffect(() => {
    if (user) {
      loadDashboardData()
    }
  }, [user])

  const loadDashboardData = async () => {
    if (!user) return

    try {
      const { total: totalCashback } = await rewardsService.getTotalCashback(user.id)
      const { total: pendingCashback } = await rewardsService.getPendingCashback(user.id)

      setStats({
        totalBalance: 2547.83,
        totalCashback: totalCashback || 0,
        pendingCashback: pendingCashback || 0,
        currentTier: "Bronze",
        progressToNext: 15,
      })
    } catch (error) {
      console.error("Erro ao carregar dados do dashboard:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Olá, {user.profile?.full_name || "Usuário"}! 👋</h1>
            <p className="text-gray-600">Bem-vindo ao seu dashboard Zi Credit</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Saldo Total</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-gray-900">
                        {showBalance
                          ? `R$ ${stats.totalBalance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                          : "R$ ••••••"}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowBalance(!showBalance)}
                        className="h-6 w-6 p-0"
                      >
                        {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Cashback Total</p>
                    <p className="text-2xl font-bold text-green-600">
                      R$ {stats.totalCashback.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Gift className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Cashback Pendente</p>
                    <p className="text-2xl font-bold text-orange-600">
                      R$ {stats.pendingCashback.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Nível Atual</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-purple-600">{stats.currentTier}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stats.progressToNext}%
                      </Badge>
                    </div>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Transactions */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Transações Recentes</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/transactions">Ver todas</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              transaction.amount > 0 ? "bg-green-100" : "bg-red-100"
                            }`}
                          >
                            {transaction.amount > 0 ? (
                              <ArrowDownRight className="h-5 w-5 text-green-600" />
                            ) : (
                              <ArrowUpRight className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{transaction.description}</p>
                            <p className="text-sm text-gray-500">
                              {transaction.type} • {transaction.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                            {transaction.amount > 0 ? "+" : ""}R${" "}
                            {Math.abs(transaction.amount).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Progress */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Nova Transferência
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pagar Boleto
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Gift className="mr-2 h-4 w-4" />
                    Ver Cashback
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Notificações
                  </Button>
                </CardContent>
              </Card>

              {/* Progress to Next Level */}
              <Card>
                <CardHeader>
                  <CardTitle>Progresso para Prata</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>R$ 150 gastos</span>
                        <span>R$ 1.000 meta</span>
                      </div>
                      <Progress value={stats.progressToNext} className="h-2" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Faltam R$ 850 para alcançar o nível Prata e ganhar 20% mais cashback!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Notificações</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Cashback creditado</p>
                        <p className="text-xs text-gray-500">R$ 1,50 do Spotify</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-gray-300 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Transferência recebida</p>
                        <p className="text-xs text-gray-500">R$ 250,00 via PIX</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent" asChild>
                    <Link href="/notifications">Ver todas</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
