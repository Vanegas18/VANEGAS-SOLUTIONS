import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hilada } from "@/components/brand/hilada";
import { Icon } from "@/components/brand/icon";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100svh-4.25rem)] flex-col md:min-h-[calc(100svh-4.75rem)]">
        <section className="mx-auto flex w-full max-w-sitio flex-1 flex-col justify-center gap-6 px-5 py-16 md:px-10">
          <span className="etiqueta text-ladrillo">Error 404</span>
          <h1 className="titular max-w-[12em] text-display-l">Aquí falta un ladrillo.</h1>
          <p className="max-w-[32em] text-[17px] md:text-lead">
            Esta página no existe. Es posible que el enlace esté roto o que la página se haya movido.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Button asChild size="lg">
              <Link href="/">Volver al inicio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={waLink("Hola, encontré un enlace que no funciona en la página web")}
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon={MessageCircle} />
                Avísanos por WhatsApp
              </a>
            </Button>
          </div>
        </section>
        <Hilada />
      </main>
      <Footer />
    </>
  );
}
