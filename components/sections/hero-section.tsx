"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const partners = [
    "BINANCE", "METAMASK", "CELCOIN", "COINBASE", "TRUST", "BV", 
    "BRASIL BITCOIN", "EXODUS", "INVESTIMENTOS", "AZIFY", "PHANTOM", "BTG PACTUAL"
  ]

  return (
    <section className="relative min-h-screen pb-12 overflow-hidden" style={{
      backgroundImage: 'url(/images/building-hero.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay escuro para opacidade */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Conteúdo à esquerda */}
          <div className="space-y-8">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-blue-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Infratech Financeira</span>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A maneira{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  inteligente
                </span>{' '}
                de ter um{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  banco digital.
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Zi Credit modular com APIs, soluções plugáveis, multimoedas e produtos feitos sob demanda para o seu negócio.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {['100%|Digital', '24/7|Suporte', '0|Tarifas Abusivas'].map((item) => {
                const [value, label] = item.split('|')
                return (
                  <div key={label} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Logo Z gigante à direita */}
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              className="relative w-96 h-96"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            >
              <Image src="/images/z-Photoroom.png" alt="Logo Z" fill className="object-contain" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Carousel */}
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-4 overflow-hidden z-20">
        <div className="flex items-center">
          <span className="text-black font-semibold px-6 whitespace-nowrap">ALGUNS DE NOSSOS PARCEIROS:</span>
          <div className="flex animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <span
                key={index}
                className="text-black font-bold px-8 whitespace-nowrap text-lg"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
