import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { NosotrosHeroSection } from "@/components/sections/nosotros-hero";
import { NosotrosAboutSection } from "@/components/sections/nosotros-about";
import { NosotrosTimelineSection } from "@/components/sections/nosotros-timeline";
import { NosotrosWhySection } from "@/components/sections/nosotros-why";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Nosotros | Vanegas Solutions",
  description:
    "Conoce cómo trabajamos y por qué somos el aliado tecnológico de pequeñas y medianas empresas en Medellín.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <NosotrosHeroSection />
      <NosotrosAboutSection />
      <NosotrosTimelineSection />
      <NosotrosWhySection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
