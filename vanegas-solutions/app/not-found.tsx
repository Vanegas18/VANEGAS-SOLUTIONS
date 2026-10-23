import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="flex-1 flex items-center justify-center px-4 pt-32 pb-24 dot-pattern">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold text-primary mb-4">Error 404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-(family-name:--font-syne)">
            Esta página no existe
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Es posible que el enlace esté roto o que la página se haya movido.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Volver al inicio
            </Link>
            <a
              href={waLink(
                "Hola, encontré un enlace que no funciona en la página web",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-border hover:bg-muted text-foreground font-semibold px-6 py-3 rounded-xl transition-colors">
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
