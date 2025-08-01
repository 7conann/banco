import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Shield,
  TrendingUp,
  Clock,
  RefreshCw,
  Network,
  ArrowRight,
  CheckCircle,
  Smartphone,
  CreditCard,
  Users,
  FileText,
} from "lucide-react"

const technicalFeatures = [
  {
    icon: Zap,
    title: "Saque Automático",
    description:
      "Receba seus pagamentos sem complicação. Configure saques automáticos para sua conta e tenha controle total sobre o fluxo de caixa.",
    benefits: ["Configuração flexível", "Controle total", "Sem intervenção manual", "Fluxo otimizado"],
  },
  {
    icon: Shield,
    title: "Sistema Antifraude",
    description:
      "Proteção de alto nível para cada transação. Detectamos riscos em tempo real, minimizando fraudes sem interferir na conversão.",
    benefits: ["Detecção em tempo real", "Proteção avançada", "Não interfere na conversão", "Segurança máxima"],
  },
  {
    icon: TrendingUp,
    title: "Taxa de Aprovação de 98%",
    description:
      "Mais pagamentos aprovados, menos obstáculos. Nossa tecnologia de otimização aumenta as conversões com inteligência adaptativa.",
    benefits: ["98% de aprovação", "Menos obstáculos", "Inteligência adaptativa", "Mais conversões"],
  },
  {
    icon: Clock,
    title: "Alta Disponibilidade",
    description:
      "Processamentos sem interrupções. Sistema robusto que garante funcionamento contínuo para suas operações financeiras.",
    benefits: ["99.9% uptime", "Sistema robusto", "Sem interrupções", "Operação contínua"],
  },
  {
    icon: RefreshCw,
    title: "Retentativa Inteligente",
    description: "Menos falhas, mais vendas. Nossa tecnologia de retentativa aumenta as conversões automaticamente.",
    benefits: ["Retentativas automáticas", "Menos falhas", "Mais vendas", "Otimização contínua"],
  },
  {
    icon: Network,
    title: "Multiadquirência",
    description:
      "Processamos pagamentos com múltiplos adquirentes, garantindo maior taxa de aprovação e redundância operacional.",
    benefits: ["Múltiplos adquirentes", "Redundância operacional", "Maior aprovação", "Diversificação de risco"],
  },
]

const digitalSolutions = [
  {
    icon: Smartphone,
    title: "App Mobile Completo",
    description: "Aplicativo intuitivo com todas as funcionalidades bancárias na palma da sua mão.",
    features: ["Interface moderna", "Navegação intuitiva", "Todas as funcionalidades", "Disponível 24/7"],
  },
  {
    icon: CreditCard,
    title: "Gestão de Contas",
    description: "Gerencie múltiplas contas e produtos financeiros em uma única plataforma.",
    features: ["Múltiplas contas", "Visão unificada", "Controle total", "Relatórios detalhados"],
  },
  {
    icon: Users,
    title: "API para Desenvolvedores",
    description: "Integre facilmente nossos serviços em sua plataforma com nossa API robusta.",
    features: ["Documentação completa", "SDKs disponíveis", "Suporte técnico", "Integração rápida"],
  },
  {
    icon: FileText,
    title: "Relatórios Avançados",
    description: "Acompanhe suas transações e performance com relatórios detalhados e insights.",
    features: ["Dashboards interativos", "Exportação de dados", "Análises avançadas", "Insights em tempo real"],
  },
]

export default function RecursosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 mb-4">TECNOLOGIA QUE IMPULSIONA</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Recursos que fazem a<span className="text-yellow-600"> diferença</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubra todas as funcionalidades e recursos tecnológicos que tornam o Zi Credit a escolha inteligente
                para suas operações financeiras.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Explorar recursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tecnologia de Ponta</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Recursos avançados que garantem segurança, eficiência e alta performance em todas as suas transações.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluções Digitais Completas</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ferramentas modernas e intuitivas para gerenciar suas finanças com máxima eficiência.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {digitalSolutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Integração com Ecossistema Fintech
                </h2>
                <p className="text-xl text-gray-600">
                  Conecte-se facilmente com outras plataformas e expanda suas possibilidades.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Seguros</h3>
                  <p className="text-gray-600 text-sm">
                    Contrate seguros diretamente pela plataforma com parceiros confiáveis.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Investimentos</h3>
                  <p className="text-gray-600 text-sm">
                    Acesse produtos de investimento de forma rápida e sem burocracia.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Empréstimos</h3>
                  <p className="text-gray-600 text-sm">
                    Solicite empréstimos com condições especiais e aprovação rápida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Pronto para experimentar?</h2>
              <p className="text-xl text-black/80 mb-8">
                Descubra como nossos recursos podem transformar sua experiência bancária e impulsionar seus resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4">
                  Criar conta gratuita
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-4 bg-transparent"
                >
                  Falar com especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
