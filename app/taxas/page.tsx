"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const contaTaxas = [
  { transacao: "Abertura de Conta PF (Taxa Única)", observacao: "(Consumível no Sistema)", valor: "U$ 100.00" },
  { transacao: "Abertura de Conta PJ (Taxa Única)", observacao: "(Consumível no Sistema)", valor: "U$ 1,000.00" },
  { transacao: "Mensalidade de Conta Ativa", observacao: "(Condição Especial *)", valor: "U$ 14.90 / U$ 9.90 / R$ 0.00" },
  { transacao: "Pix (por Transação)", observacao: "", valor: "U$ 0.20" },
  { transacao: "TED (por Transação)", observacao: "", valor: "U$ 1.00" },
  { transacao: "Emissão de Boleto (por Transação)", observacao: "", valor: "U$ 1.00" },
  { transacao: "Emissão de Boleto Pix (por Transação)", observacao: "", valor: "U$ 1.00" },
  { transacao: "Emissão de Boleto Híbrido (por Transação)", observacao: "", valor: "U$ 1.00" },
  { transacao: "Split de Pagamento (por Transação)", observacao: "(Condição Especial *)", valor: "2 %* a 15 %" },
  { transacao: "Conta Escrow (Taxa Única)", observacao: "", valor: "U$ 100.00 (+ até 15% por Transação)" },
  { transacao: "Emissão de CCB - Linha de Crédito", observacao: "", valor: "Em Breve (Inicia-se 9,00% a.a.)" },
  { transacao: "Spreed de Comp. de Cripto (por Transação)", observacao: "", valor: "2 % a 5 % (+ Valor de Cotação)" },
];

const cartaoTaxas = [
  { transacao: "Cartão Master Card Zi Credit – PF (Taxa Única)", observacao: "(Consumível no Sistema)", valor: "U$ 100.00" },
  { transacao: "Cartão Master Card Zi Credit – PJ (Taxa Única)", observacao: "(Consumível no Sistema)", valor: "U$ 1,000.00" },
  { transacao: "Mensalidade de Cartão Ativo", observacao: "(Condição Especial *)", valor: "U$ 0.00 / U$ 9.90 / U$ 14.90" },
  { transacao: "Saque ATM (por Transação)", observacao: "", valor: "U$ 5.00 + 1,49 %" },
  { transacao: "Pagamentos no Cartão (por Transação)", observacao: "", valor: "1,49 % (+ Taxas do Cartão)" },
];

const vantagens = [
  { nivel: "Zi Classic", movimentacao: "Até U$ 10 mil", cashback: "0%", suporte: "Suporte Básico", cartaoPF: "Standard", cartaoPJ: "-" },
  { nivel: "Zi Experience", movimentacao: "U$ 10 mil até U$ 100 mil", cashback: "1%", suporte: "Suporte Personalizado", cartaoPF: "Gold", cartaoPJ: "Business Credit" },
  { nivel: "Zi Life", movimentacao: "U$ 100 mil até U$ 1 milhão", cashback: "2%", suporte: "Suporte Personalizado + Benefícios", cartaoPF: "Platinium", cartaoPJ: "Business Platinum" },
  { nivel: "Zi Extreme", movimentacao: "Acima U$ 1 milhão", cashback: "3%", suporte: "Suporte Personalizado + Benefícios", cartaoPF: "Black", cartaoPJ: "Business Black" },
];

function TaxaCard({ title, taxas, observacao }: { title: string; taxas: any[]; observacao?: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 text-center">{title}</h2>
      </div>
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Transações e Valores</h3>
        </div>
        <div className="space-y-4">
          {taxas.map((taxa, index) => (
            <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{taxa.transacao}</div>
                {taxa.observacao && (
                  <div className="text-sm text-gray-500 mt-1">{taxa.observacao}</div>
                )}
              </div>
              <div className="text-right ml-4">
                <div className="font-bold text-primary text-lg">{taxa.valor}</div>
              </div>
            </div>
          ))}
        </div>
        {observacao && (
          <div className="mt-6 p-4 bg-primary rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-white">*Obs.:</span> {observacao}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TaxasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-20 pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Taxas Zi Credit</h1>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
              Transparência total sobre nossos custos. Escolha o plano que melhor se adapta à sua necessidade.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 space-y-12">
            <TaxaCard 
              title="Conta Zi Credit" 
              taxas={contaTaxas}
              observacao="Movimentação acima de U$ 10.000,00 = U$ 4,90 Mensalidade. Movimentação acima de U$ 100.000,00 = U$ 0,00 Mensalidade. Os 3 primeiros meses, valor de 2,00%*."
            />
            
            <TaxaCard 
              title="Cartão Zi Credit" 
              taxas={cartaoTaxas}
              observacao="Movimentação acima de U$ 10.000,00 = U$ 9,90 Mensalidade. Movimentação acima de U$ 100.000,00 = U$ 14,90 Mensalidade. Envio do Cartão Incluso."
            />

            {/* Clube de Vantagens */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 text-center">Clube de Vantagens</h2>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Valores Mensais</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Nível</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Movimentação</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Cashback</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Vantagem</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Cartão PF</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900">Cartão PJ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vantagens.map((plano, index) => (
                        <tr key={index} className="border-b border-gray-100 last:border-b-0">
                          <td className="py-4 px-2 font-semibold text-gray-900">{plano.nivel}</td>
                          <td className="py-4 px-2 text-gray-700">{plano.movimentacao}</td>
                          <td className="py-4 px-2 font-bold text-primary">{plano.cashback}</td>
                          <td className="py-4 px-2 text-gray-700">{plano.suporte}</td>
                          <td className="py-4 px-2 text-gray-700">{plano.cartaoPF}</td>
                          <td className="py-4 px-2 text-gray-700">{plano.cartaoPJ}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
