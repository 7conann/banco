import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SplitPagamentoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Split de Pagamento</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Divida o valor de um pagamento entre diferentes beneficiários de maneira automática, ideal para marketplaces e plataformas de vendas.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Por que usar o Split de Pagamento?</h2>
                <p className="text-muted-foreground mb-6">
                  Nossa solução de split de pagamento é essencial para negócios que precisam repassar valores a múltiplos participantes, como marketplaces, plataformas de serviços ou soluções de financiamento. Evite a subtributação e automatize o fluxo financeiro.
                </p>
                <Button>
                  Entenda como funciona <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Automatização do Repasse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Pagamentos divididos automaticamente entre vendedores, parceiros, etc., sem intervenção manual.</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Gestão Simplificada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Ideal para empresas que recebem dinheiro em nome de terceiros, como em marketplaces.</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Redução de Erros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Minimiza a chance de erros humanos nos repasses, garantindo pagamentos corretos e pontuais.</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Tributação Correta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">A tributação é devidamente separada entre as partes, chegando corretamente na conta destino.</p>
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
