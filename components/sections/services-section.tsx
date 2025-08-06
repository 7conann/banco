import { CreditCard, Users, FileText, Zap, Shield, Globe, Wallet, Building, DollarSign, Receipt } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export function ServicesSection() {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-yellow-600" />,
      title: "Conta Nominal",
      description: "Gestão simplificada para múltiplos beneficiários com maior privacidade e facilidade administrativa.",
      badge: "Gestão",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Wallet className="w-8 h-8 text-yellow-600" />,
      title: "ZiPay (PIX - TED)",
      description: "Solução completa de pagamentos instantâneos via PIX e transferências TED para seu negócio.",
      badge: "Pagamentos",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "PIX",
      description: "Pagamentos instantâneos 24/7 com segurança e praticidade para seus clientes.",
      badge: "Rapidez",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: <Receipt className="w-8 h-8 text-yellow-600" />,
      title: "Boleto",
      description: "Emissão e gestão de boletos bancários com registro automático e conciliação facilitada.",
      badge: "Tradicional",
      badgeColor: "bg-gray-100 text-gray-800"
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-600" />,
      title: "Boleto Híbrido",
      description: "Pagamentos instantâneos com segurança PIX ou método tradicional, conforme preferência do cliente.",
      badge: "Flexibilidade",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "Split de Pagamento",
      description: "Divisão automática de pagamentos entre beneficiários, ideal para marketplaces e parcerias.",
      badge: "Automação",
      badgeColor: "bg-orange-100 text-orange-800"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
      title: "Conta Escrow",
      description: "Conta de custódia para transações complexas, garantindo segurança até cumprimento das condições.",
      badge: "Segurança",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      title: "Conta Dolarizada",
      description: "Conta com saldo alocado em criptomoedas lastreadas em dólar (USDT/USDC) para proteção cambial.",
      badge: "Internacional",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-600" />,
      title: "Cartão",
      description: "Emissão de cartões físicos e virtuais com controle total sobre limites e funcionalidades.",
      badge: "Conveniência",
      badgeColor: "bg-teal-100 text-teal-800"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      title: "CCB",
      description: "Cédula de Crédito Bancário para operações de crédito estruturadas e personalizadas.",
      badge: "Crédito",
      badgeColor: "bg-pink-100 text-pink-800"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções financeiras completas e modulares para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <Badge className={service.badgeColor}>
                  {service.badge}
                </Badge>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
