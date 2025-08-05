import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, CheckCircle, ArrowRight, Code, TrendingUp, Shield, Wallet } from "lucide-react"
import Link from "next/link"

export default function ContaDolarizadaPage() {
  const features = [
    "Acesso a Cold Wallets",
    "Proteção contra volatilidade",
    "Possibilidade de negociação",
    "Segurança e confiança"
  ]

  const advantages = [
    {
      icon: TrendingUp,
      title: "Proteção Cambial",
      description: "Proteja-se da volatilidade do real com stablecoins lastreadas em dólar"
    },
    {
      icon: Shield,
      title: "Cold Storage",
      description: "Seus ativos protegidos em carteiras offline de máxima segurança"
    },
    {
      icon: Wallet,
      title: "Liquidez Global",
      description: "Acesso a mercados internacionais com facilidade"
    }
  ]

  const cryptoAssets = [
    "USDT (Tether)",
    "USDC (USD Coin)",
    "BUSD (Binance USD)",
    "DAI (MakerDAO)"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-lg mr-4">
                <Globe className="h-12 w-12 text-blue-600" />
              </div>
              <Badge className="bg-blue-600 text-white">Inovação Global</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conta <span className="text-blue-600">Dolarizada</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conta com saldo alocado em criptomoedas lastreadas em dólar (USDT/USDC) para proteção cambial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Abrir Conta Dolarizada
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantagens da Dolarização</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proteja seu patrimônio e tenha acesso a mercados globais
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
                <CardTitle className="text-2xl">Criptomoedas Suportadas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {cryptoAssets.map((asset, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{asset}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Segurança de Nível Institucional</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Seus ativos digitais protegidos com os mais altos padrões de segurança
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Cold Storage</h3>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• 95% dos ativos em carteiras offline</li>
                    <li>• Múltiplas assinaturas para transações</li>
                    <li>• Backup em múltiplas localizações</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Compliance</h3>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Regulamentação do Banco Central</li>
                    <li>• Auditoria externa regular</li>
                    <li>• Relatórios de transparência</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proteja seu patrimônio da volatilidade
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conta dolarizada com stablecoins para proteção cambial e acesso a mercados globais.
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