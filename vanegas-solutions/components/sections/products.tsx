import { Bell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/brand/icon";
import { Reveal } from "@/components/brand/reveal";
import { products } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";

export function ProductsSection() {
  return (
    <section id="productos" aria-labelledby="productos-titulo" className="scroll-mt-20">
      <div className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
        <header className="flex flex-col gap-3 md:max-w-3xl">
          <span className="etiqueta">Software por sector</span>
          <h2 id="productos-titulo" className="titular text-h1">Software listo para tu tipo de negocio</h2>
          <p className="text-texto-suave md:text-lg">
            Programas hechos para un sector específico: los usas desde el primer día, pagas una suscripción mensual y
            los pruebas gratis antes de decidir.
          </p>
        </header>

        <ul className="grid gap-4 md:grid-cols-[2fr_1fr] md:gap-6">
          {products.map((product) => (
            <li key={product.slug}>
              <Reveal className="h-full">
                <article className="flex h-full flex-col gap-5 border-2 border-borde-fuerte bg-superficie p-6 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="etiqueta">Para {product.niche.toLowerCase()}</span>
                    <span className="etiqueta bg-texto px-2.5 py-1 text-fondo">
                      {product.status === "soon" ? "Próximamente" : "Disponible"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center border-2 border-borde-fuerte">
                      <Icon icon={product.icon} className="size-7" />
                    </span>
                    <div className="flex flex-col">
                      <h3 className="titular text-display-l">{product.name}</h3>
                      <span className="font-mono text-xs text-texto-suave">by Vanegas Solutions</span>
                    </div>
                  </div>
                  <p className="md:text-lg">{product.description}</p>
                  <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 border-b border-borde py-2.5 text-[15px]">
                        <span aria-hidden="true" className="h-2.5 w-5 shrink-0 bg-ladrillo" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                    {product.status === "live" && product.url ? (
                      <Button asChild size="lg">
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          Probar {product.name} gratis
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="tinta" size="lg">
                        <a
                          href={waLink(`Hola, quiero que me avisen cuando salga ${product.name}`)}
                          target="_blank"
                          rel="noopener noreferrer">
                          <Icon icon={Bell} />
                          Avísame cuando salga
                        </a>
                      </Button>
                    )}
                    <span className="font-mono text-[13px] text-texto-suave">
                      Suscripción mensual · {product.trialDays} días de prueba gratis
                    </span>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={70} className="h-full">
              <article className="flex h-full flex-col gap-4 border-2 border-dashed border-borde-fuerte p-6 md:p-8">
                <span className="etiqueta">Próximos sectores</span>
                <h3 className="titular text-h2">¿Tu sector es otro?</h3>
                <p className="text-texto-suave">
                  Restaurantes, tiendas, estéticas, talleres… Cuéntanos cómo funciona tu negocio y qué te gustaría
                  resolver con un programa. Así decidimos qué construir después.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-auto self-start">
                  <a
                    href={waLink("Hola, me gustaría un software para mi tipo de negocio")}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon icon={MessageCircle} />
                    Cuéntanos tu caso
                  </a>
                </Button>
              </article>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
