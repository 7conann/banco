import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CreditCard,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  BarChart3,
  Smartphone,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Footer } from "@/components/footer"

export default function ProdutosPage() {
  const products = [
    {
      id: "banking-as-a-service",
      title: "Banking as a Service",
      description: "Infraestrutura bancária completa via API para criar soluções financeiras personalizadas",
      icon: Building2,
      features: [
        "Contas multimoeda (BRL, USD, EUR)",
        "Transferências internacionais",
        "Gestão de saldos em tempo real",
        "Compliance automático",
        "APIs RESTful completas",
      ],
      benefits: [
        "Redução de 80% no tempo de implementação",
        "Conformidade regulatória garantida",
        "Escalabilidade automática",
        "Suporte 24/7",
      ],
    },
    {
      id: "investment-as-a-service",
      title: "Investment as a Service",
      description: "Plataforma de investimentos integrada para oferecer produtos financeiros aos seus clientes",
      icon: TrendingUp,
      features: [
        "Fundos de investimento",
        "Renda fixa e variável",
        "Carteiras automatizadas",
        "Relatórios detalhados",
        "Integração com corretoras",
      ],
      benefits: ["Diversificação de receita", "Produtos regulamentados", "Interface intuitiva", "Analytics avançados"],
    },
    {
      id: "onboarding-compliance",
      title: "Onboarding e Compliance",
      description: "Solução completa para verificação de identidade e gestão de risco",
      icon: Shield,
      features: [
        "KYC automatizado",
        "Verificação biométrica",
        "Análise de risco",
        "Monitoramento contínuo",
        "Relatórios regulatórios",
      ],
      benefits: [
        "Aprovação em minutos",
        "Redução de fraudes",
        "Conformidade garantida",
        "Experiência do usuário otimizada",
      ],
    },
    {
      id: "emissao-cartoes",
      title: "Emissão de Cartões",
      description: "Cartões físicos e virtuais white-label com gestão completa",
      icon: CreditCard,
      features: [
        "Cartões físicos e virtuais",
        "Controles em tempo real",
        "Cashback personalizado",
        "Gestão de limites",
        "Tokenização segura",
      ],
      benefits: ["Marca própria", "Segurança avançada", "Controle total", "Integração simples"],
    },
    {
      id: "azipay",
      title: "Azipay",
      description: "Gateway de pagamentos com suporte completo ao Real Digital (BRL)",
      icon: Zap,
      features: [
        "PIX instantâneo",
        "Cartões de crédito/débito",
        "Boleto bancário",
        "Real Digital (CBDC)",
        "Checkout transparente",
      ],
      benefits: ["Taxas competitivas", "Aprovação alta", "Integração rápida", "Suporte ao Real Digital"],
    },
    
    {
      id: "conta-empresarial",
      title: "Conta Empresarial",
      description: "Conta PJ completa com gestão financeira integrada",
      icon: Users,
      features: [
        "Conta corrente PJ",
        "Cartão empresarial",
        "Gestão de fluxo de caixa",
        "Conciliação automática",
        "Relatórios gerenciais",
      ],
      benefits: ["Gestão simplificada", "Controle total", "Relatórios automáticos", "Integração contábil"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Produtos <span className="text-primary">Financeiros</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Infraestrutura completa para criar soluções financeiras inovadoras. APIs robustas, compliance garantido e
              suporte especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Falar com Consultor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções modulares que se adaptam às suas necessidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <product.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        API First
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Funcionalidades
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BarChart3 className="h-4 w-4 text-blue-500 mr-2" />
                        Benefícios
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full mt-6">
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa equipe e descubra como podemos ajudar a construir sua solução financeira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Agendar Demonstração
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Documentação Técnica
            </Button>
          </div>
        </div>
      </section>
      <Footer/>
      
    </div>
  )
}
