import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SecuritySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium">👤</span>
                </div>
                <span className="text-gray-900 font-medium">Cliente</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500">💳</span>
                  </div>
                  <span className="text-gray-600">Adquirente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500">💳</span>
                  </div>
                  <span className="text-gray-600">Adquirente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                    <span className="text-xs text-black">✓</span>
                  </div>
                  <span className="text-gray-900 font-medium">Adquirente</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-yellow-400/20 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              SEM BARREIRAS. SEM COMPLICAÇÃO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Segurança e aprovação em cada transação
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Suas transações passam pelas melhores adquirentes, garantindo a maior taxa de aprovação do mercado, e que
              apenas transações seguras sejam processadas.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Começar agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
