"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MenuIcon, XIcon, ChevronDown, LogOut, Settings, BarChart3 } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogout = () => {
    logout()
    router.push("/auth/login")
  }

  const productsNav = [
    {
      title: "Infraestrutura Financeira",
      items: [
        {
          title: "Banking as a Service",
          href: "/produtos#banking-as-a-service",
          description: "Estrutura bancária multimoeda via API.",
        },
        {
          title: "Investment as a Service",
          href: "/produtos#investment-as-a-service",
          description: "Distribuição de investimentos integrada.",
        },
        {
          title: "Onboarding e Compliance",
          href: "/produtos#onboarding-compliance",
          description: "Gestão de risco e conformidade.",
        },
        {
          title: "Emissão de Cartões",
          href: "/produtos#emissao-cartoes",
          description: "Cartões físicos e virtuais white-label.",
        },
      ],
    },
    {
      title: "Soluções Prontas",
      items: [
        {
          title: "Azipay",
          href: "/produtos#azipay",
          description: "Gateway de pagamentos com BRL.",
        },
        {
          title: "White Label",
          href: "/produtos#white-label",
          description: "Crie sua própria solução financeira.",
        },
        {
          title: "Tokenização de RWAs",
          href: "/produtos#tokenizacao-rwas",
          description: "Emissão de ativos do mundo real.",
        },
        {
          title: "Conta Empresarial",
          href: "/produtos#conta-empresarial",
          description: "Conta PJ com gestão completa.",
        },
      ],
    },
  ]

  const developersNav = [
    {
      title: "Documentação da API",
      href: "/desenvolvedores#api-docs",
      description: "Acesse nossa documentação completa para integrar nossos serviços financeiros.",
    },
    {
      title: "SDKs e Bibliotecas",
      href: "/desenvolvedores#sdks",
      description: "Ferramentas e bibliotecas para facilitar sua integração em diversas linguagens.",
    },
    {
      title: "Suporte para Desenvolvedores",
      href: "/desenvolvedores#suporte",
      description: "Conte com nossa equipe especializada para tirar suas dúvidas e resolver problemas.",
    },
    {
      title: "Status da API",
      href: "/desenvolvedores#status",
      description: "Monitore o status de nossos serviços em tempo real.",
    },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            Z
          </div>
          <span className="ml-2 text-2xl font-bold text-foreground">Zi Credit</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent text-foreground h-10">
                Produtos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white border shadow-lg">
                <div className="w-[900px] p-8">
                  <div className="grid grid-cols-2 gap-8">
                    {productsNav.map((section, index) => (
                      <div key={index} className="space-y-4">
                        <h4 className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                          {section.title}
                        </h4>
                        <div className="space-y-3">
                          {section.items.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent text-foreground h-10">
                Desenvolvedores
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white border shadow-lg">
                <div className="w-[700px] p-8">
                  <div className="space-y-3">
                    {developersNav.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/institucional" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent text-foreground h-10")}
                >
                  Institucional
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/suporte" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent text-foreground h-10")}
                >
                  Suporte
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-4">
          {isClient && (
            <>
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground hover:bg-accent flex items-center">
                      Olá, {user?.username || "Usuário"} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-white">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="block w-full">
                        <BarChart3 className="mr-2 h-4 w-4" /> Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="block w-full">
                        <Settings className="mr-2 h-4 w-4" /> Configurações
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" /> Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/auth/login" passHref>
                    <Button variant="ghost" className="text-foreground hover:bg-accent">
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/auth/register" passHref>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Criar conta</Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu} className="text-foreground">
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg pb-4 border-t">
          <div className="flex flex-col items-center space-y-4 pt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:bg-accent font-medium flex items-center">
                  Produtos <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white">
                {productsNav
                  .flatMap((section) => section.items)
                  .map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link href={item.href} className="block w-full" onClick={toggleMobileMenu}>
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:bg-accent font-medium flex items-center">
                  Desenvolvedores <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white">
                {developersNav.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link href={item.href} className="block w-full" onClick={toggleMobileMenu}>
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/institucional"
              className="text-foreground hover:bg-accent font-medium p-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              Institucional
            </Link>
            <Link
              href="/suporte"
              className="text-foreground hover:bg-accent font-medium p-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              Suporte
            </Link>

            {isClient && (
              <>
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="text-foreground hover:bg-accent font-medium p-2 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="text-foreground hover:bg-accent font-medium p-2 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      Configurações
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        handleLogout()
                        toggleMobileMenu()
                      }}
                      className="text-foreground hover:bg-accent font-medium"
                    >
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" passHref>
                      <Button
                        variant="ghost"
                        className="text-foreground hover:bg-accent font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Entrar
                      </Button>
                    </Link>
                    <Link href="/auth/register" passHref>
                      <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={toggleMobileMenu}
                      >
                        Criar conta
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
