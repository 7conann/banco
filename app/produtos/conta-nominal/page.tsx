import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, CheckCircle, ArrowRight, Code, UserCheck, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function ContaNominalPage() {
  const features = [
    "Identificação do titular",
    "Facilidade de administração",
    "Menor burocracia",
    "Privacidade para investidores"
  ]

  const advantages = [
    {
      icon: UserCheck,
      title: "Identificação Clara",
      description: "Titular claramente identificado para maior transparência"
    },
    {
      icon: Shield,
      title: "Privacidade Garantida",
      description: "Proteção da identidade dos investidores quando necessário"
    },
    {
      icon: Clock,
      title: "Processo Simplificado",
      description: "Abertura rápida com menos burocracia administrativa"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-teal-100 rounded-lg mr-4">
                <CreditCard className="h-12 w-12 text-teal-600" />
              </div>
              <Badge className="bg-teal-600 text-white">Solução Especializada</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conta <span className="text-teal-600">Nominal</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conta bancária para depósitos e transações relacionadas a fundos específicos, sem titular formalmente vinculado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                Abrir Conta Nominal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantagens da Conta Nominal</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solução ideal para gestão de fundos específicos com maior flexibilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Características Principais</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simplifique a gestão de fundos
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Conta nominal com todas as vantagens de flexibilidade e privacidade que você precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8">
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