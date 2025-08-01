"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/auth/auth-provider"
import { Send, Paperclip, Smile, MoreVertical, Phone, Video, ArrowLeft, CheckCheck } from "lucide-react"
import { redirect } from "next/navigation"
import Link from "next/link"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  status: "sent" | "delivered" | "read"
  type: "text" | "image" | "file"
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Olá! Bem-vindo ao suporte Zi Credit. Como posso ajudá-lo hoje?",
    sender: "agent",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    status: "read",
    type: "text",
  },
]

const quickReplies = [
  "Problemas com PIX",
  "Dúvidas sobre cashback",
  "Alterar dados cadastrais",
  "Solicitar cartão",
  "Falar com gerente",
]

export default function ChatPage() {
  const { user, loading } = useAuth()
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [agentStatus, setAgentStatus] = useState<"online" | "away" | "busy">("online")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loading && !user) {
      redirect("/auth/login")
    }
  }, [user, loading])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const sendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
      status: "sent",
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simular resposta do agente
    setIsTyping(true)
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAgentResponse(content),
        sender: "agent",
        timestamp: new Date(),
        status: "read",
        type: "text",
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsTyping(false)
    }, 2000)
  }

  const getAgentResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("pix")) {
      return "Entendo que você tem dúvidas sobre PIX. Posso ajudar com transferências, limites ou problemas técnicos. Qual é sua dúvida específica?"
    }

    if (message.includes("cashback")) {
      return "Sobre o cashback: você ganha 0,50% em serviços parceiros e o valor é creditado em até 48h. Gostaria de saber sobre algum serviço específico?"
    }

    if (message.includes("dados") || message.includes("cadastr")) {
      return "Para alterar seus dados cadastrais, acesse Configurações > Perfil no seu dashboard. Se precisar de ajuda específica, posso orientá-lo passo a passo."
    }

    return "Obrigado pela sua mensagem. Um de nossos especialistas analisará sua solicitação e retornará em breve. Há mais alguma coisa em que posso ajudar?"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(newMessage)
  }

  const handleQuickReply = (reply: string) => {
    sendMessage(reply)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusColor = (status: "online" | "away" | "busy") => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "busy":
        return "bg-red-500"
      default:
        return "bg-gray-500"
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
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b bg-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/suporte">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Voltar
                      </Link>
                    </Button>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>ZC</AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(agentStatus)} rounded-full border-2 border-white`}
                        ></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Suporte Zi Credit</h3>
                        <p className="text-sm text-gray-500">
                          {agentStatus === "online" ? "Online agora" : agentStatus === "away" ? "Ausente" : "Ocupado"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      {message.sender === "agent" && (
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>ZC</AvatarFallback>
                        </Avatar>
                      )}

                      <div
                        className={`rounded-lg px-4 py-2 ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-white border"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div
                          className={`flex items-center justify-end space-x-1 mt-1 ${
                            message.sender === "user" ? "text-primary-foreground/70" : "text-gray-500"
                          }`}
                        >
                          <span className="text-xs">{formatTime(message.timestamp)}</span>
                          {message.sender === "user" && <CheckCheck className="h-3 w-3" />}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-end space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>ZC</AvatarFallback>
                      </Avatar>
                      <div className="bg-white border rounded-lg px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </CardContent>

              {/* Quick Replies */}
              <div className="px-4 py-2 border-t bg-gray-50">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80"
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-white rounded-b-lg">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                  <Button type="button" variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    >
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button type="submit" disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>

            {/* Chat Info */}
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Horário de atendimento: 24/7 • Tempo médio de resposta: 2 minutos</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
