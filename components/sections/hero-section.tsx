"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => setIsVisible(true), [])

  const partners = [
    "BINANCE","METAMASK","CELCOIN","COINBASE","TRUST","BV",
    "BRASIL BITCOIN","EXODUS","INVESTIMENTOS","AZIFY","PHANTOM","BTG PACTUAL"
  ]

  return (
    <section
      className={`
        relative overflow-hidden
        bg-primary               /* mobile: amarelo sólido */
        bg-none
        lg:bg-[url('/images/ZIII.png')] /* desktop: imagem */
        lg:bg-no-repeat lg:bg-contain lg:bg-right /* não estoura e alinha à direita */
        pt-20 lg:pt-28              /* desce por causa da navbar */
        pb-2 lg:pb-8                /* menos espaço embaixo */
      `}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8">
            <div className="space-y-2">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A maneira <span className="text-black">inteligente</span> de ter um{" "}
                <span className="text-black">Banco Digital.</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-xl text-white max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Zi Credit modular com APIs, soluções plugáveis, multimoedas e produtos
                feitos sob demanda para o seu negócio.
              </motion.p>
            </div>

            {/* Botões */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-primary text-black px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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
                className="bg-transparent border-gray-400 text-black hover:bg-white hover:border-yellow-500 px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link href="/suporte">Fale com um consultor</Link>
              </Button>
            </motion.div>

            {/* Métricas (mais próximas do rodapé) */}
            <motion.div
              className="grid grid-cols-5 gap-6 sm:gap-2 pt-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {["100%|Digital","24/7|Suporte","0|Tarifas Abusivas","0|iof", "Pix -> usdt| api de integração"].map((item) => {
                const [value, label] = item.split("|")
                return (
                  <div key={label} className="text-start lg:text-start">
                    <div className="text-2xl md:text-2xl font-bold text-black text-center">{value}</div>
                    <div className="text-xs sm:text-sm text-white text-center">{label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Logo grande — some no mobile */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              className="relative w-80 h-80 xl:w-96 xl:h-96"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
        </div>
      </div>

      {/* Partners sticky no rodapé */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-4 overflow-hidden z-20">
        <div className="flex items-center">
          <div className="flex animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <span key={i} className="text-black font-bold px-8 whitespace-nowrap text-base sm:text-lg">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
      `}</style>
    </section>
  )
}
