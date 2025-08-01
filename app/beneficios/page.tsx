import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  HeadphonesIcon,
  DollarSign,
  Layers,
  CreditCard,
  Users,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const mainBenefits = [
  {
    icon: Smartphone,
    title: "Plataforma 100% Digital",
    description:
      "Sem agências físicas, o Zi Credit proporciona uma plataforma totalmente online, com acesso a todos os serviços bancários através de um aplicativo intuitivo e de fácil navegação.",
    features: ["App intuitivo", "Acesso 24/7", "Interface moderna", "Navegação simplificada"],
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Personalizado e Rápido",
    description:
      "O Zi Credit se destaca pela qualidade do atendimento ao cliente. Através de chatbots inteligentes e suporte humano disponível 24/7.",
    features: ["Chatbots inteligentes", "Suporte humano 24/7", "Resolução rápida", "Atendimento personalizado"],
  },
  {
    icon: DollarSign,
    title: "Isenção de Tarifas Abusivas",
    description:
      "O Zi Credit oferece uma política de tarifas transparentes e justas. Muitas taxas tradicionais de bancos físicos são eliminadas.",
    features: ["Tarifas transparentes", "Sem taxas ocultas", "Economia real", "Política justa"],
  },
  {
    icon: Layers,
    title: "Integração com Ecossistema de Fintechs",
    description:
      "O banco se integra facilmente com outras plataformas de fintechs, oferecendo aos usuários a possibilidade de contratar produtos diversos.",
    features: ["Seguros integrados", "Investimentos", "Empréstimos", "Sem burocracia"],
  },
]

const products = [
  {
    icon: CreditCard,
    title: "Conta Nominal",
    description:
      "Tipo de conta bancária usada principalmente para depósitos e transações relacionadas a fundos específicos.",
    benefits: [
      "Identificação do titular",
      "Facilidade de administração",
      "Menor burocracia",
      "Privacidade para investidores",
    ],
  },
  {
    icon: FileText,
    title: "Boleto PIX e Híbrido",
    description: "Soluções que permitem gerar boletos que podem ser pagos via PIX ou método tradicional.",
    benefits: ["Pagamentos instantâneos", "Maior segurança", "Facilidade para cliente", "Flexibilidade de pagamento"],
  },
  {
    icon: Users,
    title: "Split de Pagamento",
    description:
      "Funcionalidade que divide o valor de um pagamento entre diferentes beneficiários de maneira automática.",
    benefits: ["Automatização do repasse", "Facilidade na gestão", "Redução de erros", "Rapidez e eficiência"],
  },
  {
    icon: Shield,
    title: "Conta Escrow",
    description:
      "Conta de custódia onde o dinheiro é mantido por uma terceira parte neutra até que todas as condições sejam cumpridas.",
    benefits: ["Segurança para transações", "Atenua riscos de fraude", "Confiança nas negociações", "Proteção legal"],
  },
]

export default function BeneficiosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Benefícios que fazem a<span className="text-yellow-600"> diferença</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubra todas as vantagens de ser cliente Zi Credit e como podemos transformar sua experiência
                bancária.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Abrir minha conta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Diferenciais da Zi Credit</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conheça os principais benefícios que tornam o Zi Credit único no mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{benefit.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {benefit.features.map((feature, featureIndex) => (
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

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produtos e Soluções</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conheça nossos produtos exclusivos desenvolvidos para atender suas necessidades financeiras.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{product.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          Exclusivo
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Por que escolher a Zi Credit?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tecnologia e Inovação</h3>
                  <p className="text-gray-600 text-sm">
                    Adotamos tecnologias avançadas que tornam suas transações mais rápidas e seguras.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Soluções Flexíveis</h3>
                  <p className="text-gray-600 text-sm">
                    Ferramentas como conta escrow para transações de maior valor com total segurança.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Economia Real</h3>
                  <p className="text-gray-600 text-sm">
                    Redução de custos bancários com tarifas mais acessíveis e transparentes.
                  </p>
                </div>
              </div>

              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4">
                Começar agora
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
