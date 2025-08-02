import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre o <span className="text-primary">Zi Credit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Zi Credit é um banco digital inovador que busca transformar a maneira como os clientes gerenciam suas
            finanças no Brasil e no Mundo. Com um modelo completamente online e com escritórios físicos, oferecemos uma
            experiência bancária prática, acessível e com taxas reduzidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">Tecnologia de ponta para proteger suas transações</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rapidez</h3>
              <p className="text-gray-600">Transações instantâneas 24 horas por dia</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global</h3>
              <p className="text-gray-600">Operações no Brasil e no mundo todo</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-gray-600">Atendimento personalizado sempre disponível</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h3>
              <p className="text-lg text-gray-600 mb-6">
                Garantir que qualquer pessoa, independentemente da sua localização ou nível de experiência financeira,
                possa ter acesso a serviços bancários de alta qualidade, simples e econômicos.
              </p>
              <p className="text-lg text-gray-600">
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
