import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/brand/icon";
import { services } from "@/lib/services";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const bySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

const wallRows: { slugs: string[]; offset: boolean }[] = [
  { slugs: ["pagina-web", "catalogo-digital"], offset: false },
  { slugs: ["whatsapp-business", "landing-page"], offset: true },
  { slugs: ["automatizacion", "redes-sociales"], offset: false },
  { slugs: ["digitalizacion-completa"], offset: true },
];

const mobileRows = [["pagina-web", "catalogo-digital", "whatsapp-business", "landing-page"]];

export function HeroSection() {
  let brickIndex = 0;

  return (
    <section className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-sitio flex-col justify-center overflow-x-clip px-5 py-6 md:min-h-[calc(100svh-4.75rem)] md:px-10 md:py-10">
      <div className="flex flex-wrap items-center gap-x-16 gap-y-8">
        <div className="flex min-w-0 flex-[7_1_520px] flex-col gap-4 md:gap-6">
          <h1 className="titular text-[clamp(2.75rem,min(6.4vw,11.5svh),6.5rem)] leading-[0.95]">
            Construimos lo digital de tu negocio, ladrillo a ladrillo.
          </h1>
          <p className="max-w-[34em] text-[17px] leading-[1.55] md:text-lead">
            Páginas web, catálogos y WhatsApp Business para negocios que venden cara a cara. Hablas
            directo con quien lo construye.
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <a
                href={waLink("Hola, quiero información sobre digitalizar mi negocio")}
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon={MessageCircle} />
                Cotiza por WhatsApp
              </a>
            </Button>
            <Button asChild variant="link" size="lg" className="self-center sm:self-auto">
              <Link href="#servicios">Ver servicios y precios</Link>
            </Button>
          </div>
          <p className="text-center font-mono text-xs text-texto-suave sm:text-left md:text-[13px]">
            Primera consulta gratis · Precios visibles · Garantía por escrito
          </p>
        </div>

        <nav
          aria-label="Servicios"
          className="-mr-10 hidden min-w-0 flex-[5_1_380px] flex-col gap-1.5 font-mono text-sm font-medium md:flex">
          {wallRows.map((row, rowIndex) => (
            <div key={rowIndex} className={cn("flex gap-1.5", row.offset && "-ml-15")}>
              {row.offset && <span aria-hidden="true" className="flex-[0.5] bg-borde" />}
              {row.slugs.map((slug) => {
                const service = bySlug[slug];
                const delay = brickIndex++ * 70;
                return (
                  <a
                    key={slug}
                    href={`#servicio-${slug}`}
                    style={{ animationDelay: `${delay}ms` }}
                    className={cn(
                      "px-4.5 py-[clamp(1rem,2.6svh,1.625rem)] transition-colors duration-[var(--dur-instante)] motion-safe:animate-asentar",
                      service.featured
                        ? "flex-[2] bg-borde text-texto hover:bg-texto hover:text-fondo"
                        : "flex-1 bg-texto text-fondo hover:bg-ladrillo",
                    )}>
                    {service.title}
                  </a>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      <div aria-hidden="true" className="-mx-5 mt-6 flex flex-col gap-1 font-mono text-xs font-medium md:hidden">
        {mobileRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((slug) => (
              <span key={slug} className="flex-1 bg-texto px-2.5 py-3.5 text-fondo">
                {bySlug[slug].shortTitle}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
