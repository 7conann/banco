import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from "next/link";

export default function CcbPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Emissão de CCB (Cédula de Crédito Bancário)</h1>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              Um título de crédito para empresas garantirem empréstimos ou financiamentos, com a possibilidade de negociação com bancos e outras instituições.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left column - Text content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Financiamento Estruturado para seu Negócio
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  A Cédula de Crédito Bancário (CCB) é uma ferramenta poderosa para empresas que buscam acesso a crédito de forma segura e com melhores condições.
                </p>
                <Link href="/suporte">
                  <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-lg inline-flex items-center">
                    Saiba mais sobre CCB
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Right column - White panel with benefits list */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-black">
                  Vantagens da CCB
                </h3>
                
                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Acesso ao Crédito
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Permite que empresas se financiem através de uma operação estruturada, com a cédula sendo uma garantia de pagamento sem rastreabilidade.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Taxas de Juros Menores
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Em comparação com outros tipos de lastros, as CCBs podem ter taxas de juros mais baixas.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Possibilidade de Negociação
                      </h4>
                      <p className="text-gray-600 text-sm">
                        CCB pode ser negociada no mercado, oferecendo maior flexibilidade.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Segurança e Confiança
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Uma forma estruturada e legalmente garantida de contrair dívida, se tornando um ótimo investimento contra a volatilidade.
                      </p>
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
