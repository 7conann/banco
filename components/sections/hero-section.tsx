import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-6 md:py-12 lg:py-20 xl:py-28 bg-yellow-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Top confidence section */}
        <div className="mb-8 flex items-center justify-center space-x-2 rounded-full bg-white px-4 py-2 shadow-sm">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-gray-700">+1000 empresas confiam</span>
          <div className="flex space-x-1">
            <div className="h-3 w-3 rounded-full bg-gray-200" />
            <div className="h-3 w-3 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Main heading and paragraph */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-900">
            Banco com segurança e <span className="text-primary">tranquilidade digital</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-600 md:text-xl">
            Projetado para suportar operações de alto nível, nossa plataforma garante pagamentos rápidos, seguros e sem
            complicação.
          </p>
        </div>

        {/* Call to action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-lg"
            asChild
          >
            <Link href="/auth/register">
              Criar minha conta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 bg-white text-gray-700 hover:text-primary hover:border-primary px-8 py-6 text-lg rounded-lg"
            asChild
          >
            <Link href="/suporte">Fale com nossa equipe</Link>
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="flex flex-col items-center text-center p-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
              100%
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital</h3>
            <p className="text-gray-600">Sem agências físicas, tudo online</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
              24/7
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte</h3>
            <p className="text-gray-600">Atendimento personalizado sempre</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
              0
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tarifas Abusivas</h3>
            <p className="text-gray-600">Política transparente e justa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
