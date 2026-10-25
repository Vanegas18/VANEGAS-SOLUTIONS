import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { GuaranteeSection } from "@/components/sections/guarantee";
import { ProductsSection } from "@/components/sections/products";
import { SupportSection } from "@/components/sections/support";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <GuaranteeSection />
        <SupportSection />
        <ProductsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
