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
      <section className="bg-[#282829] py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white rounded-lg mr-4">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Banking as a <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-white">
              Infraestrutura bancária completa via API para criar soluções financeiras personalizadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Ver Documentação
                <ArrowRight className="ml-2 h-5 w-5" />
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Casos de Uso</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja como diferentes tipos de empresa podem se beneficiar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-primary font-semibold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
  

      <Footer />
    </div>
  )
}
