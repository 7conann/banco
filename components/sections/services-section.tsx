'use client'
import { CreditCard, Users, FileText, Zap, Shield, Globe, Wallet, Building, DollarSign } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export function ServicesSection() {
  
  const partners = [
    "BINANCE","METAMASK","CELCOIN","COINBASE","TRUST","BV",
    "BRASIL BITCOIN","EXODUS","INVESTIMENTOS","AZIFY","PHANTOM","BTG PACTUAL"
  ]
  const services = [
    {
      icon: <Building className="w-8 h-8 text-black" />,
      title: "Conta Nominal",
      description: "Gestão simplificada para múltiplos beneficiários com maior privacidade e facilidade administrativa.",
      badge: "Gestão",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <Wallet className="w-8 h-8 text-black" />,
      title: "ZiPay",
      description: "Solução completa de pagamentos instantâneos via PIX e transferências TED para seu negócio.",
      badge: "Pagamentos",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: "Boleto PIX",
      description: "Emissão de boletos com pagamento via PIX instantâneo ou método tradicional com máxima flexibilidade.",
      badge: "Rapidez",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <FileText className="w-8 h-8 text-black" />,
      title: "Boleto Híbrido",
      description: "Pagamentos instantâneos com segurança PIX ou método tradicional, conforme preferência do cliente.",
      badge: "Flexibilidade",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: "Split de Pagamento",
      description: "Divisão automática de pagamentos entre beneficiários, ideal para marketplaces e parcerias.",
      badge: "Automação",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: "Conta Escrow",
      description: "Conta de custódia para transações complexas, garantindo segurança até cumprimento das condições.",
      badge: "Segurança",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <Globe className="w-8 h-8 text-black" />,
      title: "Conta Dolarizada",
      description: "Conta com saldo alocado em criptomoedas lastreadas em dólar (USDT/USDC) para proteção cambial.",
      badge: "Internacional",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-black" />,
      title: "Cartão em Criptomoedas",
      description: "Cartão pré-pago com conversão cripto integrada para pagamentos globais sem IOF.",
      badge: "Inovação",
      badgeColor: "bg-primary text-black"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-black" />,
      title: "CCB",
      description: "Cédula de Crédito Bancário para operações de crédito estruturadas e personalizadas.",
      badge: "Crédito",
      badgeColor: "bg-primary text-black"
    }
  ]

  return (
    <section className=" bg-gray-50">
            <div className=" bg-primary py-4 overflow-hidden z-20">
        <div className="flex items-center">
          <div className="flex animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <span key={i} className="text-black font-bold px-8 whitespace-nowrap text-base sm:text-lg">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções financeiras completas e modulares para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
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
            <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
      `}</style>
    </section>
    
  )
}
