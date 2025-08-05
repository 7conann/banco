import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, ArrowRight, Code, Lock, Users, FileCheck } from "lucide-react"
import Link from "next/link"

export default function ContaEscrowPage() {
  const features = [
    "Segurança para transações",
    "Atenua riscos de fraude",
    "Confiança nas negociações",
    "Proteção legal"
  ]

  const advantages = [
    {
      icon: Lock,
      title: "Custódia Segura",
      description: "Valores mantidos em segurança até cumprimento das condições"
    },
    {
      icon: Users,
      title: "Terceira Parte Neutra",
      description: "Zi Credit atua como custodiante imparcial na transação"
    },
    {
      icon: FileCheck,
      title: "Condições Claras",
      description: "Liberação automática baseada em critérios pré-definidos"
    }
  ]

  const useCases = [
    "Compra e venda de imóveis",
    "Transações de alto valor",
    "Contratos de prestação de serviços",
    "Operações de M&A",
    "Negociações internacionais"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 to-gray-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-slate-100 rounded-lg mr-4">
                <Shield className="h-12 w-12 text-slate-600" />
              </div>
              <Badge className="bg-slate-600 text-white">Máxima Segurança</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conta <span className="text-slate-600">Escrow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conta de custódia onde o dinheiro é mantido por terceira parte neutra até cumprimento das condições
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-600 hover:bg-slate-700 text-lg px-8">
                Abrir Conta Escrow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Processo seguro e transparente para transações de alto valor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Acordo</h3>
              <p className="text-gray-600 text-sm">Partes definem condições da transação</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Depósito</h3>
              <p className="text-gray-600 text-sm">Comprador deposita na conta escrow</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verificação</h3>
              <p className="text-gray-600 text-sm">Zi Credit verifica cumprimento das condições</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Liberação</h3>
              <p className="text-gray-600 text-sm">Valor liberado para o vendedor</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Vantagens</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Casos de Uso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-slate-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transações seguras e confiáveis
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Conta escrow para transações de alto valor com total segurança e transparência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-600 hover:bg-gray-100 text-lg px-8">
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