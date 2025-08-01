import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-yellow-50 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Trust Badge Section */}
        <div className="mb-8 flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span>+1000 empresas confiam</span>
          <div className="flex -space-x-2 overflow-hidden">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-600 ring-2 ring-white">
              <img
                src="/placeholder-logo.svg?height=24&width=24&query=company%20logo%201"
                alt="Company Logo 1"
                className="rounded-full"
              />
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-600 ring-2 ring-white">
              <img
                src="/placeholder-logo.svg?height=24&width=24&query=company%20logo%202"
                alt="Company Logo 2"
                className="rounded-full"
              />
            </span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-600 ring-2 ring-white">
              <img
                src="/placeholder-logo.svg?height=24&width=24&query=company%20logo%203"
                alt="Company Logo 3"
                className="rounded-full"
              />
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
            Banco com segurança e <span className="text-yellow-600">tranquilidade digital</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
            Projetado para suportar operações de alto nível, nossa plataforma garante pagamentos rápidos, seguros e sem
            complicação.
          </p>
        </div>
        <div className="mt-8 space-x-4">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600" asChild>
            <Link href="/auth/register">
              Criar minha conta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            asChild
          >
            <Link href="/suporte">Fale com nossa equipe</Link>
          </Button>
        </div>

        {/* Feature Badges */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 w-full max-w-4xl">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white">
              100%
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Digital</h3>
            <p className="text-center text-sm text-gray-600">Sem agências físicas, tudo online</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white">
              24/7
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Suporte</h3>
            <p className="text-center text-sm text-gray-600">Atendimento personalizado sempre</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white">
              0
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Tarifas Abusivas</h3>
            <p className="text-center text-sm text-gray-600">Política transparente e justa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
