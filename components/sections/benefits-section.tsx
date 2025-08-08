import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, HeadphonesIcon, DollarSign, Layers } from 'lucide-react'

const benefits = [
  {
    icon: Smartphone,
    title: "Plataforma 100% Digital",
    description: "Sem agências físicas, acesso completo através de aplicativo intuitivo e fácil navegação.",
    badge: "Digital",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento 24/7",
    description: "Chatbots inteligentes e suporte humano disponível 24 horas para resolver qualquer problema.",
    badge: "Suporte",
  },
  {
    icon: DollarSign,
    title: "Sem Tarifas Abusivas",
    description: "Política de tarifas transparentes e justas. Muitas taxas tradicionais são eliminadas.",
    badge: "Economia",
  },
  {
    icon: Layers,
    title: "Integração com Fintechs",
    description: "Integração fácil com outras plataformas para contratar seguros, investimentos e empréstimos.",
    badge: "Integração",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Diferenciais da Zi Credit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra por que mais de 1000 empresas escolhem o Zi Credit como seu banco digital de confiança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-black" />
                  </div>
                  <Badge className="text-xs bg-primary">
                    {benefit.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
