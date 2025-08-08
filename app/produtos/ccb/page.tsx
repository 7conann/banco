import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, FileText } from 'lucide-react';

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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Financiamento Estruturado para seu Negócio</h2>
                <p className="text-muted-foreground mb-6">
                  A Cédula de Crédito Bancário (CCB) é uma ferramenta poderosa para empresas que buscam acesso a crédito de forma segura e com melhores condições.
                </p>
                <Button>
                  Saiba mais sobre CCB <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Acesso ao Crédito</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Permite que empresas se financiem através de uma operação estruturada, usando a cédula como garantia.</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Taxas de Juros Menores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Por serem garantidas por ativos, as CCBs podem oferecer taxas de juros mais competitivas.</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Possibilidade de Negociação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">A CCB pode ser negociada no mercado, oferecendo maior flexibilidade para a empresa.</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary">
                  <CardHeader>
                    <CardTitle className="text-white">Segurança e Confiança</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Oferece uma forma estruturada e legalmente garantida de contrair dívida, atraindo investidores.</p>
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
