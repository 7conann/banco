import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Shield, Zap, Globe, DollarSign, FileText, Users, Briefcase, Package, Settings, Gavel, Box, } from "lucide-react"
import Link from "next/link"

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
    {/* Destaques iniciais */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div
        data-slot="card"
        className="p-6 text-center transition-shadow hover:shadow-lg border-0 shadow-none"
      >
        <div className="pt-6">
          <Box className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tecnologia Proprietária</h3>
          <p className="text-gray-600">
            Infra financeira desenvolvida do zero, sem dependência de terceiros.
            Arquitetura leve, auditável e pronta para escalar com segurança.
          </p>
        </div>
      </div>

      <div
        data-slot="card"
        className="p-6 text-center transition-shadow hover:shadow-lg border-0 shadow-none"
      >
        <div className="pt-6">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Soluções Plugáveis</h3>
          <p className="text-gray-600">
            Produtos como gateway, contas e cartões com onboarding e processos prontos
            para uso. Integração rápida para operar com eficiência desde o primeiro cliente.
          </p>
        </div>
      </div>

      <div
        data-slot="card"
        className="p-6 text-center transition-shadow hover:shadow-lg border-0 shadow-none"
      >
        <div className="pt-6">
          <Gavel className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Compliance Embutido</h3>
          <p className="text-gray-600">
            KYC, PLD e gestão de risco já integrados à arquitetura. Você opera
            com conformidade desde o primeiro usuário, sem retrabalho.
          </p>
        </div>
      </div>

      <div
        data-slot="card"
        className="p-6 text-center transition-shadow hover:shadow-lg border-0 shadow-none"
      >
        <div className="pt-6">
          <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Gestão em Tempo Real</h3>
          <p className="text-gray-600">
            Backoffice completo com visibilidade de saldos, eventos e clientes em
            tempo real. Acompanhe operações ponta a ponta com total controle.
          </p>
        </div>
      </div>

      <div
        data-slot="card"
        className="p-6 text-center transition-shadow hover:shadow-lg border-0 shadow-none"
      >
        <div className="pt-6">
          <Package className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Distribuição de Investimentos</h3>
          <p className="text-gray-600">
            Plataforma pronta para integrar produtos de investimento à sua operação.
            Liquidez, controle e rastreabilidade sem complexidade técnica.
          </p>
        </div>
      </div>

      <div
        data-slot="card"
        className="p-6 text-center transition-shadow hover:shadow-lg border-0 shadow-none"
      >
        <div className="pt-6">
          <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Casos Reais em Produção</h3>
          <p className="text-gray-600">
            A mesma tecnologia que usamos em nossos apps e contas já roda para
            parceiros reais. Você entra com produto validado e suporte técnico de ponta.
          </p>
        </div>
      </div>
    </div>

    {/* Título da seção */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Nossos <span className="text-primary">Serviços</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Soluções financeiras completas e inovadoras para atender todas as suas necessidades bancárias
      </p>
    </div>

    {/* Serviços listados */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card
          key={index}
          className="h-full hover:shadow-lg transition-shadow duration-300"
        >
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                {service.icon}
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
              {service.features.map((feature, fi) => (
                <Badge
                  key={fi}
                  variant="secondary"
                  className="mr-2 mb-2"
                >
                  {feature}
                </Badge>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href={`/produtos/${service.title.toLowerCase().replace(/\s+/g, '-').replace('ç', 'c')}`}>
                  Saiba Mais
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Emissão de CCB */}
    <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Emissão de CCB - Cédula de Crédito Bancário
        </h3>
        <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-lg">
          Em Breve - Inicia-se 9,00% a.a.
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            Título de crédito utilizado por empresas para garantir empréstimos
            ou financiamentos, com possibilidade de negociar com bancos ou outras
            instituições financeiras.
          </p>
          <ul className="space-y-3">
            {[
              "Acesso facilitado ao crédito",
              "Taxas de juros competitivas",
              "Possibilidade de negociação no mercado",
              "Segurança e confiança estruturada",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Características</h4>
          <ul className="space-y-3 text-gray-700">
            {[
              "Garantia de pagamento estruturada",
              "Flexibilidade para empresas",
              "Processo simplificado",
              "Suporte especializado",
            ].map((char, ci) => (
              <li key={ci}>• {char}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}
