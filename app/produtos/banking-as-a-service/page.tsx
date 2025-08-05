import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, CheckCircle, ArrowRight, Code, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function BankingAsAServicePage() {
  const features = [
    "Contas multimoeda (BRL, USD, EUR)",
    "Transferências internacionais",
    "Gestão de saldos em tempo real",
    "Compliance automático",
    "APIs RESTful completas"
  ]

  const benefits = [
    "Redução de 80% no tempo de implementação",
    "Conformidade regulatória garantida",
    "Escalabilidade automática",
    "Suporte 24/7"
  ]

  const useCases = [
    {
      title: "Fintechs",
      description: "Lance sua fintech com infraestrutura bancária completa em semanas, não meses."
    },
    {
      title: "E-commerce",
      description: "Integre pagamentos e gestão financeira diretamente na sua plataforma."
    },
    {
      title: "Marketplaces",
      description: "Ofereça contas e cartões para seus vendedores com split automático."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-lg mr-4">
                <Building2 className="h-12 w-12 text-blue-600" />
              </div>
              <Badge className="bg-blue-600 text-white">API First</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Banking as a <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Infraestrutura bancária completa via API para criar soluções financeiras personalizadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Começar Integração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Code className="mr-2 h-5 w-5" />
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  Funcionalidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                  Benefícios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja como diferentes tipos de empresa podem se beneficiar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Integre nossa infraestrutura bancária em sua aplicação e lance produtos financeiros em semanas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Agendar Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}