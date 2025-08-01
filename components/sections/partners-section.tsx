import Image from "next/image"

export function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full translate-y-32 -translate-x-32"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="relative inline-block">
            <Image
              src="/images/hero-bg.png"
              alt="Zi Credit - A maneira inteligente de ter um Banco Digital"
              width={800}
              height={400}
              className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>

            {/* Logo Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-4xl">Z</span>
              </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                A maneira inteligente de ter um Banco Digital.
              </h2>
            </div>
          </div>

          {/* Partners */}
          <div className="mt-12">
            <p className="text-white/80 mb-8">Parceiros:</p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="bg-white px-6 py-3 rounded-lg">
                <span className="text-blue-600 font-bold text-xl">BMP</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg">
                <span className="text-purple-600 font-bold text-xl">S</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg">
                <span className="text-orange-600 font-bold">SOLUÇÃO PAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
