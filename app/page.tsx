import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { CelcoinSection } from "@/components/sections/celcoin-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { SecuritySection } from "@/components/sections/security-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { CTASection } from "@/components/sections/cta-section"
import InstitucionalPage from "./institucional/page"

export default function HomePage() {
  return (
    <div className="">
      <Header />
      <main>
        <HeroSection />
        {/* <AboutSection />  */}
        {/* <CelcoinSection /> */}
        <ServicesSection />
        <PricingSection />
        <FeaturesSection />
        <BenefitsSection />
        <SecuritySection />
        {/* <PartnersSection /> */}
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  )
}
