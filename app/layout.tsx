import type React from "react"
import "./globals.css"
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import { AuthProvider } from "@/components/auth/auth-provider"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap', // Otimização de fonte
  preload: true
})

export const metadata = {
  title: "Banco Zi Credit",
  description: "Seu futuro financeiro começa aqui.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/z-Photoroom.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
