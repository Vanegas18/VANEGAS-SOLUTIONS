import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ProjectsSection } from "@/components/sections/projects";
import { BenefitsSection } from "@/components/sections/benefits";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LoadingScreen } from "@/components/loading-screen";
import { MotionProvider } from "@/components/motion-provider";

export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-background">
        <LoadingScreen />
        <Navbar />
        <HeroSection />
        <PainSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProjectsSection />
        <BenefitsSection />
        <FAQSection />
        <CTASection />
        <Footer />
        <WhatsAppButton />
      </main>
    </MotionProvider>
  );
}
