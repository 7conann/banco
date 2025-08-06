"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, DollarSign, Shield, Clock, Smartphone, BarChart3 } from 'lucide-react';
import Link from "next/link";

export default function ZipayPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">ZIPAY (PIX-TED)</h1>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
              Solução de conta digital focada em pagamentos instantâneos e gestão de fundos em Dólar e Criptomoedas
            </p>
          </div>
        </section>

        {/* O que é */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">O que é o ZIPAY?</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Zipay é uma solução de conta digital focada em pagamentos instantâneos e na gestão de fundos em Dólar e em Criptomoedas. Por meio de integração nativa com Pix e TED, além de uma API própria para conversão e custódia automática de saldos em USDT e USDC, a Zipay permite que empresas e pessoas físicas operem com a paridade do dólar americano sem sair do ambiente de sua conta.
              </p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Vantagens do ZIPAY</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pagamentos Instantâneos via PIX */}
              <Card>
                <CardHeader>
                  <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle>Pagamentos Instantâneos via PIX</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>Disponibilidade 24/7: transações concluídas em segundos, a qualquer dia e horário.</li>
                    <li>QR Code Dinâmico: geração de cobranças personalizadas que podem ser integradas em sites, apps e sistemas de gestão.</li>
                    <li>Reversão Automática: em casos de duplicidade ou erro de valor, o estorno é feito de forma quase imediata.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Transferências Tradicionais (TED) */}
              <Card>
                <CardHeader>
                  <Clock className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle>Transferências Tradicionais (TED)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>Alcance Bancário Completo: permite movimentações para contas de qualquer banco, com liquidação em horário comercial.</li>
                    <li>Controle de Custos: tarifas competitivas e relatórios detalhados por beneficiário e data.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Conta Dolarizada em Criptoativos */}
              <Card>
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle>Conta Dolarizada em Criptoativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>USDT e USDC Nativos: o saldo em reais pode ser convertido automaticamente em Tether (USDT) ou USD Coin (USDC) pela própria plataforma.</li>
                    <li>Paridade com o Dólar: proteção contra volatilidade do real, mantendo o poder de compra atrelado ao dólar americano.</li>
                    <li>Cold Wallets Integradas: segurança reforçada com armazenamento “off-line” dos ativos digitais.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* API de Integração Direta */}
              <Card>
                <CardHeader>
                  <Smartphone className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle>API de Integração Direta</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>Fluxo Automatizado: captura de pagamentos via Pix ou TED e conversão imediata para USDT/USDC conforme regras configuráveis.</li>
                    <li>Webhooks em Tempo Real: notificação instantânea de recebimentos, conversões e saldos atualizados.</li>
                    <li>SDKs e Documentação Completa: bibliotecas para as principais linguagens e exemplos prontos para acelerar a implementação.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Administração e Conciliação Simplificadas */}
              <Card>
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle>Administração e Conciliação Simplificadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>Dashboard Unificado: visão consolidada de todas as transações em reais e em cripto.</li>
                    <li>Relatórios Customizáveis: exportação de extratos por período, tipo de transação e moeda.</li>
                    <li>Geração de Notas Fiscais e Integração ERP: vínculo direto com sistemas de gestão financeira.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Privacidade e Compliance */}
              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle>Privacidade e Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>Controle de Acesso: perfis de usuário com permissões granulares para executar consultas, autorizar pagamentos ou gerenciar conversões.</li>
                    <li>Criptografia de Ponta a Ponta: todos os dados e chaves privadas de criptoativos são protegidos por protocolos avançados.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para revolucionar seus pagamentos?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Experimente o ZIPAY e tenha pagamentos instantâneos com gestão dolarizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/auth/register">Começar com ZIPAY</Link>
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
