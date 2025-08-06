import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, CheckCircle, ArrowRight, Code, Smartphone, Lock, Settings } from "lucide-react"
import Link from "next/link"

export default function EmissaoCartoesPage() {
  const features = [
    "Cartões físicos e virtuais",
    "Controles em tempo real",
    "Cashback personalizado",
    "Gestão de limites",
    "Tokenização segura"
  ]

  const benefits = [
    "Marca própria",
    "Segurança avançada",
    "Controle total",
    "Integração simples"
  ]

  const cardTypes = [
    {
      icon: CreditCard,
      title: "Cartões Físicos",
      description: "Cartões personalizados com sua marca, entregues em todo o Brasil"
    },
    {
      icon: Smartphone,
      title: "Cartões Virtuais",
      description: "Emissão instantânea de cartões virtuais para compras online"
    },
    {
      icon: Lock,
      title: "Tokenização",
      description: "Segurança avançada com tokenização para pagamentos móveis"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#282829] from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white rounded-lg mr-4">
                <CreditCard className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Emissão de <span className="text-primary">Cartões</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Cartões físicos e virtuais white-label com gestão completa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-lg px-8">
                Abrir conta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Card Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Cartão</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofereça cartões físicos e virtuais com sua marca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cardTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  Funcionalidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CreditCard className="h-6 w-6 text-primary mr-3" />
                  Benefícios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}