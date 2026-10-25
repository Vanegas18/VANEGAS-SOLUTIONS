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
import { siteConfig } from "@/lib/site-config";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Estudio de software en Medellín. Conoce cómo trabajamos con negocios que venden cara a cara.",
  alternates: { canonical: "/nosotros" },
};

const steps = [
  { title: "Conversamos sobre tu negocio", description: "Sin presión ni venta inmediata. Primero entendemos qué necesitas." },
  { title: "Te enviamos una propuesta clara", description: "Alcance, tiempo estimado y valor, todo por escrito antes de empezar." },
  { title: "Iniciamos con el 50% de anticipo", description: "Sin sorpresas ni cobros ocultos durante el desarrollo." },
  { title: "Entregamos y seguimos contigo", description: "Capacitación incluida y soporte después de la entrega." },
];

const reasons = [
  { title: "Hecho para tu negocio", description: "Nada de plantillas genéricas: cada solución se construye para ti." },
  { title: "Sin tecnicismos", description: "Te explicamos todo en lenguaje simple." },
  { title: "Hablas con quien lo construye", description: "Sin intermediarios ni vendedores en el medio." },
  { title: "Sin permanencia", description: "Trabajas con nosotros porque quieres, no porque estás atado." },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Nosotros"
          title="Ayudamos a negocios tradicionales a digitalizarse sin complicaciones."
          description="Tecnología clara y sin tecnicismos, pensada para negocios que quieren crecer, no para expertos en sistemas.">
          <Button asChild size="lg">
            <a href={waLink("Hola, quiero conocer más sobre Vanegas Solutions")} target="_blank" rel="noopener noreferrer">
              <Icon icon={MessageCircle} />
              Hablemos de tu negocio
            </a>
          </Button>
        </PageHero>

        <section aria-labelledby="quienes" className="mx-auto flex max-w-sitio flex-wrap gap-x-16 gap-y-8 px-5 py-16 md:px-10 md:py-28">
          <div className="flex min-w-0 flex-[4_1_280px] flex-col gap-3">
            <span className="etiqueta">Quiénes somos</span>
            <h2 id="quienes" className="titular text-h1">Un estudio pequeño, a propósito.</h2>
          </div>
          <div className="flex min-w-0 flex-[8_1_480px] flex-col gap-5 text-[17px] leading-relaxed md:text-lead">
            <p>
              Vanegas Solutions es una empresa colombiana de desarrollo de software en Medellín. Ayudamos a negocios
              que venden cara a cara a crecer con tecnología hecha a su medida.
            </p>
            <p>
              No vendemos software genérico: primero entendemos tu negocio y después construimos lo que de verdad
              necesitas, con acompañamiento antes, durante y después de la entrega.
            </p>
            <span className="self-start bg-texto px-3 py-1.5 font-mono text-xs text-fondo">
              Empresa registrada · NIT {siteConfig.nit}
            </span>
          </div>
        </section>

        <section aria-labelledby="como" className="bg-superficie">
          <div className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
            <SectionHeader id="como" eyebrow="Cómo trabajamos" title="Del primer mensaje a tu negocio en línea." />
            <BrickGrid items={steps} columns={4} tone="tinta" numbered accentLast />
          </div>
        </section>

        <section aria-labelledby="por-que" className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
          <SectionHeader id="por-que" eyebrow="Por qué elegirnos" title="Lo que nos hace distintos." />
          <BrickGrid items={reasons} columns={2} tone="borde" />
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton message="Hola, quiero conocer más sobre Vanegas Solutions" />
    </>
  );
}
