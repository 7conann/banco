import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Book,
  Zap,
  Shield,
  Globe,
  Terminal,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Download,
  ExternalLink,
  Activity,
} from "lucide-react"

export default function DesenvolvedoresPage() {
  const sdks = [
    {
      name: "JavaScript/Node.js",
      description: "SDK completo para aplicações web e backend",
      version: "v2.1.0",
      downloads: "50k+",
      language: "JavaScript",
    },
    {
      name: "Python",
      description: "Biblioteca Python para integração rápida",
      version: "v1.8.2",
      downloads: "30k+",
      language: "Python",
    },
    {
      name: "PHP",
      description: "SDK PHP para e-commerce e aplicações web",
      version: "v1.5.1",
      downloads: "25k+",
      language: "PHP",
    },
    {
      name: "Java",
      description: "SDK Java para aplicações enterprise",
      version: "v2.0.0",
      downloads: "20k+",
      language: "Java",
    },
  ]

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/accounts",
      description: "Criar nova conta",
      category: "Contas",
    },
    {
      method: "GET",
      endpoint: "/api/v1/accounts/{id}/balance",
      description: "Consultar saldo",
      category: "Contas",
    },
    {
      method: "POST",
      endpoint: "/api/v1/transfers",
      description: "Realizar transferência",
      category: "Transferências",
    },
    {
      method: "POST",
      endpoint: "/api/v1/cards",
      description: "Emitir cartão",
      category: "Cartões",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Para <span className="text-primary">Desenvolvedores</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              APIs robustas, SDKs em múltiplas linguagens e documentação completa para integrar soluções financeiras em
              minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Code className="mr-2 h-5 w-5" />
                Ver Documentação
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Terminal className="mr-2 h-5 w-5" />
                Playground API
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{"<"}100ms</div>
              <div className="text-muted-foreground">Latência média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Endpoints</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="documentation" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="documentation">Documentação</TabsTrigger>
              <TabsTrigger value="sdks">SDKs</TabsTrigger>
              <TabsTrigger value="api-reference">API Reference</TabsTrigger>
              <TabsTrigger value="support">Suporte</TabsTrigger>
            </TabsList>

            <TabsContent value="documentation" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Book className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>Guia de Início Rápido</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Comece a integrar nossas APIs em menos de 10 minutos com nosso guia passo a passo.
                    </CardDescription>
                    <Button variant="outline" className="w-full bg-transparent">
                      Começar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Code className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Exemplos de Código</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Exemplos práticos em múltiplas linguagens para acelerar sua implementação.
                    </CardDescription>
                    <Button variant="outline" className="w-full bg-transparent">
                      Ver Exemplos
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Shield className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle>Segurança</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Aprenda sobre autenticação, criptografia e melhores práticas de segurança.
                    </CardDescription>
                    <Button variant="outline" className="w-full bg-transparent">
                      Guia de Segurança
                      <Shield className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Zap className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle>Webhooks</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Configure webhooks para receber notificações em tempo real sobre eventos.
                    </CardDescription>
                    <Button variant="outline" className="w-full bg-transparent">
                      Configurar Webhooks
                      <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle>Casos de Uso</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Explore diferentes cenários e implementações para sua aplicação.
                    </CardDescription>
                    <Button variant="outline" className="w-full bg-transparent">
                      Ver Casos de Uso
                      <FileText className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <Globe className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle>Ambientes</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Teste em sandbox antes de ir para produção com dados reais.
                    </CardDescription>
                    <Button variant="outline" className="w-full bg-transparent">
                      Acessar Sandbox
                      <Globe className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sdks" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sdks.map((sdk, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <Code className="h-6 w-6 text-primary" />
                          {sdk.name}
                        </CardTitle>
                        <Badge variant="secondary">{sdk.version}</Badge>
                      </div>
                      <CardDescription>{sdk.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">{sdk.downloads} downloads</span>
                        <Badge variant="outline">{sdk.language}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Instalar
                        </Button>
                        <Button variant="outline">
                          <FileText className="mr-2 h-4 w-4" />
                          Docs
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="api-reference" className="mt-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Referência da API</h3>
                  <p className="text-muted-foreground">Explore todos os endpoints disponíveis em nossa API RESTful</p>
                </div>

                <div className="grid gap-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Badge
                              variant={endpoint.method === "GET" ? "secondary" : "default"}
                              className={
                                endpoint.method === "GET" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                              }
                            >
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{endpoint.endpoint}</code>
                            <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                          </div>
                          <Badge variant="outline">{endpoint.category}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button size="lg">
                    Ver Documentação Completa
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Suporte para Desenvolvedores</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-primary" />
                          Comunidade
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Participe da nossa comunidade de desenvolvedores no Discord
                        </p>
                        <Button variant="outline" className="w-full bg-transparent">
                          Entrar na Comunidade
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Activity className="h-5 w-5 text-green-500" />
                          Status da API
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Todos os sistemas operacionais</span>
                        </div>
                        <Button variant="outline" className="w-full bg-transparent">
                          Ver Status Detalhado
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Recursos Adicionais</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Suporte 24/7</div>
                        <div className="text-sm text-muted-foreground">Equipe técnica disponível sempre</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">SLA Garantido</div>
                        <div className="text-sm text-muted-foreground">99.9% de uptime garantido</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Consultoria Técnica</div>
                        <div className="text-sm text-muted-foreground">Arquitetos de solução dedicados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece a desenvolver hoje</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crie sua conta gratuita e tenha acesso completo às nossas APIs em ambiente de sandbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Criar Conta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
