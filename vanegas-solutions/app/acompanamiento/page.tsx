import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/brand/icon";
import { PageHero } from "@/components/brand/page-hero";
import { SectionHeader } from "@/components/brand/section-header";
import { BrickGrid } from "@/components/brand/brick-grid";
import { formatCOP } from "@/lib/services";
import { supportIncludes, supportPrice, supportReasons, supportTerms } from "@/lib/support";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Acompañamiento",
  description:
    "Plan mensual de Acompañamiento: corrección de errores, mejoras, soporte y actualizaciones para tu proyecto por $250.000 COP al mes, sin permanencia.",
  alternates: { canonical: "/acompanamiento" },
};

const message = "Hola, quiero información sobre el plan de Acompañamiento";

export default function AcompanamientoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Acompañamiento"
          title="Tu proyecto no termina el día de la entrega."
          description="Mantenemos tu página o sistema funcionando, actualizado y creciendo contigo, con un precio fijo y sin sorpresas.">
          <Button asChild size="lg">
            <a href={waLink(message)} target="_blank" rel="noopener noreferrer">
              <Icon icon={MessageCircle} />
              Quiero el Acompañamiento
            </a>
          </Button>
        </PageHero>

        <section aria-labelledby="precio" className="bg-superficie">
          <div className="mx-auto flex max-w-sitio flex-wrap items-end gap-x-16 gap-y-8 px-5 py-16 md:px-10 md:py-28">
            <div className="flex min-w-0 flex-[5_1_320px] flex-col gap-3">
              <span className="etiqueta">Un solo precio</span>
              <h2 id="precio" className="titular text-h1">Sin importar el tamaño de tu proyecto.</h2>
              <span className="mt-2 font-mono text-[44px] leading-none font-medium md:text-[64px]">
                {formatCOP(supportPrice)}
                <span className="text-lg text-texto-suave"> / mes</span>
              </span>
            </div>
            <div className="min-w-0 flex-[7_1_480px]">
              <BrickGrid items={supportTerms} columns={3} tone="borde" />
            </div>
          </div>
        </section>

        <section aria-labelledby="incluye" className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
          <SectionHeader id="incluye" eyebrow="Qué incluye" title="Todo lo que tu proyecto necesita, cada mes." />
          <BrickGrid items={supportIncludes} columns={3} tone="tinta" />
        </section>

        <section aria-labelledby="razones" className="bg-superficie-alt">
          <div className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
            <SectionHeader id="razones" eyebrow="Por qué contratarlo" title="Un aliado técnico, no un proveedor que desaparece." />
            <BrickGrid items={supportReasons} columns={3} tone="fondo" />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton message={message} />
    </>
  );
}
