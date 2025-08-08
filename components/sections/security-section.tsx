import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SecuritySection() {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center items-center">
          <div className="relative">
            
          
            <div className="inline-block bg-primary text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
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
