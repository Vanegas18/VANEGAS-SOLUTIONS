import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { legalDocs, getLegalDoc } from "@/lib/legal-content";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

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
    title: `${doc.title} | Vanegas Solutions`,
    description: doc.description,
  };
}

export default async function LegalDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <main className="min-h-screen bg-background pt-28 md:pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/legal"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Centro Legal
        </Link>

        <header className="mb-10">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground mb-4">
            Última actualización: {doc.updatedAt}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-(family-name:--font-syne)">
            {doc.title}
          </h1>
        </header>

        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          {/* TOC — mobile */}
          <details className="md:hidden glass-card rounded-xl p-4">
            <summary className="cursor-pointer text-sm font-medium text-foreground">
              Contenido del documento
            </summary>
            <nav className="mt-3 space-y-2">
              {doc.sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block text-sm text-muted-foreground hover:text-foreground">
                  {s.title}
                </a>
              ))}
            </nav>
          </details>

          {/* TOC — desktop */}
          <nav className="hidden md:block sticky top-28 self-start space-y-2">
            {doc.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                {s.title}
              </a>
            ))}
          </nav>

          {/* Contenido */}
          <div className="space-y-10">
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
                <div className="space-y-3">
                  {s.blocks.map((b, i) =>
                    b.type === "p" ? (
                      <p key={i} className="text-foreground/80 leading-relaxed">{b.text}</p>
                    ) : (
                      <ul key={i} className="list-disc list-inside space-y-1 text-foreground/80">
                        {b.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}

            <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                ¿Tienes dudas? Escríbenos por WhatsApp
              </a>
              <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">
                ← Volver al Centro Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}