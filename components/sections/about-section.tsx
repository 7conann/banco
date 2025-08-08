import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
   
    

        <div className="bg-primary rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h3>
              <p className="text-lg text-white mb-6">
                Garantir que qualquer pessoa, independentemente da sua localização ou nível de experiência financeira,
                possa ter acesso a serviços bancários de alta qualidade, simples e econômicos.
              </p>
              <p className="text-lg text-white">
                Oferecemos uma infraestrutura completa e pioneira para conectar empresas de todos os segmentos a
                oportunidades do mercado financeiro, com soluções incorporadas às necessidades de seus clientes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Diferenciais</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Plataforma 100% Digital com escritórios físicos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Atendimento personalizado e rápido</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Isenção de tarifas abusivas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Integração com ecossistema de fintechs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
