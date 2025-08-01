import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const reasons = [
  "Tecnologia e Inovação avançada",
  "Soluções Flexíveis e Seguras",
  "Acesso a Crédito com Facilidade",
  "Economia e Eficiência operacional",
  "Suporte ao Cliente 24/7",
]

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Por que escolher a Zi Credit?</h2>
          <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto">
            Ao abrir uma conta no Zi Credit, você estará acessando um banco digital que oferece uma ampla gama de
            serviços vantajosos para facilitar sua vida financeira.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 bg-black/10 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-black font-medium">{reason}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Abra sua conta no Zi Credit
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-black/70">Aproveite todas essas vantagens e transforme sua experiência bancária!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
