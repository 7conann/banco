import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Heart,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Handshake,
  Building,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react"

export default function InstitucionalPage() {
  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Protegemos os dados e recursos dos nossos clientes com os mais altos padrões de segurança.",
    },
    {
      icon: Heart,
      title: "Transparência",
      description: "Operamos com total transparência em todas as nossas relações comerciais e técnicas.",
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Buscamos constantemente novas tecnologias para oferecer as melhores soluções.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhamos em parceria com nossos clientes para alcançar objetivos comuns.",
    },
  ]

  const team = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      description: "15+ anos em fintech e banking. Ex-executivo de grandes bancos.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Ana Santos",
      role: "CTO",
      description: "Especialista em arquitetura de sistemas financeiros e blockchain.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Roberto Lima",
      role: "Head of Product",
      description: "Product Manager com experiência em soluções B2B para fintechs.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Marina Costa",
      role: "Head of Compliance",
      description: "Especialista em regulamentação financeira e gestão de riscos.",
      image: "/placeholder-user.jpg",
    },
  ]

  const partners = [
    {
      name: "Celcoin",
      description: "Parceria estratégica para soluções de pagamento",
      category: "Pagamentos",
    },
    {
      name: "Banco Central",
      description: "Autorização para operar como instituição financeira",
      category: "Regulamentação",
    },
    {
      name: "AWS",
      description: "Infraestrutura cloud segura e escalável",
      category: "Tecnologia",
    },
    {
      name: "Microsoft",
      description: "Soluções enterprise e inteligência artificial",
      category: "Tecnologia",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Fundação da Zi Credit",
      description: "Início das operações com foco em soluções B2B",
    },
    {
      year: "2021",
      title: "Primeira API Lançada",
      description: "Banking as a Service disponível para parceiros",
    },
    {
      year: "2022",
      title: "Expansão Internacional",
      description: "Suporte a múltiplas moedas e operações globais",
    },
    {
      year: "2023",
      title: "Tokenização de Ativos",
      description: "Lançamento da plataforma de RWA tokenization",
    },
    {
      year: "2024",
      title: "Real Digital",
      description: "Primeira fintech a suportar CBDC brasileiro",
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
              Sobre a <span className="text-primary">Zi Credit</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Somos uma fintech brasileira focada em fornecer infraestrutura financeira robusta e APIs inovadoras para
              empresas que querem revolucionar o mercado.
            </p>
            <Button size="lg" className="text-lg px-8">
              Conheça Nossa História
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Nossa Missão</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Democratizar o acesso a serviços financeiros através de tecnologia inovadora, fornecendo APIs robustas
                  e soluções escaláveis que permitem a qualquer empresa criar produtos financeiros de classe mundial.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Globe className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Nossa Visão</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser a principal plataforma de infraestrutura financeira da América Latina, conectando empresas,
                  desenvolvedores e usuários finais em um ecossistema financeiro mais inclusivo e eficiente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam todas as nossas decisões e relacionamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Jornada</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Marcos importantes na construção da Zi Credit
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-2"></div>}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-sm">
                          {milestone.year}
                        </Badge>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais experientes dedicados a transformar o mercado financeiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Parceiros</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com as melhores empresas do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <Handshake className="h-6 w-6 text-primary" />
                      {partner.name}
                    </CardTitle>
                    <Badge variant="outline">{partner.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar você a construir o futuro dos serviços financeiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Escritório</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Av. Paulista, 1000
                  <br />
                  São Paulo - SP
                  <br />
                  01310-100
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  contato@zicredit.com.br
                  <br />
                  suporte@zicredit.com.br
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +55 (11) 3000-0000
                  <br />
                  Seg-Sex: 9h às 18h
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos construir juntos?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a inovar no mercado financeiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Ver Nossos Produtos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
