import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, CheckCircle, ArrowRight, Code, BarChart3, FileText, Calculator } from "lucide-react"
import Link from "next/link"

export default function ContaEmpresarialPage() {
  const features = [
    "Conta corrente PJ",
    "Cartão empresarial",
    "Gestão de fluxo de caixa",
    "Conciliação automática",
    "Relatórios gerenciais"
  ]

  const benefits = [
    "Gestão simplificada",
    "Controle total",
    "Relatórios automáticos",
    "Integração contábil"
  ]

  const businessFeatures = [
    {
      icon: BarChart3,
      title: "Dashboard Gerencial",
      description: "Visão completa das finanças da empresa em tempo real"
    },
    {
      icon: FileText,
      title: "Relatórios Automáticos",
      description: "Relatórios financeiros gerados automaticamente para contabilidade"
    },
    {
      icon: Calculator,
      title: "Conciliação Bancária",
      description: "Conciliação automática de extratos e movimentações"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#282829] from-indigo-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white rounded-lg mr-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Conta <span className="text-primary">Empresarial</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Conta PJ completa com gestão financeira integrada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-lg px-8">
                Abrir Conta PJ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos Empresariais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas completas para gestão financeira empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {businessFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
                  <Users className="h-6 w-6 text-primary mr-3" />
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

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Integração Simples</h2>
              <p className="text-xl text-muted-foreground">
                APIs REST modernas com documentação completa e SDKs prontos
              </p>
            </div>
            
            <Card className="bg-gray-900 text-white">
              <CardContent className="p-8">
                <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm">
                  <div className="text-green-400">// Exemplo de integração</div>
                  <div className="text-blue-400">const</div> <span className="text-white">Zi Credit</span> = <div className="text-blue-400">new</div> <span className="text-yellow-400">AzipaySDK</span>({`{`}
                  <div className="ml-4">
                    <span className="text-red-400">apiKey</span>: <span className="text-green-300">'sua_api_key'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-red-400">environment</span>: <span className="text-green-300">'production'</span>
                  </div>
                  {`}`});
                  <br /><br />
                  <div className="text-green-400">// Processar pagamento PIX</div>
                  <div className="text-blue-400">const</div> <span className="text-white">payment</span> = <div className="text-blue-400">await</div> <span className="text-white">ZiCredit</span>.<span className="text-yellow-400">pix</span>.<span className="text-yellow-400">create</span>({`{`}
                  <div className="ml-4">
                    <span className="text-red-400">amount</span>: <span className="text-purple-400">100.00</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-red-400">description</span>: <span className="text-green-300">'Pagamento teste'</span>
                  </div>
                  {`}`});
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}