"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { MenuIcon, XIcon, ChevronDown, LogOut, Settings, BarChart3 } from 'lucide-react';
import { useAuth } from "@/components/auth/auth-provider";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const institucionalNav = [
  { title: "Sobre Nós", href: "/institucional#sobre-nos" },
  { title: "Blog", href: "/blog" },
  { title: "Documentação", href: "/institucional#documentacao" },
];

const productsNav = [
  {
    title: "Contas e Pagamentos",
    items: [
      { title: "Conta Nominal", href: "/produtos/conta-nominal", description: "Conta bancária para depósitos específicos." },
      { title: "ZIPAY (PIX-TED)", href: "/produtos/zipay", description: "Pagamentos instantâneos e gestão dolarizada." },
      { title: "Boleto (PIX e Híbrido)", href: "/produtos/boleto", description: "Boletos com pagamento via PIX." },
      { title: "Split de Pagamento", href: "/produtos/split-pagamento", description: "Divisão automática de pagamentos." },
    ],
  },
  {
    title: "Soluções Avançadas",
    items: [
      { title: "Conta Escrow", href: "/produtos/conta-escrow", description: "Conta de custódia para transações seguras." },
      { title: "Conta Dolarizada", href: "/produtos/conta-dolarizada", description: "Conta em criptoativos USDT/USDC." },
      { title: "Cartão", href: "/produtos/cartao", description: "Cartão pré-pago com conversão cripto." },
      { title: "CCB", href: "/produtos/ccb", description: "Cédula de Crédito Bancário." },
      { title: "Criptomoedas", href: "/produtos/criptomoedas", description: "Negociação e custódia de criptoativos." },
    ],
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
    return () => clearClose();
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
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
        )}
      >
        <div className="p-6 bg-white rounded-md shadow-sm border">{children}</div>
      </div>
    </div>
  );
}

function InstitucionalMenu() {
  return (
    <HoverDropdown label="Institucional" width="w-[200px]">
      <ul className="space-y-2">
        {institucionalNav.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </HoverDropdown>
  );
}

function ProductsMenu() {
  return (
    <HoverDropdown label="Produtos" width="w-[900px]">
      <div className="grid grid-cols-2 gap-8">
        {productsNav.map((section) => (
          <div key={section.title} className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-600">{section.title}</div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm">
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="max-w-screen-xl mx-auto bg-white rounded-full shadow-lg flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
            <Image src="/images/z-Photoroom.png" alt="Zi Credit" fill className="object-contain" />
          </div>
          <span className="text-lg font-semibold text-gray-800">Credit</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <InstitucionalMenu />
          <ProductsMenu />
          <Link href="/taxas" className={cn(navigationMenuTriggerStyle(), "flex items-center text-gray-700 transition")}>
            Taxas
          </Link>
          <Link href="/suporte" className="text-gray-700 hover:text-gray-900 transition">
            Suporte
          </Link>
        </nav>

        {/* Desktop Actions */}
        {isClient && (
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative">
                <Button variant="ghost" className="rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                  Olá, {user?.username || "Usuário"} <ChevronDown className="w-4 h-4" />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden">
                  <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                    <BarChart3 className="w-4 h-4" /> Dashboard
                  </Link>
                  <Link href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                    <Settings className="w-4 h-4" /> Configurações
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                  >
                    <LogOut className="w-4 h-4" /> Sair
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" className="rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Entrar
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="rounded-full px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-600">
                    Criar conta
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}

        {/* Mobile toggle */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <XIcon className="w-6 h-6 text-gray-800" /> : <MenuIcon className="w-6 h-6 text-gray-800" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden px-4 mt-2">
          <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg flex flex-col space-y-2 px-6 py-4">
            <Link href="/institucional" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Institucional</Link>
            <Link href="/produtos" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Produtos</Link>
            <Link href="/taxas" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Taxas</Link>
            <Link href="/suporte" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Suporte</Link>
            {!isAuthenticated && (
              <>
                <Link href="/auth/login" className="px-3 py-2 rounded-full text-center text-gray-700 hover:bg-gray-100">Entrar</Link>
                <Link href="/auth/register" className="px-3 py-2 rounded-full bg-yellow-500 text-white text-center hover:bg-yellow-600">Criar conta</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
