import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Icon } from "@/components/brand/icon";
import { PageHero } from "@/components/brand/page-hero";
import { SectionHeader } from "@/components/brand/section-header";
import { BrickGrid } from "@/components/brand/brick-grid";
import { Button } from "@/components/ui/button";
import { legalDocs } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Legal",
  description: "Términos, garantías y políticas de Vanegas Solutions. Transparencia total antes de contratar.",
  alternates: { canonical: "/legal" },
};

const pillars = [
  { title: "Transparencia", description: "Cada condición se explica claramente antes de firmar." },
  { title: "Todo por escrito", description: "Cada entrega queda documentada y respaldada." },
  { title: "Datos protegidos", description: "Tratamos tus datos conforme a la Ley 1581 de 2012 y nunca los compartimos sin permiso." },
  { title: "Acompañamiento", description: "El soporte no termina el día de la entrega." },
];

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Centro legal"
          title="Transparencia desde el primer contacto."
          description="Toda nuestra relación comercial queda por escrito: garantías, pagos y datos protegidos, sin sorpresas.">
          <Button asChild variant="outline" size="lg">
            <a href="#documentos">Ver documentos</a>
          </Button>
        </PageHero>

        <section id="documentos" aria-labelledby="documentos-titulo" className="scroll-mt-20 bg-superficie">
          <div className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
            <SectionHeader id="documentos-titulo" eyebrow="Documentos" title="Léelos antes de contratar." />
            <ul className="grid gap-4 md:grid-cols-2">
              {legalDocs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/legal/${doc.slug}`}
                    className="group flex h-full flex-col gap-4 border-2 border-borde-fuerte bg-fondo p-6 transition-[transform,box-shadow] duration-[var(--dur-rapido)] ease-asentar outline-none hover:shadow-[6px_6px_0_var(--ladrillo)] focus-visible:shadow-[6px_6px_0_var(--ladrillo)] motion-safe:hover:-translate-x-1.5 motion-safe:hover:-translate-y-1.5 md:p-8">
                    <span className="flex items-center justify-between gap-4">
                      <span className="flex size-11 items-center justify-center border-2 border-borde-fuerte">
                        <Icon icon={doc.icon} className="size-5" />
                      </span>
                      <span className="etiqueta text-texto-suave">Actualizado: {doc.updatedAt}</span>
                    </span>
                    <span className="titular text-h2">{doc.title}</span>
                    <span className="text-texto-suave">{doc.description}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 self-start font-semibold underline decoration-2 underline-offset-[6px] group-hover:text-ladrillo-hover">
                      Leer documento
                      <Icon icon={ArrowRight} className="size-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="compromiso" className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
          <SectionHeader id="compromiso" eyebrow="Nuestro compromiso" title="Cómo protegemos la relación contigo." />
          <BrickGrid items={pillars} columns={4} tone="tinta" />
        </section>
      </main>
      <Footer />
      <WhatsAppButton message="Hola, tengo una duda sobre sus políticas" />
    </>
  );
}
