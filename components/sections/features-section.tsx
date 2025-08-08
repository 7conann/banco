import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, Clock, RefreshCw, Network } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Saque Automático",
    description:
      "Receba seus pagamentos sem complicação. Configure saques automáticos para sua conta e tenha controle total sobre o fluxo de caixa.",
  },
  {
    icon: Shield,
    title: "Antifraude",
    description:
      "Proteção de alto nível para cada transação. Detectamos riscos em tempo real, minimizando fraudes sem interferir na conversão.",
  },
  {
    icon: TrendingUp,
    title: "Taxa de Aprovação de 98%",
    description:
      "Mais pagamentos aprovados, menos obstáculos. Nossa tecnologia de otimização aumenta as conversões com inteligência adaptativa.",
  },
  {
    icon: Clock,
    title: "Alta Disponibilidade",
    description:
      "Processamentos sem interrupções. Sistema robusto que garante funcionamento contínuo para suas operações financeiras.",
  },
  {
    icon: RefreshCw,
    title: "Retentativa Inteligente",
    description: "Menos falhas, mais vendas. Nossa tecnologia de retentativa aumenta as conversões automaticamente.",
  },
  {
    icon: Network,
    title: "Multiadquirência",
    description:
      "Processamos pagamentos com múltiplos adquirentes, garantindo maior taxa de aprovação e redundância operacional.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            TECNOLOGIA QUE IMPULSIONA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mais vendas, menos preocupações</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">Transforme a maneira como você vende na internet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-black hover:bg-gray-750 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{feature.title}</h3>
                <p className="text-black leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
