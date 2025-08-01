"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, Settings } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut, loading: authLoading } = useAuth() // Get authLoading state

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zi Credit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/beneficios" className="text-gray-700 hover:text-primary transition-colors">
              Benefícios
            </Link>
            <Link href="/recursos" className="text-gray-700 hover:text-primary transition-colors">
              Recursos
            </Link>
            <Link href="/taxas" className="text-gray-700 hover:text-primary transition-colors">
              Taxas
            </Link>
            <Link href="/premiacoes" className="text-gray-700 hover:text-primary transition-colors">
              Premiações
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {authLoading ? (
              // Show a skeleton or nothing while auth state is loading
              <div className="h-8 w-24 bg-gray-200 rounded-md animate-pulse" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt={user.profile?.full_name || user.email} />
                      <AvatarFallback>
                        {user.profile?.full_name?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.profile?.full_name || "Usuário"}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Configurações
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" className="border-gray-300 bg-transparent" asChild>
                  <Link href="/auth/login">Entrar</Link>
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/auth/register">Criar conta</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/beneficios"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </Link>
              <Link
                href="/recursos"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="/taxas"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Taxas
              </Link>
              <Link
                href="/premiacoes"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Premiações
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                {authLoading ? (
                  <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse" />
                ) : user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Configurações
                    </Link>
                    <button
                      onClick={() => {
                        signOut()
                        setIsMenuOpen(false)
                      }}
                      className="text-gray-700 hover:text-primary transition-colors text-left"
                    >
                      Sair
                    </button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="border-gray-300 bg-transparent" asChild>
                      <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                        Entrar
                      </Link>
                    </Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                        Criar conta
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
