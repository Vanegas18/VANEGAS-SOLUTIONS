"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Hilada } from "@/components/brand/hilada";
import { Icon } from "@/components/brand/icon";
import { Reveal } from "@/components/brand/reveal";
import { formatCOP, services, type Service } from "@/lib/services";
import { waLink } from "@/lib/whatsapp";

const regular = services.filter((service) => !service.featured);
const featured = services.find((service) => service.featured)!;
const number = (service: Service) => String(services.indexOf(service) + 1).padStart(2, "0");

const liftOnHover =
  "transition-[transform,box-shadow] duration-[var(--dur-rapido)] ease-asentar hover:shadow-[6px_6px_0_var(--ladrillo)] focus-visible:shadow-[6px_6px_0_var(--ladrillo)] motion-safe:hover:-translate-x-1.5 motion-safe:hover:-translate-y-1.5 motion-safe:focus-visible:-translate-x-1.5 motion-safe:focus-visible:-translate-y-1.5";

export function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.replace("#servicio-", "");
      const match = services.find((service) => service.slug === slug);
      if (match) setSelected(match);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const onOpenChange = (open: boolean) => {
    if (open) return;
    setSelected(null);
    if (window.location.hash.startsWith("#servicio-")) {
      history.replaceState(null, "", "#servicios");
    }
  };

  return (
    <>
      <Hilada />
      <section id="servicios" aria-labelledby="servicios-titulo" className="scroll-mt-20 bg-superficie">
        <div className="mx-auto flex max-w-sitio flex-col gap-8 px-5 py-16 md:gap-12 md:px-10 md:py-28">
          <header className="flex flex-col gap-3 md:max-w-3xl">
            <span className="etiqueta">Servicios</span>
            <h2 id="servicios-titulo" className="titular text-h1">
              Lo que construimos para tu negocio
            </h2>
            <p className="text-texto-suave md:text-lg">
              Toca cualquier servicio para ver qué incluye. Precios de referencia en pesos colombianos; el
              precio exacto va en tu propuesta.
            </p>
          </header>

          <ul className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {regular.map((service, index) => (
              <li key={service.slug} id={`servicio-${service.slug}`} className="scroll-mt-24">
                <Reveal delay={(index % 3) * 70} className="h-full">
                  <button
                    type="button"
                    onClick={() => setSelected(service)}
                    aria-haspopup="dialog"
                    className={`group flex h-full w-full cursor-pointer flex-col gap-4 border-2 border-borde-fuerte bg-fondo p-5 text-left outline-none md:gap-5 md:p-7 ${liftOnHover}`}>
                    <span className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs font-medium text-texto-suave">{number(service)}</span>
                      <span className="flex size-10 shrink-0 items-center justify-center border-2 border-borde-fuerte transition-colors duration-[var(--dur-instante)] group-hover:bg-texto group-hover:text-fondo">
                        <Icon icon={Plus} className="size-5" />
                      </span>
                    </span>
                    <span className="flex flex-col gap-2">
                      <span className="titular text-h2">{service.title}</span>
                      <span className="text-[15px] leading-relaxed text-texto-suave md:text-body">{service.summary}</span>
                    </span>
                    <span className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-t border-borde pt-4">
                      <span className="flex flex-col">
                        <span className="etiqueta text-texto-suave">Desde</span>
                        <span className="font-mono text-precio font-medium">{formatCOP(service.priceFrom)}</span>
                      </span>
                      <span className="text-[15px] font-semibold underline decoration-2 underline-offset-[6px] group-hover:text-ladrillo-hover">
                        Ver qué incluye
                      </span>
                    </span>
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>

          <article
            id={`servicio-${featured.slug}`}
            className="-mx-5 flex scroll-mt-24 flex-wrap items-center gap-6 bg-ladrillo px-5 py-8 text-sobre-ladrillo md:mx-0 md:gap-10 md:p-10">
            <div className="flex min-w-0 flex-[2_1_420px] flex-col gap-3">
              <span className="etiqueta">{number(featured)} · El más completo</span>
              <h3 className="titular text-h1">{featured.title}</h3>
              <p className="md:text-lg">{featured.summary}</p>
            </div>
            <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-4">
              <span className="flex flex-col">
                <span className="etiqueta">Desde</span>
                <span className="font-mono text-[28px] leading-tight font-medium md:text-[32px]">
                  {formatCOP(featured.priceFrom)}
                </span>
              </span>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Button asChild variant="cal" size="lg">
                  <a href={waLink(featured.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                    <Icon icon={MessageCircle} />
                    Cotizar por WhatsApp
                  </a>
                </Button>
                <Button variant="outline-cal" size="lg" onClick={() => setSelected(featured)} aria-haspopup="dialog">
                  Ver qué incluye
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={onOpenChange}>
        <DialogContent
          showCloseButton={false}
          className="flex max-h-[92dvh] w-[calc(100%-1.5rem)] flex-col gap-0 overflow-hidden rounded-none border-2 border-borde-fuerte bg-superficie p-0 text-body text-texto ring-0 sm:max-w-2xl">
          {selected && (
            <>
              <div className="flex items-start justify-between gap-4 bg-texto px-5 py-5 text-fondo md:px-8 md:py-7">
                <div className="flex flex-col gap-2">
                  <span className="etiqueta text-borde">Servicio {number(selected)}</span>
                  <DialogTitle className="titular text-h1 leading-[0.96] font-extrabold">{selected.title}</DialogTitle>
                  <span className="font-mono text-lg font-medium text-[#E0714F] md:text-precio">
                    Desde {formatCOP(selected.priceFrom)} COP
                  </span>
                </div>
                <DialogClose asChild>
                  <Button variant="outline-cal" size="icon" aria-label="Cerrar">
                    <Icon icon={X} />
                  </Button>
                </DialogClose>
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto px-5 py-6 md:px-8 md:py-8">
                <DialogDescription className="text-[17px] leading-relaxed text-texto md:text-lead">
                  {selected.explanation}
                </DialogDescription>
                <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
                  <div className="flex flex-col gap-3">
                    <span className="etiqueta">Qué incluye</span>
                    <ul className="flex flex-col gap-1">
                      {selected.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3 border-b border-borde py-2.5 text-[15px]">
                          <span aria-hidden="true" className="h-2.5 w-5 shrink-0 bg-ladrillo" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 self-start bg-fondo p-5">
                    <span className="etiqueta">Ideal para</span>
                    <p className="text-[15px] leading-relaxed">{selected.ideal}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t-2 border-borde-fuerte bg-superficie px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
                <p className="text-sm text-texto-suave">Te respondemos con una propuesta clara.</p>
                <Button asChild size="lg">
                  <a href={waLink(selected.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                    <Icon icon={MessageCircle} />
                    Cotizar por WhatsApp
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
