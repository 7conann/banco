import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Shield, Zap, Globe, DollarSign, FileText } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Conta Nominal",
      description:
        "Conta bancária para depósitos e transações relacionadas a fundos específicos, sem titular formalmente vinculado.",
      features: [
        "Identificação do titular",
        "Facilidade de administração",
        "Menor burocracia",
        "Privacidade para investidores",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Boleto PIX",
      description: "Solução que permite gerar boletos que podem ser pagos via PIX, facilitando pagamentos rápidos.",
      features: ["Pagamentos instantâneos", "Maior segurança", "Facilidade para o cliente", "Processamento imediato"],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Boleto Híbrido",
      description: "Boleto tradicional que também pode ser pago via PIX, oferecendo flexibilidade de pagamento.",
      features: [
        "Flexibilidade para o cliente",
        "Redução de inadimplência",
        "Múltiplas formas de pagamento",
        "Facilidade de processamento",
      ],
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Split de Pagamento",
      description: "Funcionalidade que divide automaticamente o valor de um pagamento entre diferentes beneficiários.",
      features: ["Automatização do repasse", "Facilidade na gestão", "Redução de erros", "Rapidez e eficiência"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conta Escrow",
      description:
        "Conta de custódia onde o dinheiro é mantido por terceira parte neutra até cumprimento das condições.",
      features: ["Segurança para transações", "Atenua riscos de fraude", "Confiança nas negociações", "Proteção legal"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Conta Dolarizada",
      description: "Conta com saldo alocado em criptomoedas lastreadas em dólar (USDT/USDC) para proteção cambial.",
      features: [
        "Acesso a Cold Wallets",
        "Proteção contra volatilidade",
        "Possibilidade de negociação",
        "Segurança e confiança",
      ],
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções financeiras completas e inovadoras para atender todas as suas necessidades bancárias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Emissão de CCB - Cédula de Crédito Bancário</h3>
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-lg">Em Breve - Inicia-se 9,00% a.a.</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Título de crédito utilizado por empresas para garantir empréstimos ou financiamentos, com possibilidade
                de negociar com bancos ou outras instituições financeiras.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Acesso facilitado ao crédito</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Taxas de juros competitivas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Possibilidade de negociação no mercado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Segurança e confiança estruturada</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Características</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Garantia de pagamento estruturada</li>
                <li>• Flexibilidade para empresas</li>
                <li>• Processo simplificado</li>
                <li>• Suporte especializado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
