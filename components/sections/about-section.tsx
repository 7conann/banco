import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-black">
            <h2 className="text-4xl font-bold mb-8">Zi Credit</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg leading-relaxed">
                  A Zi Credit é um banco digital inovador que busca transformar a maneira como os clientes gerenciam
                  suas finanças no Brasil.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg leading-relaxed">
                  Com um modelo completamente online e sem agências físicas, o Zi Credit oferece uma experiência
                  bancária prática, acessível e com taxas reduzidas.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg leading-relaxed">
                  A proposta do banco é garantir que qualquer pessoa, independentemente da sua localização ou nível de
                  experiência financeira, possa ter acesso a serviços bancários de alta qualidade, simples e econômicos.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-bg.png"
                alt="Zi Credit - Banco Digital"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 right-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">Z</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
