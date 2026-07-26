import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LegalHeroSection } from "@/components/sections/legal-hero";
import { LegalCommitmentSection } from "@/components/sections/legal-commitment";
import { LegalHubSection } from "@/components/sections/legal-hub";
import { LegalTrustSection } from "@/components/sections/legal-trust";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Legal | Vanegas Solutions",
  description:
    "Términos, garantías y políticas de Vanegas Solutions. Transparencia total antes de contratar.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <LegalHeroSection />
      <LegalCommitmentSection />
      <LegalHubSection />
      <LegalTrustSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
