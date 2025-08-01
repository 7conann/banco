import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 to-orange-50 hero-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="flex items-center justify-center mb-8">
            <Badge variant="secondary" className="bg-white/80 text-gray-700 px-4 py-2">
              <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
              +1000 empresas confiam
              <div className="flex -space-x-2 ml-3">
                <Avatar className="w-6 h-6 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar className="w-6 h-6 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <Avatar className="w-6 h-6 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
              </div>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Banco com segurança e
            <br />
            <span className="text-yellow-600">tranquilidade digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Projetado para suportar operações de alto nível, nossa plataforma garante pagamentos rápidos, seguros e sem
            complicação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3">
              Criar minha conta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 px-8 py-3 bg-transparent">
              Fale com nossa equipe
            </Button>
          </div>

          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">100%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Digital</h3>
              <p className="text-gray-600 text-sm">Sem agências físicas, tudo online</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">24/7</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Suporte</h3>
              <p className="text-gray-600 text-sm">Atendimento personalizado sempre</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">0</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tarifas Abusivas</h3>
              <p className="text-gray-600 text-sm">Política transparente e justa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
