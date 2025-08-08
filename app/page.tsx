import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense, lazy } from "react"

// Lazy load components para melhor performance
const HeroSection = lazy(() => import("@/components/sections/hero-section").then(m => ({ default: m.HeroSection })))
const ServicesSection = lazy(() => import("@/components/sections/services-section").then(m => ({ default: m.ServicesSection })))
const FeaturesSection = lazy(() => import("@/components/sections/features-section").then(m => ({ default: m.FeaturesSection })))
const BenefitsSection = lazy(() => import("@/components/sections/benefits-section").then(m => ({ default: m.BenefitsSection })))
const SecuritySection = lazy(() => import("@/components/sections/security-section").then(m => ({ default: m.SecuritySection })))
const IntegrationSection = lazy(() => import("@/components/sections/integration-section").then(m => ({ default: m.IntegrationSection })))

// Loading component otimizado
function SectionSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-96 bg-gray-200 rounded-lg"></div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="">
      <Header />
      <main>
        <Suspense fallback={<SectionSkeleton />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <BenefitsSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <SecuritySection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <IntegrationSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
