import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { SecuritySection } from "@/components/sections/security-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <BenefitsSection />
        <SecuritySection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
