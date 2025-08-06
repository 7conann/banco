import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, CreditCard } from 'lucide-react';

export default function CartaoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cartão Pré-Pago Zipay com Conversão Cripto</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Use seus criptoativos para pagamentos globais. Converta seu saldo USDT/USDC em tempo real, sem IOF em transações internacionais.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Vantagens do Cartão Zi Credit</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Internacionalização com Criptomoedas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Pagamento Global.</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Conversão em Tempo Real.</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Sem necessidade de câmbio antecipado.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Isenção de IOF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Economia real de 6,38% em cada compra internacional, pois opera como pré-pago com lastro em cripto.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Controle Total dos Gastos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Recargas Instantâneas.</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Sem fatura surpresa.</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Bloqueio e desbloqueio via app.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Privacidade e Segurança</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Sem vínculo bancário direto.</p>
                  <p className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Transações criptografadas.</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Ideal para Nômades, Viajantes e Empresas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Evite taxas bancárias, pague fornecedores internacionais com custo zero de IOF e aproveite um funcionamento 100% online.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
