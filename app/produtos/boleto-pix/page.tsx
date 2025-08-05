import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, ArrowRight, Code, Clock, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

export default function BoletoPixPage() {
  const features = [
    "Pagamentos instantâneos",
    "Maior segurança",
    "Facilidade para o cliente",
    "Processamento imediato"
  ]

  const advantages = [
    {
      icon: Clock,
      title: "Pagamento Instantâneo",
      description: "Receba o pagamento em segundos via PIX ou boleto tradicional"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção contra fraudes com validação em tempo real"
    },
    {
      icon: Smartphone,
      title: "Experiência Mobile",
      description: "QR Code otimizado para pagamentos via celular"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-lg mr-4">
                <Zap className="h-12 w-12 text-blue-600" />
              </div>
              <Badge className="bg-blue-600 text-white">Pagamento Híbrido</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Boleto <span className="text-blue-600">PIX</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Solução que permite gerar boletos que podem ser pagos via PIX, facilitando pagamentos rápidos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O melhor dos dois mundos: a praticidade do PIX com a familiaridade do boleto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Vantagens do Boleto PIX</CardTitle>
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

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Processo de Pagamento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Gere o Boleto PIX</h3>
                <p className="text-gray-600 text-sm">Cliente recebe boleto com QR Code PIX integrado</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cliente Escolhe</h3>
                <p className="text-gray-600 text-sm">Pagar via PIX (instantâneo) ou código de barras (tradicional)</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Receba Imediato</h3>
                <p className="text-gray-600 text-sm">Confirmação instantânea e valor creditado na conta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Acelere seus recebimentos
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ofereça flexibilidade aos seus clientes e receba pagamentos mais rapidamente.
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