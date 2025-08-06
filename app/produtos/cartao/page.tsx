import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, CreditCard, Shield, Globe, Zap, DollarSign, Smartphone } from 'lucide-react';

export default function CartaoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cartão Pré-Pago Zipay com Conversão Cripto Integrada</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              O cartão pré-pago Zipay opera como um cartão tradicional de débito/crédito, mas com uma diferença fundamental: 
              o saldo é pré-carregado pela própria conta Zipay, podendo ser em reais (R$) ou convertido automaticamente de 
              criptoativos como USDT ou USDC.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O que é o Cartão Zipay</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Permite realizar pagamentos nacionais e internacionais, online ou físicos, sem necessidade de uma conta 
                bancária convencional ou aprovação de crédito. Após o carregamento, o valor é imediatamente disponibilizado 
                no cartão e pode ser utilizado para compras em qualquer estabelecimento que aceite as bandeiras internacionais 
                (como Visa ou Mastercard), com conversão em tempo real de cripto para a moeda local, quando necessário.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <Globe className="w-12 h-12 text-yellow-600 mb-4" />
                  <CardTitle className="text-xl">Internacionalização com Criptomoedas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Pagamento Global</p>
                      <p className="text-sm text-muted-foreground">Use seus criptoativos para pagar em qualquer país, como se estivesse usando um cartão tradicional.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Conversão em Tempo Real</p>
                      <p className="text-sm text-muted-foreground">A Zipay converte seu saldo USDT/USDC automaticamente na hora da compra, de forma transparente e com cotação competitiva.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Sem necessidade de câmbio antecipado</p>
                      <p className="text-sm text-muted-foreground">Você mantém seus fundos dolarizados em cripto e só converte no momento do uso.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Isenção de IOF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ao contrário dos cartões de crédito convencionais emitidos no Brasil, o cartão pré-pago Zipay não incide 
                    IOF de 6,38% sobre transações internacionais, pois opera como cartão pré-pago com lastro direto em cripto.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-800">Economia real de 6,38% em cada compra internacional!</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Controle Total dos Gastos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Recargas Instantâneas</p>
                      <p className="text-sm text-muted-foreground">Você define quanto deseja carregar e pode ajustar o limite em tempo real pela plataforma Zipay.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Sem fatura surpresa</p>
                      <p className="text-sm text-muted-foreground">Por não se tratar de crédito rotativo, você só gasta o que já possui, evitando juros ou endividamento.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Bloqueio e desbloqueio via app</p>
                      <p className="text-sm text-muted-foreground">Máxima segurança em caso de perda ou uso não autorizado.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Shield className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Privacidade e Segurança</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Sem vínculo bancário direto</p>
                      <p className="text-sm text-muted-foreground">O cartão é gerado a partir de sua conta Zipay, que pode ser alimentada com criptoativos. Isso permite maior privacidade financeira.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Transações criptografadas</p>
                      <p className="text-sm text-muted-foreground">Integradas à segurança blockchain da custódia Zipay e com proteção antifraude nas bandeiras internacionais.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 lg:col-span-2 border-2 border-orange-200">
                <CardHeader>
                  <Zap className="w-12 h-12 text-orange-600 mb-4" />
                  <CardTitle className="text-xl">Ideal para Nômades Digitais, Viajantes e Empresas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p>Evite taxas bancárias internacionais e barreiras cambiais</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p>Pagamento de fornecedores e serviços internacionais com custo zero de IOF e spreads reduzidos</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p>Funcionamento 100% online, sem necessidade de comprovação de renda ou análise de crédito</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6">
                Solicite seu cartão Zipay e tenha acesso a pagamentos globais com seus criptoativos
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Solicitar Cartão <CreditCard className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
