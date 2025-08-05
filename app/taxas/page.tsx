"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PricingSection } from "@/components/sections/pricing-section";

export default function TaxasPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-10">
        <Header />
      </section>
          <PricingSection />
          
            <Footer />
      
    </>
  );
}
