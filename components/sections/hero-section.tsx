"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div
              className={`flex items-center space-x-3 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center space-x-2 text-blue-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Infratech Financeira</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                Destrave seu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  potencial
                </span>{" "}
                financeiro.
              </h1>

              <p
                className={`text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                Zi Credit modular com APIs, soluções plugáveis, multimoedas e produtos feitos sob demanda para o seu
                negócio.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link href="/auth/register">
                  Criar minha conta
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-gray-400 text-white hover:bg-white/10 hover:border-yellow-500 px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link href="/suporte">Fale com um consultor</Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-400">Digital</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Suporte</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400">0</div>
                <div className="text-sm text-gray-400">Tarifas Abusivas</div>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full h-96 lg:h-full">
              {/* 3D Geometric Elements */}
              <div className="absolute inset-0">
                {/* Main cylinder */}
                <div className="absolute top-1/4 right-1/4 w-32 h-48 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg transform rotate-12 animate-float shadow-2xl"></div>

                {/* Secondary shapes */}
                <div className="absolute top-1/3 right-1/2 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse shadow-xl"></div>

                <div className="absolute bottom-1/3 right-1/3 w-20 h-32 bg-gradient-to-t from-blue-600 to-blue-400 rounded-lg transform -rotate-6 animate-float-delayed shadow-2xl"></div>

                <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg transform rotate-45 animate-spin-slow shadow-xl"></div>

                {/* Abstract lines */}
                <div className="absolute top-1/4 right-1/3 w-1 h-24 bg-gradient-to-b from-blue-400 to-transparent transform rotate-12"></div>
                <div className="absolute bottom-1/4 right-1/2 w-1 h-32 bg-gradient-to-t from-yellow-400 to-transparent transform -rotate-12"></div>
              </div>
            </div>

            {/* Powered by badge */}
            <div className="absolute bottom-8 right-8 flex items-center space-x-2 text-gray-400 text-sm">
              <span>Powered by</span>
              <span className="font-bold text-white">Zi Credit</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
