import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
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
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Por que usar o Split de Pagamento?</h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0">
                  Nossa solução de split de pagamento é essencial para negócios que precisam repassar valores a múltiplos participantes, como marketplaces, plataformas de serviços ou soluções de financiamento. Evite a subtributação e automatize o fluxo financeiro.
                </p>
                <Button className="mx-auto md:mx-0">
                  Entenda como funciona <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Vantagens do Split de Pagamento</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Automatização do Repasse</h4>
                      <p className="text-gray-600 text-sm">Pagamentos divididos automaticamente entre vendedores, parceiros, etc., sem intervenção manual.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Gestão Simplificada</h4>
                      <p className="text-gray-600 text-sm">Ideal para empresas que recebem dinheiro em nome de terceiros, como em marketplaces.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Redução de Erros</h4>
                      <p className="text-gray-600 text-sm">Minimiza a chance de erros humanos nos repasses, garantindo pagamentos corretos e pontuais.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tributação Correta</h4>
                      <p className="text-gray-600 text-sm">A tributação é devidamente separada entre as partes, chegando corretamente na conta destino.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
