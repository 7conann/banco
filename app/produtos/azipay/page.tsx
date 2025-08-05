import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, ArrowRight, Code, Smartphone, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

export default function AzipayPage() {
  const features = [
    "PIX instantâneo",
    "Cartões de crédito/débito",
    "Boleto bancário",
    "Real Digital (CBDC)",
    "Checkout transparente"
  ]

  const benefits = [
    "Taxas competitivas",
    "Aprovação alta",
    "Integração rápida",
    "Suporte ao Real Digital"
  ]

  const paymentMethods = [
    {
      icon: Smartphone,
      title: "PIX Instantâneo",
      description: "Pagamentos em tempo real 24/7 com confirmação imediata"
    },
    {
      icon: CreditCard,
      title: "Cartões",
      description: "Processamento de cartões de crédito e débito com alta aprovação"
    },
    {
      icon: FileText,
      title: "Boletos",
      description: "Emissão e gestão de boletos bancários tradicionais e híbridos"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-yellow-100 rounded-lg mr-4">
                <Zap className="h-12 w-12 text-yellow-600" />
              </div>
              <Badge className="bg-yellow-600 text-white">API First</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-600">Azipay</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Gateway de pagamentos com suporte completo ao Real Digital (BRL)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8">
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

      {/* Payment Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Métodos de Pagamento</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aceite todos os principais métodos de pagamento do Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

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
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
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

      {/* Real Digital Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-600 text-white mb-6 text-lg px-6 py-2">
              Pioneiros no Real Digital
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Primeiro Gateway com Suporte ao Real Digital
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Seja pioneiro na adoção da moeda digital do Banco Central brasileiro. 
              Ofereça pagamentos com CBDC antes da concorrência.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Vantagens do Real Digital</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Para Empresas</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Redução de custos operacionais</li>
                    <li>• Liquidação instantânea</li>
                    <li>• Menor risco de fraude</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Para Clientes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pagamentos mais rápidos</li>
                    <li>• Maior segurança</li>
                    <li>• Experiência simplificada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Aceite pagamentos do futuro hoje
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Integre o Azipay e ofereça a seus clientes todos os métodos de pagamento, incluindo o Real Digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8">
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