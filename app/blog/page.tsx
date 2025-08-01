"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, Clock } from "lucide-react"
import Link from "next/link"

// Mock data - em produção viria de uma API ou CMS
const articles = [
  {
    id: "futuro-bancos-digitais-brasil-2024",
    title: "O Futuro dos Bancos Digitais no Brasil: Tendências para 2024",
    excerpt:
      "Descubra as principais tendências que estão moldando o setor bancário digital brasileiro e como o Zi Credit está na vanguarda dessa transformação.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Equipe Zi Credit",
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    category: "Tendências",
    tags: ["Bancos Digitais", "Tecnologia", "Inovação", "Brasil", "Futuro"],
    featured: true,
  },
  {
    id: "pix-revolucionou-pagamentos-brasil",
    title: "Como o PIX Revolucionou os Pagamentos no Brasil",
    excerpt: "Entenda como o sistema de pagamentos instantâneos mudou o cenário financeiro brasileiro.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Maria Silva",
    date: "12 de Janeiro, 2024",
    readTime: "5 min",
    category: "Pagamentos",
    tags: ["PIX", "Pagamentos", "Banco Central", "Inovação", "Brasil"],
    featured: false,
  },
  {
    id: "seguranca-digital-dicas-proteger-financas",
    title: "Segurança Digital: Dicas Essenciais para Proteger Suas Finanças",
    excerpt:
      "Aprenda as melhores práticas para manter suas informações financeiras seguras no ambiente digital e evitar fraudes.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Carlos Mendes",
    date: "10 de Janeiro, 2024",
    readTime: "6 min",
    category: "Segurança",
    tags: ["Segurança", "Fraude", "Dicas", "Proteção", "Digital"],
    featured: false,
  },
  {
    id: "investimentos-inteligentes-para-iniciantes",
    title: "Investimentos Inteligentes: Guia Completo para Iniciantes",
    excerpt:
      "Comece a investir com confiança! Este guia descomplica o mundo dos investimentos para quem está dando os primeiros passos.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Ana Paula",
    date: "05 de Janeiro, 2024",
    readTime: "10 min",
    category: "Investimentos",
    tags: ["Investimentos", "Finanças", "Guia", "Iniciantes", "Dinheiro"],
    featured: false,
  },
  {
    id: "cashback-como-funciona-e-vantagens",
    title: "Cashback: Como Funciona e as Vantagens de Usar no Dia a Dia",
    excerpt:
      "Descubra como o cashback pode te ajudar a economizar e ganhar dinheiro de volta em suas compras com o Zi Credit.",
    image: "/placeholder.svg?height=200&width=400",
    author: "Equipe Zi Credit",
    date: "01 de Janeiro, 2024",
    readTime: "7 min",
    category: "Recompensas",
    tags: ["Cashback", "Economia", "Vantagens", "Recompensas", "Zi Credit"],
    featured: false,
  },
]

const categories = ["Todos", "Tendências", "Pagamentos", "Segurança", "Investimentos", "Recompensas"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredArticles = useMemo(() => {
    let filtered = articles

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    return filtered
  }, [searchTerm, selectedCategory])

  const featuredArticle = articles.find((article) => article.featured) || articles[0]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Nosso Blog</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Fique por dentro das últimas notícias e tendências do mundo financeiro.
          </p>

          {/* Featured Article Section */}
          {featuredArticle && (
            <section className="mb-12">
              <Card className="overflow-hidden shadow-lg">
                <Link href={`/blog/${featuredArticle.id}`}>
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="mb-2">{featuredArticle.category}</Badge>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{featuredArticle.title}</h2>
                    <p className="text-gray-700 mb-4">{featuredArticle.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{featuredArticle.date}</span>
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </section>
          )}

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden shadow-lg">
                  <Link href={`/blog/${article.id}`}>
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <Badge className="mb-2">{article.category}</Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{article.date}</span>
                        <Clock className="w-3 h-3 ml-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600 text-lg">
                Nenhum artigo encontrado para sua busca.
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
