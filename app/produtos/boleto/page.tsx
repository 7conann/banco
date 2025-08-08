"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Users, CheckCircle, CreditCard, Smartphone } from 'lucide-react';
import Link from "next/link";

export default function BoletoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Boleto (PIX e Híbrido)</h1>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
              Soluções de boleto que podem ser pagos via PIX, facilitando pagamentos rápidos e seguros
            </p>
          </div>
        </section>

        {/* Tipos de Boleto */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Tipos de Boleto</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Boleto PIX</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Uma solução que permite gerar boletos que podem ser pagos via PIX, 
                    facilitando o pagamento rápido e sem necessidade de processamento bancário tradicional.
                  </p>
                  <h4 className="font-semibold mb-2">Vantagens:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Pagamentos Instantâneos</li>
                    <li>• Maior segurança contra fraudes</li>
                    <li>• Facilidade para o cliente</li>
                    <li>• Fluxo de caixa acelerado</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200">
                <CardHeader>
                  <CreditCard className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Boleto Híbrido</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Um boleto tradicional que também pode ser pago via PIX, 
                    permitindo que o cliente escolha entre pagar pelo método convencional ou digital.
                  </p>
                  <h4 className="font-semibold mb-2">Vantagens:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Flexibilidade para o cliente</li>
                    <li>• Redução de inadimplência</li>
                    <li>• Mais formas de pagamento</li>
                    <li>• Facilidade de processamento</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefícios Gerais */}
        <section>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossos Boletos?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Pagamento Instantâneo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    O pagamento é processado de forma quase imediata, 
                    acelerando seu fluxo de caixa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Maior Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A utilização do PIX oferece maior segurança contra fraudes, 
                    sendo um sistema rastreável.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Smartphone className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Facilidade para o Cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    O pagamento é mais simples, podendo ser feito diretamente 
                    via PIX sem acessar outros sistemas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Redução de Inadimplência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    O pagamento via PIX tende a ser mais rápido, 
                    ajudando a reduzir a inadimplência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para modernizar seus boletos?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ofereça mais opções de pagamento aos seus clientes com nossos boletos PIX e híbridos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-white text-black">
                <Link href="/auth/register">Começar Agora</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/suporte">Falar com Especialista</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
