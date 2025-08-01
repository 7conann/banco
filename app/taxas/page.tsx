import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star } from "lucide-react"

const accountFeatures = [
  { name: "Abertura de Conta (Taxa Única)", price: "R$ 49,90" },
  { name: "Mensalidade Conta Ativa", price: "R$ 49,90 / R$ 19,90 / R$ 0,00", condition: "Condição Especial*" },
  { name: "PIX (por Transação)", price: "R$ 1,00" },
  { name: "TED (por Transação)", price: "R$ 2,50" },
  { name: "Emissão de Boleto (por Transação)", price: "R$ 2,50" },
  { name: "Emissão de Boleto PIX (por Transação)", price: "R$ 2,50" },
  { name: "Emissão de Boleto Híbrido (por Transação)", price: "R$ 5,00" },
  { name: "Split de Pagamento (por Transação)", price: "2,00% a 6,00%", condition: "Condição Especial*" },
  { name: "Conta Escrow (Taxa Única)", price: "R$ 399,00", condition: "+ 1,50% por Transação" },
  { name: "Emissão de CCB - Linha de Crédito", price: "Em Breve", condition: "Inicia-se 9,00% a.a." },
]

const cashbackServices = [
  { name: "Recarga de Celular", cashback: "0,50%" },
  { name: "Google Play", cashback: "0,50%" },
  { name: "Xbox Live", cashback: "0,50%" },
  { name: "Spotify", cashback: "0,50%" },
  { name: "PS Plus", cashback: "0,50%" },
  { name: "Sky TV", cashback: "0,50%" },
  { name: "Claro TV", cashback: "0,50%" },
  { name: "Oi TV", cashback: "0,50%" },
]

export default function TaxasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Taxas Transparentes</h1>
              <p className="text-xl text-gray-600 mb-8">
                Conheça nossa política de tarifas justas e transparentes. Sem surpresas, sem taxas abusivas.
              </p>
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">Política de Tarifas Transparentes</Badge>
            </div>
          </div>
        </section>

        {/* Conta Zi Credit */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Conta Zi Credit - Transações e Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Serviço</th>
                          <th className="text-right py-3 px-4">Valor</th>
                          <th className="text-right py-3 px-4">Observações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {accountFeatures.map((feature, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{feature.name}</td>
                            <td className="py-3 px-4 text-right font-semibold text-yellow-600">{feature.price}</td>
                            <td className="py-3 px-4 text-right text-sm text-gray-600">{feature.condition || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">*Condições Especiais:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Movimentação acima de R$ 15.000,00 = R$ 19,90 Mensalidade</li>
                      <li>• Movimentação acima de R$ 100.000,00 = R$ 0,00 Mensalidade</li>
                      <li>• Os 3 primeiros meses, valor de 2,00% para Split de Pagamento</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Club de Vantagens */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Club de Vantagens - Cashback</h2>
                <p className="text-gray-600">Ganhe cashback em diversos serviços do seu dia a dia</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cashbackServices.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <div className="text-2xl font-bold text-yellow-600">{service.cashback}</div>
                      <p className="text-sm text-gray-600 mt-1">de cashback</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Por que nossas taxas são diferentes?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparência</h3>
                  <p className="text-gray-600 text-sm">Sem taxas ocultas ou surpresas. Tudo claro desde o início.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Economia</h3>
                  <p className="text-gray-600 text-sm">
                    Tarifas reduzidas para quem movimenta mais, incentivando o crescimento.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Flexibilidade</h3>
                  <p className="text-gray-600 text-sm">Condições especiais que se adaptam ao seu perfil de uso.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
