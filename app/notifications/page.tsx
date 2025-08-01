"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth/auth-provider"
import { Bell, Check, Trash2, Filter, MoreVertical, CreditCard, Gift, AlertTriangle, Info } from "lucide-react"
import { redirect } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  is_read: boolean
  created_at: string
  category: "transaction" | "cashback" | "security" | "system"
}

export default function NotificationsPage() {
  const { user, loading } = useAuth()
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Cashback Creditado",
      message: "Você ganhou R$ 1,50 de cashback na sua assinatura do Spotify Premium.",
      type: "success",
      is_read: false,
      created_at: "2024-01-15T10:30:00Z",
      category: "cashback",
    },
    {
      id: "2",
      title: "Transferência Recebida",
      message: "Você recebeu uma transferência PIX de R$ 250,00 de João Silva.",
      type: "info",
      is_read: false,
      created_at: "2024-01-15T09:15:00Z",
      category: "transaction",
    },
    {
      id: "3",
      title: "Login Detectado",
      message: "Um novo login foi detectado em seu dispositivo móvel às 08:45.",
      type: "warning",
      is_read: true,
      created_at: "2024-01-15T08:45:00Z",
      category: "security",
    },
    {
      id: "4",
      title: "Pagamento Processado",
      message: "Seu pagamento de R$ 89,90 para Netflix foi processado com sucesso.",
      type: "success",
      is_read: true,
      created_at: "2024-01-14T20:30:00Z",
      category: "transaction",
    },
    {
      id: "5",
      title: "Nível Bronze Mantido",
      message: "Você continua no nível Bronze. Gaste mais R$ 850 para alcançar o nível Prata!",
      type: "info",
      is_read: true,
      created_at: "2024-01-14T12:00:00Z",
      category: "system",
    },
  ])
  const [filter, setFilter] = useState<"all" | "unread" | "transaction" | "cashback" | "security">("all")

  useEffect(() => {
    if (!loading && !user) {
      redirect("/auth/login")
    }
  }, [user, loading])

  const getIcon = (category: string, type: string) => {
    switch (category) {
      case "transaction":
        return <CreditCard className="h-5 w-5" />
      case "cashback":
        return <Gift className="h-5 w-5" />
      case "security":
        return <AlertTriangle className="h-5 w-5" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-100"
      case "warning":
        return "text-orange-600 bg-orange-100"
      case "error":
        return "text-red-600 bg-red-100"
      default:
        return "text-blue-600 bg-blue-100"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Agora há pouco"
    if (diffInHours < 24) return `${diffInHours}h atrás`
    if (diffInHours < 48) return "Ontem"
    return date.toLocaleDateString("pt-BR")
  }

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "all") return true
    if (filter === "unread") return !notification.is_read
    return notification.category === filter
  })

  const unreadCount = notifications.filter((n) => !n.is_read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
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
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center space-x-3">
                  <Bell className="h-8 w-8" />
                  <span>Notificações</span>
                  {unreadCount > 0 && <Badge className="bg-red-500 text-white">{unreadCount}</Badge>}
                </h1>
                <p className="text-gray-600">Acompanhe todas as atualizações da sua conta</p>
              </div>
              <div className="flex items-center space-x-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setFilter("all")}>Todas</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("unread")}>Não lidas</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("transaction")}>Transações</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("cashback")}>Cashback</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilter("security")}>Segurança</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {unreadCount > 0 && (
                  <Button onClick={markAllAsRead} variant="outline">
                    <Check className="h-4 w-4 mr-2" />
                    Marcar todas como lidas
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhuma notificação</h3>
                  <p className="text-gray-600">Você não tem notificações no momento.</p>
                </CardContent>
              </Card>
            ) : (
              filteredNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`transition-all hover:shadow-md ${
                    !notification.is_read ? "border-l-4 border-l-primary bg-primary/5" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
                          {getIcon(notification.category, notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                            {!notification.is_read && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{formatDate(notification.created_at)}</span>
                            <Badge variant="secondary" className="text-xs">
                              {notification.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {!notification.is_read && (
                            <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                              <Check className="h-4 w-4 mr-2" />
                              Marcar como lida
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem
                            onClick={() => deleteNotification(notification.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
