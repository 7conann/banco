"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function CelcoinSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-400 via-teal-400 to-cyan-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/30"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Celcoin - Sobre o nosso BaaS</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Oferecemos uma infraestrutura completa e pioneira para conectar empresas de todos os segmentos a
                oportunidades do mercado financeiro, com soluções incorporadas às necessidades de seus clientes. A
                partir de um novo conceito de Embedded Finance, tudo é feito de uma forma simples, rápida e sem
                burocracias, deixando toda a parte regulatória com a gente. Isso é Celcoin.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ao se tornar parceiro do Banco Celcoin, o Banco Zi Credit pode contar com diversas vantagens:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Soluções Financeiras Personalizadas</h4>
                      <p className="text-gray-600 text-sm">
                        Produtos e serviços ajustados conforme as necessidades específicas de cada cliente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tecnologia de Ponta</h4>
                      <p className="text-gray-600 text-sm">
                        Investimento constante em tecnologia para processos mais rápidos, seguros e eficientes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Atendimento Diferenciado</h4>
                      <p className="text-gray-600 text-sm">
                        Foco em entender as necessidades dos clientes e proporcionar soluções adequadas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Parcerias Estratégicas</h4>
                      <p className="text-gray-600 text-sm">
                        Acesso a novas oportunidades de negócios e condições diferenciadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solidez e Confiança</h4>
                      <p className="text-gray-600 text-sm">
                        Sólida reputação no mercado oferecendo segurança e estabilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700 font-medium text-center">
                  Portanto, como parceiro do Banco Celcoin, o Banco Zi Credit terá o suporte necessário para crescer e
                  oferecer aos seus clientes soluções financeiras de alta qualidade.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .absolute.rounded-full {
          animation: ripple 10s infinite;
        }
      `}</style>
    </section>
  )
}
