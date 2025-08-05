import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, CheckCircle, ArrowRight, Code, Users, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function SplitPagamentoPage() {
  const features = [
    "Automatização do repasse",
    "Facilidade na gestão",
    "Redução de erros",
    "Rapidez e eficiência"
  ]

  const advantages = [
    {
      icon: Users,
      title: "Múltiplos Beneficiários",
      description: "Divida pagamentos entre quantos beneficiários precisar"
    },
    {
      icon: Zap,
      title: "Automático",
      description: "Repasses automáticos sem intervenção manual"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Acompanhe todos os repasses com relatórios completos"
    }
  ]

  const useCases = [
    "Marketplaces com múltiplos vendedores",
    "Plataformas de delivery",
    "Sistemas de afiliados",
    "Parcerias comerciais",
    "Franquias e representações"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-lg mr-4">
                <DollarSign className="h-12 w-12 text-green-600" />
              </div>
              <Badge className="bg-green-600 text-white">Automação Inteligente</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Split de <span className="text-green-600">Pagamento</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Funcionalidade que divide automaticamente o valor de um pagamento entre diferentes beneficiários
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                Começar a Usar
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

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona o Split</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automatize a divisão de pagamentos e elimine processos manuais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="h-8 w-8 text-green-600" />
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
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
      <section className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Automatize seus repasses
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Split de pagamento inteligente para marketplaces e plataformas multi-vendor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
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