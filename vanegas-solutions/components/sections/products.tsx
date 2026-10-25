import Link from "next/link";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/brand/icon";
import { products } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";

export function ProductsSection() {
  return (
    <section className="mx-auto grid max-w-sitio gap-4 px-5 py-16 md:grid-cols-2 md:gap-6 md:px-10 md:py-28">
      {products.map((product, index) => (
        <article
          key={product.slug}
          id={index === 0 ? "productos" : undefined}
          className="flex scroll-mt-24 flex-col gap-4 border-2 border-borde-fuerte p-6 md:p-10">
          <span className="etiqueta">
            Nuestros productos · {product.status === "soon" ? "Próximamente" : "Disponible"}
          </span>
          <div className="flex items-center gap-3.5">
            <span className="flex size-12 items-center justify-center border-2 border-borde-fuerte">
              <Icon icon={product.icon} className="size-6" />
            </span>
            <h2 className="titular text-h1">{product.name}</h2>
          </div>
          <p className="md:text-lg">
            {product.description} Por suscripción mensual y con {product.trialDays} días de prueba gratis.
          </p>
          <span className="font-mono text-xs text-texto-suave">
            {product.name} · by Vanegas Solutions · para {product.niche.toLowerCase()}
          </span>
          {product.status === "live" && product.url ? (
            <Button asChild variant="outline" size="lg" className="mt-auto self-start">
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                Probar {product.name}
              </a>
            </Button>
          ) : (
            <Button asChild variant="outline" size="lg" className="mt-auto self-start">
              <a
                href={waLink(`Hola, quiero que me avisen cuando salga ${product.name}`)}
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon={Bell} />
                Avísame cuando salga
              </a>
            </Button>
          )}
        </article>
      ))}

      <article id="acompanamiento" className="flex scroll-mt-24 flex-col gap-4 bg-superficie p-6 md:p-10">
        <span className="etiqueta">Después de la entrega</span>
        <h2 className="titular text-h1">Acompañamiento</h2>
        <p className="md:text-lg">
          Corrección de errores, mejoras, nuevas funciones y asesoría, todos los meses. Sin permanencia: cancelas
          cuando quieras.
        </p>
        <span className="font-mono text-[28px] font-medium">
          $250.000<span className="text-base text-texto-suave"> / mes</span>
        </span>
        <Button asChild variant="link" size="lg" className="mt-auto self-start">
          <Link href="/acompanamiento">Ver qué incluye</Link>
        </Button>
      </article>
    </section>
  );
}
