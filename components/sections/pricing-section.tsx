import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const accountPricing = [
    { service: "Abertura de Conta (Taxa Única)", price: "U$ 100.00", note: "Consumível no Sistema" },
    { service: "Mensalidade de Conta Ativa", price: "U$ 9.90 / U$ 4.90 / R$ 0.00", note: "Condição Especial *" },
    { service: "PIX (por Transação)", price: "U$ 0.20", note: "+ Spread" },
    { service: "TED (por Transação)", price: "U$ 0.50", note: "+ Spread" },
    { service: "Emissão de Boleto", price: "U$ 0.50", note: "+ Spread" },
    { service: "Boleto PIX", price: "U$ 0.50", note: "+ Spread" },
    { service: "Boleto Híbrido", price: "U$ 1.00", note: "+ Spread" },
    { service: "Split de Pagamento", price: "2% a 15%", note: "Condição Especial *" },
    { service: "Conta Escrow (Taxa Única)", price: "U$ 100.00", note: "+ até 15% por Transação" },
  ]

  const clubTiers = [
    {
      name: "Zi Classic",
      limit: "Até U$ 10 mil",
      cashback: "0%",
      support: "Suporte Básico",
      color: "bg-gray-100 text-gray-800",
    },
    {
      name: "Zi Experience",
      limit: "U$ 10 mil até U$ 100 mil",
      cashback: "1%",
      support: "Suporte Personalizado",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Zi Life",
      limit: "U$ 100 mil até U$ 1 milhão",
      cashback: "2%",
      support: "Suporte Personalizado + Benefícios",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Zi Extreme",
      limit: "Acima U$ 1 milhão",
      cashback: "3%",
      support: "Suporte Personalizado + Benefícios Bônus",
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preços <span className="text-primary">Transparentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa estrutura de preços clara e sem surpresas
          </p>
        </div>

        {/* Account Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conta Zi Credit</h3>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Transações e Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accountPricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex-1">
                      <span className="font-medium text-gray-900">{item.service}</span>
                      {item.note && <span className="text-sm text-gray-500 ml-2">({item.note})</span>}
                    </div>
                    <div className="font-bold text-primary text-lg">{item.price}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>*Obs.:</strong> Movimentação acima de U$ 10.000,00 = U$ 4,90 Mensalidade. Movimentação acima
                  de U$ 100.000,00 = R$ 0,00 Mensalidade. Os 3 primeiros meses, valor de 2,00%*.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Club de Vantagens */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Club de Vantagens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubTiers.map((tier, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-primary mr-2" />
                    <Badge className={tier.color}>{tier.name}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{tier.limit}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.cashback}</div>
                  <p className="text-sm text-gray-600">Cashback</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{tier.support}</span>
                    </div>
                    {index >= 2 && (
                      <div className="flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Benefícios Exclusivos</span>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Gerente Dedicado</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
            Abrir Minha Conta Zi Credit
          </Button>
        </div>
      </div>
    </section>
  )
}
