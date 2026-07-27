import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { AcompanamientoHeroSection } from "@/components/sections/acompanamiento-hero";
import { AcompanamientoPriceSection } from "@/components/sections/acompanamiento-price";
import { AcompanamientoIncludesSection } from "@/components/sections/acompanamiento-includes";
import { AcompanamientoWhySection } from "@/components/sections/acompanamiento-why";
import { AcompanamientoHowSection } from "@/components/sections/acompanamiento-how";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Acompañamiento | Vanegas Solutions",
  description:
    "Servicio mensual de Fidelización: mejoras, soporte y actualizaciones continuas para tu proyecto, desde $250.000 COP/mes.",
};

export default function AcompanamientoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AcompanamientoHeroSection />
      <AcompanamientoPriceSection />
      <AcompanamientoIncludesSection />
      <AcompanamientoWhySection />
      <AcompanamientoHowSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
