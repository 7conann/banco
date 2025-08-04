"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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

const navItemClass = "px-2 py-1 rounded-md hover:bg-accent transition-colors text-sm font-medium flex items-center gap-1";

function HoverDropdown({
  label,
  children,
  width = "w-[900px]",
}: {
  label: string;
  children: React.ReactNode;
  width?: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const clearClose = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const handleTriggerEnter = () => {
    clearClose();
    setOpen(true);
  };
  const handleTriggerLeave = () => {
    clearClose();
    closeTimeout.current = window.setTimeout(() => setOpen(false), 150);
  };
  const handleContentEnter = () => {
    clearClose();
    setOpen(true);
  };
  const handleContentLeave = () => {
    clearClose();
    closeTimeout.current = window.setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      clearClose();
    };
  }, []);

  return (
    <div className="relative">
      <div
        onMouseEnter={handleTriggerEnter}
        onMouseLeave={handleTriggerLeave}
        className={navItemClass + " cursor-pointer text-foreground"}
        aria-label={label}
      >
        <span>{label}</span> <ChevronDown className="h-4 w-4" />
      </div>

      <div
        onMouseEnter={handleContentEnter}
        onMouseLeave={handleContentLeave}
        className={cn(
          "absolute left-0 top-full mt-2 z-50 overflow-hidden transition-all duration-200 ease-out",
          width,
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-1 pointer-events-none"
        )}
      >
        <div className="p-6 bg-white rounded-md shadow-sm">{children}</div>
      </div>
    </div>
  );
}

function ProductsMenu() {
  return (
    <HoverDropdown label="Produtos" width="w-[900px]">
      <div className="grid grid-cols-2 gap-8">
        {productsNav.map((section) => (
          <div key={section.title} className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider">
              {section.title}
            </div>
            <ul className="m-0 p-0 list-none space-y-2">
              {section.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block no-underline px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </HoverDropdown>
  );
}

function DevelopersMenu() {
  return (
    <HoverDropdown label="Desenvolvedores" width="w-[700px]">
      <div className="space-y-4">
        <ul className="m-0 p-0 list-none space-y-2">
          {developersNav.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="block no-underline px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-xs text-muted-foreground">
                  {item.description}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </HoverDropdown>
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
          <div className="flex gap-4 items-center">
            <ProductsMenu />
            <DevelopersMenu />

            <div>
              <Link
                href="/institucional"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium px-2 py-1 rounded-md hover:bg-accent"
                )}
              >
                Institucional
              </Link>
            </div>
            <div>
              <Link
                href="/suporte"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium px-2 py-1 rounded-md hover:bg-accent"
                )}
              >
                Suporte
              </Link>
            </div>
          </div>

       
        </div>
   {isClient && (
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <div className="relative">
                  <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium">
                    Olá, {user?.username || "Usuário"} <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-sm rounded-md">
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-50 text-sm">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" /> Dashboard
                      </div>
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 hover:bg-gray-50 text-sm">
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4" /> Configurações
                      </div>
                    </Link>
                    <div className="border-t" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-sm"
                    >
                      <LogOut className="h-4 w-4" /> Sair
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="ghost" className="text-sm font-medium">
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="bg-primary text-primary-foreground text-sm font-medium">
                      Criar conta
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}
        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex-1" />
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
              <summary className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium">
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
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium">
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
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/institucional" className="py-2 text-sm font-medium">
              Institucional
            </Link>
            <Link href="/suporte" className="py-2 text-sm font-medium">
              Suporte
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
