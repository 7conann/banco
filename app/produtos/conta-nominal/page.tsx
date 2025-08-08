"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Users, Clock } from 'lucide-react';
import Link from "next/link";

export default function ContaNominalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Conta Nominal</h1>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
              Conta bancária para depósitos específicos sem titular formalmente vinculado
            </p>
          </div>
        </section>

        {/* O que é */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">O que é uma Conta Nominal?</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                É um tipo de conta bancária usada principalmente para depósitos e transações relacionadas a fundos específicos, 
                geralmente vinculados a uma pessoa ou entidade, sem que a conta possua um titular formalmente vinculado a ela. 
                Na prática, ela não é diretamente associada a uma pessoa física ou jurídica de forma explícita, 
                mas pode ser movimentada por um responsável legal ou administrador da conta.
              </p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Vantagens da Conta Nominal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Identificação do Titular</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A identificação do titular não é vinculada diretamente à conta bancária, 
                    mas sim ao fundo ou objetivo para o qual ela é aberta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Transações Seguras</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A movimentação de valores é registrada de forma que se saiba quem são os beneficiários finais, 
                    mas sem que o público tenha acesso a essas informações.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Facilidade de Administração</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Pode ser usada para facilitar a gestão de grandes volumes de dinheiro, 
                    especialmente em situações onde há necessidade de uma conta centralizada.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Menor Burocracia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Simplifica o processo de gestão de valores sem a necessidade de uma estrutura complexa 
                    de múltiplas contas, economizando tempo e recursos administrativos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Vire Zi Credit hoje?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Abra sua Conta Nominal e tenha mais privacidade e facilidade na gestão dos seus fundos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-white text-black">
                <Link href="/auth/register">Abrir Conta Nominal</Link>
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
