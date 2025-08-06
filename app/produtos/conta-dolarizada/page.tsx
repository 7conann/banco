import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, DollarSign } from 'lucide-react';

export default function ContaDolarizadaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Conta Dolarizada (em Criptoativos)</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Proteja seu patrimônio com uma conta lastreada em criptomoedas estáveis como USDT ou USDC, garantindo paridade com o Dólar Americano.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Invista com Segurança e Dolarize seu Saldo</h2>
                <p className="text-muted-foreground mb-6">
                  Uma conta dolarizada em criptoativos é quando seu saldo está alocado em uma criptomoeda estável, geralmente lastreada em USDT ou USDC. É a solução utilizada por empresas para garantir paridade com o Dólar Americano e se proteger da volatilidade de moedas fiduciárias.
                </p>
                <Button>
                  Abra sua conta dolarizada <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Vantagens da Conta Dolarizada</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Acesso a Cold Wallets</h3>
                        <p className="text-sm text-muted-foreground">Permite que empresas se financiem por meio de uma operação estruturada, com a cédula sendo uma garantia de pagamento sem rastreabilidade.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Taxas de Juros Menores</h3>
                        <p className="text-sm text-muted-foreground">Em comparação com outros tipos de lastros, as criptomoedas podem ter taxas de juros mais baixas.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Possibilidade de Negociação</h3>
                        <p className="text-sm text-muted-foreground">USDT ou USDC podem ser negociados no mercado, oferecendo maior flexibilidade.</p>
                      </div>
                    </div>
                     <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Segurança e Confiança</h3>
                        <p className="text-sm text-muted-foreground">Uma forma estruturada e legalmente garantida de contrair dívida, se tornando um ótimo investimento contra a volatilidade.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
