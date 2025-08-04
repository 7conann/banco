"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuIcon, XIcon, ChevronDown, LogOut, Settings, BarChart3 } from "lucide-react";
import { useAuth } from "@/components/auth/auth-provider";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

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
];

const developersNav = [
  {
    title: "Documentação da API",
    href: "/desenvolvedores#api-docs",
    description:
      "Acesse nossa documentação completa para integrar nossos serviços financeiros.",
  },
  {
    title: "SDKs e Bibliotecas",
    href: "/desenvolvedores#sdks",
    description:
      "Ferramentas e bibliotecas para facilitar sua integração em diversas linguagens.",
  },
  {
    title: "Suporte para Desenvolvedores",
    href: "/desenvolvedores#suporte",
    description:
      "Conte com nossa equipe especializada para tirar suas dúvidas e resolver problemas.",
  },
  {
    title: "Status da API",
    href: "/desenvolvedores#status",
    description: "Monitore o status de nossos serviços em tempo real.",
  },
];

function ProductsMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-accent transition-colors">
        Produtos
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white border shadow-lg rounded-md">
        <div className="w-[900px] p-6 grid grid-cols-2 gap-8">
          {productsNav.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="text-xs font-semibold uppercase text-primary tracking-wider">
                {section.title}
              </div>
              <ul className="m-0 p-0 list-none space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block no-underline px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function DevelopersMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-accent transition-colors">
        Desenvolvedores
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white border shadow-lg rounded-md">
        <div className="w-[700px] p-6 space-y-4">
          <ul className="m-0 p-0 list-none space-y-2">
            {developersNav.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="block no-underline px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            Z
          </div>
          <span className="text-2xl font-bold text-foreground">Zi Credit</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 items-center">
              <ProductsMenu />
              <DevelopersMenu />
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/institucional"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "px-2 py-1 rounded-md hover:bg-accent"
                    )}
                  >
                    Institucional
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/suporte"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "px-2 py-1 rounded-md hover:bg-accent"
                    )}
                  >
                    Suporte
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

         
        </div>
 {isClient && (
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <div className="relative">
                  <Button variant="ghost" className="flex items-center gap-1">
                    Olá, {user?.username || "Usuário"} <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-48 bg-white border shadow rounded-md">
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" /> Dashboard
                      </div>
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4" /> Configurações
                      </div>
                    </Link>
                    <div className="border-t" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" /> Sair
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="ghost">Entrar</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="bg-primary text-primary-foreground">Criar conta</Button>
                  </Link>
                </>
              )}
            </div>
          )}
        {/* Mobile toggle */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen((v) => !v)}>
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow py-4">
          <div className="flex flex-col gap-3 px-4">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-2">
                <span>Produtos</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-2">
                {productsNav.flatMap((s) => s.items).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-2">
                <span>Desenvolvedores</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-2">
                {developersNav.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/institucional" className="py-2">
              Institucional
            </Link>
            <Link href="/suporte" className="py-2">
              Suporte
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
