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
      <section className="bg-[#282829] from-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white rounded-lg mr-4">
                <Zap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-primary">Zipay</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-white">
              Banco digital inovador que busca transformar a maneira que os seus clientes gerenciam as suas finanças.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-lg px-8">
                Ver Documentação
                <ArrowRight className="ml-2 h-5 w-5" />
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
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-black" />
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
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
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
      <Footer />
    </div>
  )
}
