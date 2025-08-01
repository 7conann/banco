import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-yellow-100 hero-pattern overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
              Banco com segurança e <span className="text-primary">tranquilidade digital</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Projetado para suportar operações de alto nível, nossa plataforma garante pagamentos rápidos, seguros e
              sem complicação.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/auth/register">
                Criar minha conta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 bg-transparent text-gray-700 hover:text-primary"
              asChild
            >
              <Link href="/suporte">Fale com nossa equipe</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  )
}
