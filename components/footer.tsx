import Link from "next/link"
import { Mail, Phone, MapPin } from 'lucide-react'
import { memo } from "react"
import Image from "next/image";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-[#282829] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
           <div className="relative w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                   <Image 
                     src="/images/z-Photoroom.png" 
                     alt="Zi Credit" 
                     fill 
                     className="object-contain"
                     priority
                     sizes="32px"
                   />
                 </div>
              <span className="text-xl font-bold">Zi Credit</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A maneira inteligente de ter um Banco Digital. Oferecemos soluções financeiras personalizadas com
              tecnologia de ponta e atendimento diferenciado.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-gray-400"> +55 (61) 98174-3930</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-gray-400">contato@zicredit.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-gray-400">CNPJ: 54.563.559/0001-59</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/conta-zi" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Conta Zi Credit
                </Link>
              </li>
              <li>
                <Link href="/conta-nominal" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Conta Nominal
                </Link>
              </li>
              <li>
                <Link href="/conta-escrow" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Conta Escrow
                </Link>
              </li>
              <li>
                <Link href="/ccb" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  CCB - Linha de Crédito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link href="/seguranca" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Segurança
                </Link>
              </li>
              <li>
                <Link href="/suporte" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Zi Credit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
});
