import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Bitcoin } from 'lucide-react';

export default function CriptomoedasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Compra e Venda de Criptomoedas</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Acesse o mercado de ativos digitais com segurança e as melhores taxas. Spreed de 2% a 5% por transação.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Negocie Cripto com a Zi Credit</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Oferecemos uma plataforma robusta para você comprar e vender criptomoedas com liquidez e segurança, diretamente da sua conta.
              </p>
              <Button size="lg">
                Começar a Negociar <Bitcoin className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
