import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { ProductsSection } from "@/components/sections/products";
import { ProjectsCTASection } from "@/components/sections/projects-cta";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainSection />
      <ServicesSection />
      <ProjectsSection />
      <ProjectsCTASection />
      <ProductsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
