"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

const produtos = [
  {
    title: "Conta Nominal",
    description: "Conta bancária para depósitos específicos sem titular formalmente vinculado.",
    href: "/produtos/conta-nominal",
    category: "Contas"
  },
  {
    title: "ZIPAY",
    description: "Pagamentos instantâneos e gestão de fundos em Dólar e Criptomoedas.",
    href: "/produtos/zipay",
    category: "Pagamentos"
  },
  {
    title: "Boleto (PIX e Híbrido)",
    description: "Boletos que podem ser pagos via PIX ou método tradicional.",
    href: "/produtos/boleto",
    category: "Pagamentos"
  },
  {
    title: "Split de Pagamento",
    description: "Divisão automática de pagamentos entre diferentes beneficiários.",
    href: "/produtos/split-pagamento",
    category: "Pagamentos"
  },
  {
    title: "Conta Escrow",
    description: "Conta de custódia onde o dinheiro é mantido até condições serem cumpridas.",
    href: "/produtos/conta-escrow",
    category: "Contas"
  },
  {
    title: "Conta Dolarizada",
    description: "Conta com saldo alocado em criptomoedas USDT ou USDC.",
    href: "/produtos/conta-dolarizada",
    category: "Contas"
  },
  {
    title: "Cartão",
    description: "Cartão pré-pago com conversão cripto integrada.",
    href: "/produtos/cartao",
    category: "Cartões"
  },
  {
    title: "CCB - Linha de Crédito",
    description: "Cédula de Crédito Bancário para empréstimos e financiamentos.",
    href: "/produtos/ccb",
    category: "Crédito"
  },
  {
    title: "Criptomoedas",
    description: "Negociação e custódia de criptoativos com segurança.",
    href: "/produtos/criptomoedas",
    category: "Investimentos"
  }
];

const categorias = ["Todos", "Contas", "Pagamentos", "Cartões", "Crédito", "Investimentos"];

export default function ProdutosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Nossos Produtos</h1>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
              Soluções financeiras completas para pessoas físicas e jurídicas
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtos.map((produto) => (
                <div key={produto.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                      {produto.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{produto.title}</h3>
                  <p className="text-gray-600 mb-6">{produto.description}</p>
                  <Link href={produto.href}>
                    <Button variant="outline" className="w-full group">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Nossa equipe está pronta para desenvolver a solução ideal para seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  Criar Conta
                </Button>
              </Link>
              <Link href="/suporte">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
