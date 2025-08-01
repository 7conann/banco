import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  Gift,
  Smartphone,
  Play,
  Gamepad2,
  Music,
  Gamepad,
  Tv,
  ArrowRight,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react"

const cashbackServices = [
  {
    name: "Recarga de Celular",
    icon: Smartphone,
    cashback: "0,50%",
    description: "Ganhe cashback em todas as recargas de celular",
    color: "bg-blue-500",
  },
  {
    name: "Google Play",
    icon: Play,
    cashback: "0,50%",
    description: "Cashback em compras na Google Play Store",
    color: "bg-green-500",
  },
  {
    name: "Xbox Live",
    icon: Gamepad2,
    cashback: "0,50%",
    description: "Ganhe cashback em assinaturas Xbox Live",
    color: "bg-green-600",
  },
  {
    name: "Spotify",
    icon: Music,
    cashback: "0,50%",
    description: "Cashback em assinaturas do Spotify",
    color: "bg-green-500",
  },
  {
    name: "PS Plus",
    icon: Gamepad,
    cashback: "0,50%",
    description: "Ganhe cashback em assinaturas PlayStation Plus",
    color: "bg-blue-600",
  },
  {
    name: "Sky TV",
    icon: Tv,
    cashback: "0,50%",
    description: "Cashback em pagamentos da Sky TV",
    color: "bg-gray-600",
  },
  {
    name: "Claro TV",
    icon: Tv,
    cashback: "0,50%",
    description: "Ganhe cashback em pagamentos da Claro TV",
    color: "bg-red-500",
  },
  {
    name: "Oi TV",
    icon: Tv,
    cashback: "0,50%",
    description: "Cashback em pagamentos da Oi TV",
    color: "bg-orange-500",
  },
]

const rewardTiers = [
  {
    name: "Bronze",
    minSpent: 0,
    maxSpent: 1000,
    multiplier: "1x",
    color: "bg-amber-600",
    benefits: ["Cashback padrão", "Suporte básico"],
  },
  {
    name: "Prata",
    minSpent: 1000,
    maxSpent: 5000,
    multiplier: "1.2x",
    color: "bg-gray-400",
    benefits: ["Cashback 20% maior", "Suporte prioritário", "Ofertas exclusivas"],
  },
  {
    name: "Ouro",
    minSpent: 5000,
    maxSpent: 15000,
    multiplier: "1.5x",
    color: "bg-yellow-500",
    benefits: ["Cashback 50% maior", "Gerente dedicado", "Acesso antecipado"],
  },
  {
    name: "Diamante",
    minSpent: 15000,
    maxSpent: Number.POSITIVE_INFINITY,
    multiplier: "2x",
    color: "bg-purple-500",
    benefits: ["Cashback dobrado", "Benefícios VIP", "Eventos exclusivos"],
  },
]

export default function PremiacoesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 mb-4">
                <Gift className="w-4 h-4 mr-2" />
                CLUB DE VANTAGENS
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Premiações que <span className="text-yellow-600">recompensam</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ganhe cashback em diversos serviços do seu dia a dia e seja recompensado por usar o Zi Credit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  Ver meu cashback
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-gray-300 bg-transparent">
                  Como funciona
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cashback Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">R$ 0,00</h3>
                    <p className="text-gray-600">Cashback Total Ganho</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">R$ 0,00</h3>
                    <p className="text-gray-600">Cashback Pendente</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Bronze</h3>
                    <p className="text-gray-600">Nível Atual</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cashback Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serviços com Cashback</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ganhe 0,50% de cashback em todos esses serviços essenciais do seu dia a dia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cashbackServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-yellow-600 mb-2">{service.cashback}</div>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Usar agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reward Tiers */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Níveis de Recompensa</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quanto mais você usa, mais benefícios recebe. Evolua seu nível e ganhe cashback multiplicado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewardTiers.map((tier, index) => (
                <Card key={index} className={`relative overflow-hidden ${index === 0 ? "ring-2 ring-yellow-400" : ""}`}>
                  <div className={`h-2 ${tier.color}`}></div>
                  <CardHeader className="text-center">
                    <div
                      className={`w-12 h-12 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                    >
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <div className="text-2xl font-bold text-yellow-600">{tier.multiplier}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-600">
                        {tier.minSpent === 0 ? "Inicial" : `A partir de R$ ${tier.minSpent.toLocaleString()}`}
                        {tier.maxSpent !== Number.POSITIVE_INFINITY && ` - R$ ${tier.maxSpent.toLocaleString()}`}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {index === 0 && <Badge className="absolute top-4 right-4 bg-yellow-400 text-black">Atual</Badge>}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Progress to next level */}
            <div className="max-w-2xl mx-auto mt-12">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Progresso para Prata</h3>
                    <p className="text-gray-600">Gaste mais R$ 1.000,00 para alcançar o próximo nível</p>
                  </div>
                  <Progress value={0} className="mb-4" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ 0</span>
                    <span>R$ 1.000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
                <p className="text-xl text-gray-600">É simples ganhar cashback com o Zi Credit</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Use os Serviços</h3>
                  <p className="text-gray-600 text-sm">Pague seus serviços favoritos através da plataforma Zi Credit</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ganhe Cashback</h3>
                  <p className="text-gray-600 text-sm">Receba automaticamente 0,50% de cashback em cada transação</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Resgate ou Acumule</h3>
                  <p className="text-gray-600 text-sm">Use seu cashback ou deixe acumular para resgates maiores</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Comece a ganhar hoje mesmo</h2>
              <p className="text-xl text-black/80 mb-8">
                Abra sua conta Zi Credit e comece a ser recompensado por cada transação que fizer.
              </p>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4">
                Criar conta gratuita
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
