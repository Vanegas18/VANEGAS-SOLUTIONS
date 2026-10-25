import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Hilada } from "@/components/brand/hilada";
import { Icon } from "@/components/brand/icon";
import { Button } from "@/components/ui/button";
import { legalDocs, getLegalDoc } from "@/lib/legal-content";
import { waLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/legal/${doc.slug}` },
  };
}


export default async function LegalDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <>
      <Navbar />
      <main>
        <header className="mx-auto flex max-w-sitio flex-col gap-5 px-5 pt-10 pb-12 md:px-10 md:pt-16 md:pb-16">
          <Link
            href="/legal"
            className="inline-flex min-h-11 items-center gap-2 self-start text-[15px] font-semibold hover:text-ladrillo-hover">
            <Icon icon={ArrowLeft} className="size-4" />
            Centro legal
          </Link>
          <h1 className="titular max-w-[16em] text-display-l">{doc.title}</h1>
          <span className="etiqueta text-texto-suave">Última actualización: {doc.updatedAt}</span>
        </header>
        <Hilada />

        <div className="bg-superficie">
          <div className="mx-auto grid max-w-sitio gap-10 px-5 py-12 md:grid-cols-[240px_1fr] md:gap-16 md:px-10 md:py-20">
            <details className="border-2 border-borde-fuerte md:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center px-4 font-semibold [&::-webkit-details-marker]:hidden">
                Contenido del documento
              </summary>
              <nav aria-label="Contenido" className="flex flex-col border-t border-borde px-4 py-2">
                {doc.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="py-2 text-[15px] text-texto-suave hover:text-texto">
                    {section.title}
                  </a>
                ))}
              </nav>
            </details>

            <nav aria-label="Contenido" className="sticky top-28 hidden flex-col self-start border-l-2 border-borde-fuerte md:flex">
              <span className="etiqueta mb-2 pl-4">Contenido</span>
              {doc.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="py-1.5 pl-4 text-[15px] text-texto-suave hover:text-texto">
                  {section.title}
                </a>
              ))}
            </nav>

            <article className="flex max-w-[42em] flex-col gap-10">
              {doc.sections.map((section) => (
                <section key={section.id} id={section.id} className="flex scroll-mt-28 flex-col gap-3">
                  <h2 className="titular text-h3">{section.title}</h2>
                  {section.blocks.map((block, index) =>
                    block.type === "p" ? (
                      <p key={index} className="leading-relaxed">
                        {block.text}
                      </p>
                    ) : (
                      <ul key={index} className="flex flex-col gap-1">
                        {block.items.map((item) => (
                          <li key={item} className="flex gap-3 border-b border-borde py-2">
                            <span aria-hidden="true" className="mt-2 h-2 w-4 shrink-0 bg-ladrillo" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </section>
              ))}

              <div className="flex flex-col gap-4 border-t-2 border-borde-fuerte pt-8 sm:flex-row sm:items-center sm:justify-between">
                <Button asChild size="lg">
                  <a href={waLink(`Hola, tengo una duda sobre ${doc.title}`)} target="_blank" rel="noopener noreferrer">
                    <Icon icon={MessageCircle} />
                    ¿Dudas? Escríbenos
                  </a>
                </Button>
                <Button asChild variant="link">
                  <Link href="/legal">Volver al centro legal</Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton message={`Hola, tengo una duda sobre ${doc.title}`} />
    </>
  );
}
