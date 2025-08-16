"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { MenuIcon, XIcon, ChevronDown, LogOut, Settings, BarChart3 } from "lucide-react";
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
      { title: "ZIPAY", href: "/produtos/zipay", description: "Pagamentos instantâneos e gestão dolarizada." },
      { title: "Boleto (PIX e Híbrido)", href: "/produtos/boleto", description: "Boletos com pagamento via PIX." },
      { title: "Split de Pagamento", href: "/produtos/split-pagamento", description: "Divisão automática de pagamentos." },
    ],
  },
  {
    title: "Soluções Avançadas",
    items: [
      { title: "Conta Escrow", href: "/produtos/conta-escrow", description: "Conta de custódia para transações seguras." },
      { title: "Conta Dolarizada", href: "/produtos/conta-dolarizada", description: "Conta em criptoativos USDT/USDC." },
      { title: "Cartão em Criptomoedas", href: "/produtos/cartao", description: "Cartão pré-pago com conversão cripto integrada." },
      { title: "CCB", href: "/produtos/ccb", description: "Cédula de Crédito Bancário." },
    ],
  },
];

const navItemClass =
  "px-2 py-1 rounded-md hover:bg-accent transition-colors text-sm font-medium flex items-center gap-1";

const HoverDropdown = memo(function HoverDropdown({
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
  useEffect(() => () => clearClose(), []);

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
});

const InstitucionalMenu = memo(function InstitucionalMenu() {
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
});

const ProductsMenu = memo(function ProductsMenu() {
  return (
    <HoverDropdown label="Produtos" width="w-[900px]">
      <div className="grid grid-cols-2 gap-8">
        {productsNav.map((section) => (
          <div key={section.title} className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-600">
              {section.title}
            </div>
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
});

export const Header = memo(function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileInstitucionalOpen, setMobileInstitucionalOpen] = useState(false);
  const [mobileProdutosOpen, setMobileProdutosOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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
          <div className="relative w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/images/z-Photoroom.png"
              alt="Zi Credit"
              fill
              className="object-contain"
              priority
              sizes="32px"
            />
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
          <div className="hidden md:flex items-center gap-4 relative">
            {isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  aria-expanded={userMenuOpen}
                >
                  Olá, {user?.username || "Usuário"} <ChevronDown className="w-4 h-4" />
                </Button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden border">
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
                )}
              </>
            ) : (
              <>
                <Link href="/suporte">
                  <Button variant="ghost" className="rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Entrar
                  </Button>
                </Link>
                <Link href="/suporte">
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
          <Button variant="ghost" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen}>
            {mobileOpen ? <XIcon className="w-6 h-6 text-gray-800" /> : <MenuIcon className="w-6 h-6 text-gray-800" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - agora com dropdowns/accordions */}
      {mobileOpen && (
        <div className="md:hidden px-4 mt-2">
          <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg flex flex-col px-2 py-2 divide-y">
            {/* Institucional (accordion) */}
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileInstitucionalOpen((v) => !v)}
              aria-expanded={mobileInstitucionalOpen}
            >
              <span>Institucional</span>
              <ChevronDown
                className={cn("w-4 h-4 transition-transform", mobileInstitucionalOpen && "rotate-180")}
              />
            </button>
            {mobileInstitucionalOpen && (
              <div className="px-4 pb-2">
                <ul className="space-y-1 pt-1">
                  {institucionalNav.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Produtos (accordion) */}
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileProdutosOpen((v) => !v)}
              aria-expanded={mobileProdutosOpen}
            >
              <span>Produtos</span>
              <ChevronDown
                className={cn("w-4 h-4 transition-transform", mobileProdutosOpen && "rotate-180")}
              />
            </button>
            {mobileProdutosOpen && (
              <div className="px-4 pb-3">
                {productsNav.map((section) => (
                  <div key={section.title} className="py-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      {section.title}
                    </div>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="font-medium text-gray-900">{item.title}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Links simples */}
            <Link
              href="/taxas"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Taxas
            </Link>
            <Link
              href="/suporte"
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Suporte
            </Link>

            {/* Ações (não autenticado) */}
            {!isAuthenticated && (
              <div className="flex flex-col gap-2 px-4 py-3">
                <Link href="/suporte" onClick={() => setMobileOpen(false)}>
                  <div className="w-full px-3 py-2 rounded-full text-center text-gray-700 hover:bg-gray-100">
                    Entrar
                  </div>
                </Link>
                <Link href="/suporte" onClick={() => setMobileOpen(false)}>
                  <div className="w-full px-3 py-2 rounded-full bg-yellow-500 text-white text-center hover:bg-yellow-600">
                    Criar conta
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
});
