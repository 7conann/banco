import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, CreditCard, Shield, Globe, Zap, DollarSign, Smartphone, Star, TrendingUp, Users, Clock, Banknote, Lock, Wallet } from 'lucide-react';
import Link from "next/link";

export default function CartaoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-16 pt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-primary text-black px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Sem IOF • Conversão Instantânea
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black leading-tight">
                    Cartão da Zi Credit em 
                    <span className="text-primary"> Criptomoedas</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    O cartão pré-pago Zipay opera como um cartão tradicional de débito/crédito, mas com uma diferença fundamental: 
                    o saldo é pré-carregado pela própria conta Zipay, podendo ser em reais (R$) ou convertido automaticamente de 
                    criptoativos como USDT ou USDC.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/suporte">
                      <Button size="lg" className="bg-primary hover:bg-primary text-black font-semibold px-8 py-3">
                        Solicitar Cartão
                        <CreditCard className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/suporte">
                      <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                        Saiba Mais
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-10 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <div className="w-24 h-8 bg-primary rounded flex items-center justify-center">
                        <span className="text-black font-bold text-xs">MASTERCARD</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="text-2xl font-mono mb-4">•••• •••• •••• 2024</div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-xs text-gray-300 mb-1">TITULAR</div>
                          <div className="font-semibold">Zi Credit</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-300 mb-1">VÁLIDO</div>
                          <div className="font-semibold">12/28</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Como Funciona</h1>
                <p className="text-lg text-black max-w-4xl mx-auto">
                  Permite realizar pagamentos nacionais e internacionais, online ou físicos, sem necessidade de uma conta 
                  bancária convencional ou aprovação de crédito. Após o carregamento, o valor é imediatamente disponibilizado 
                  no cartão e pode ser utilizado para compras em qualquer estabelecimento que aceite as bandeiras internacionais 
                  (como Visa ou Mastercard), com conversão em tempo real de cripto para a moeda local, quando necessário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-black text-center mb-12">Principais Vantagens</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Internacionalização */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary p-3 rounded-lg mr-4">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-black">Internacionalização com Criptomoedas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-black mb-1">Pagamento Global</h4>
                          <p className="text-gray-600 text-sm">Use seus criptoativos para pagar em qualquer país, como se estivesse usando um cartão tradicional.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-black mb-1">Conversão em Tempo Real</h4>
                          <p className="text-gray-600 text-sm">A Zipay converte seu saldo USDT/USDC automaticamente na hora da compra, de forma transparente e com cotação competitiva.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-black mb-1">Sem necessidade de câmbio antecipado</h4>
                          <p className="text-gray-600 text-sm">Você mantém seus fundos dolarizados em cripto e só converte no momento do uso.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* IOF */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary p-3 rounded-lg mr-4">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-black">Isenção de IOF nas Transações</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary border border-black p-4 rounded-lg mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold text-black mb-1">-6,38%</div>
                          <div className="text-sm font-semibold text-black">de economia em cada compra internacional</div>
                        </div>
                        <TrendingUp className="w-10 h-10 text-black" />
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Ao contrário dos cartões de crédito convencionais emitidos no Brasil, o cartão pré-pago Zipay não incide 
                      IOF de 6,38% sobre transações internacionais, pois opera como cartão pré-pago com lastro direto em cripto. 
                      Isso representa economia real em cada compra feita fora do país ou em sites estrangeiros.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Controle Total */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary p-3 rounded-lg mr-4">
                        <Smartphone className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-black">Controle Total dos Gastos</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Recargas Instantâneas</h4>
                        <p className="text-gray-600 text-sm">Você define quanto deseja carregar e pode ajustar o limite em tempo real pela plataforma Zipay.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Sem fatura surpresa</h4>
                        <p className="text-gray-600 text-sm">Por não se tratar de crédito rotativo, você só gasta o que já possui, evitando juros ou endividamento.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Bloqueio e desbloqueio via app</h4>
                        <p className="text-gray-600 text-sm">Máxima segurança em caso de perda ou uso não autorizado.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacidade e Segurança */}
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary p-3 rounded-lg mr-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-black">Privacidade e Segurança</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Sem vínculo bancário direto</h4>
                        <p className="text-gray-600 text-sm">O cartão é gerado a partir de sua conta Zipay, que pode ser alimentada com criptoativos. Isso permite maior privacidade financeira.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Transações criptografadas</h4>
                        <p className="text-gray-600 text-sm">Integradas à segurança blockchain da custódia Zipay e com proteção antifraude nas bandeiras internacionais.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4">Ideal para Nômades Digitais, Viajantes e Empresas</h2>
                <p className="text-lg text-gray-600">
                  Perfeito para quem busca liberdade financeira e economia em transações internacionais
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-3">Nômades Digitais</h3>
                    <p className="text-gray-600">Trabalhe de qualquer lugar do mundo sem se preocupar com taxas bancárias internacionais</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-3">Viajantes</h3>
                    <p className="text-gray-600">Viaje com tranquilidade usando um cartão que funciona globalmente</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-3">Empresas</h3>
                    <p className="text-gray-600">Pague fornecedores internacionais com economia real e sem burocracia</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-black text-center">Benefícios Exclusivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Evite taxas bancárias internacionais e barreiras cambiais</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Pagamento de fornecedores e serviços internacionais com custo zero de IOF</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Spreads reduzidos em todas as conversões</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Funcionamento 100% online, sem necessidade de comprovação de renda ou análise de crédito</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Pronto para Revolucionar seus Pagamentos?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Solicite seu cartão Zipay e tenha acesso a pagamentos globais com seus criptoativos, 
                sem IOF e com total segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/suporte">
                  <Button size="lg" className="bg-primary hover:bg-white text-black font-semibold px-10 py-4 text-lg">
                    Solicitar Cartão Agora
                    <CreditCard className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/suporte">
                  <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-lg">
                    Falar com Especialista
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
