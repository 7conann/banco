import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, ArrowRight, Code, Smartphone, CreditCard, FileText, DollarSign, Shield, Settings, Clock, Globe, TrendingUp } from 'lucide-react'
import Link from "next/link"

export default function AzipayPage() {
  const pixFeatures = [
    "Disponibilidade 24/7: transações concluídas em segundos, a qualquer dia e horário",
    "QR Code Dinâmico: geração de cobranças personalizadas que podem ser integradas em sites, apps e sistemas de gestão",
    "Reversão Automática: em casos de duplicidade ou erro de valor, o estorno é feito de forma quase imediata"
  ]

  const tedFeatures = [
    "Alcance Bancário Completo: permite movimentações para contas de qualquer banco, com liquidação em horário comercial",
    "Controle de Custos: tarifas competitivas e relatórios detalhados por beneficiário e data"
  ]

  const cryptoFeatures = [
    "USDT e USDC Nativos: o saldo em reais pode ser convertido automaticamente em Tether (USDT) ou USD Coin (USDC) pela própria plataforma",
    "Paridade com o Dólar: proteção contra volatilidade do real, mantendo o poder de compra atrelado ao dólar americano",
    "Cold Wallets Integradas: segurança reforçada com armazenamento 'off-line' dos ativos digitais"
  ]

  const apiFeatures = [
    "Fluxo Automatizado: captura de pagamentos via Pix ou TED e conversão imediata para USDT/USDC conforme regras configuráveis",
    "Webhooks em Tempo Real: notificação instantânea de recebimentos, conversões e saldos atualizados",
    "SDKs e Documentação Completa: bibliotecas para as principais linguagens e exemplos prontos para acelerar a implementação"
  ]

  const adminFeatures = [
    "Dashboard Unificado: visão consolidada de todas as transações em reais e em cripto",
    "Relatórios Customizáveis: exportação de extratos por período, tipo de transação e moeda",
    "Geração de Notas Fiscais e Integração ERP: vínculo direto com sistemas de gestão financeira"
  ]

  const privacyFeatures = [
    "Controle de Acesso: perfis de usuário com permissões granulares para executar consultas, autorizar pagamentos ou gerenciar conversões",
    "Criptografia de Ponta a Ponta: todos os dados e chaves privadas de criptoativos são protegidos por protocolos avançados"
  ]

  const mainFeatures = [
    {
      icon: Smartphone,
      title: "Pagamentos Instantâneos via Pix",
      description: "Transações 24/7 com QR Code dinâmico e reversão automática",
      features: pixFeatures
    },
    {
      icon: CreditCard,
      title: "Transferências Tradicionais (TED)",
      description: "Movimentações para qualquer banco com controle de custos",
      features: tedFeatures
    },
    {
      icon: DollarSign,
      title: "Conta Dolarizada em Criptoativos",
      description: "USDT e USDC nativos com paridade ao dólar",
      features: cryptoFeatures
    },
    {
      icon: Code,
      title: "API de Integração Direta",
      description: "Fluxo automatizado com webhooks em tempo real",
      features: apiFeatures
    },
    {
      icon: Settings,
      title: "Administração Simplificada",
      description: "Dashboard unificado com relatórios customizáveis",
      features: adminFeatures
    },
    {
      icon: Shield,
      title: "Privacidade e Compliance",
      description: "Controle de acesso com criptografia avançada",
      features: privacyFeatures
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-20 border-b">
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-yellow-400 rounded-lg mr-4">
                <Zap className="h-12 w-12 text-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              <span className="text-yellow-500">Zipay</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Solução de conta digital focada em pagamentos instantâneos e gestão de fundos em Dólar e Criptomoedas. 
              Integração nativa com Pix e TED, além de API própria para conversão e custódia automática de saldos em USDT e USDC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8">
                Ver Documentação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Zipay */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">O que é a Zipay?</h2>
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Zipay permite que empresas e pessoas físicas operem com a paridade do dólar americano sem sair do ambiente de sua conta. 
                  Por meio de integração nativa com Pix e TED, além de uma API própria para conversão e custódia automática de saldos em USDT e USDC, 
                  oferecemos uma solução completa para gestão financeira moderna.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Principais Funcionalidades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar pagamentos e criptomoedas em uma única plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-yellow-400 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-black">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600 ml-16">{feature.description}</p>
                </CardHeader>
                <CardContent className="ml-16">
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Por que escolher a Zipay?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Vantagens exclusivas para sua operação financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">Pagamentos Instantâneos</h3>
                <p className="text-gray-600">Transações Pix 24/7 com confirmação em segundos</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">Proteção Cambial</h3>
                <p className="text-gray-600">Mantenha seus fundos em dólar com USDT/USDC</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">Integração Completa</h3>
                <p className="text-gray-600">APIs robustas com webhooks em tempo real</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Pronto para revolucionar seus pagamentos?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Comece a usar a Zipay hoje mesmo e tenha acesso a todas as funcionalidades de pagamentos instantâneos e gestão de criptomoedas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-lg px-8">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
