import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/brand/icon";
import { Reveal } from "@/components/brand/reveal";
import { waLink } from "@/lib/whatsapp";
import { supportIncludes } from "@/lib/support";

export function SupportSection() {
  return (
    <section id="acompanamiento" aria-labelledby="acompanamiento-titulo" className="scroll-mt-20 bg-superficie-alt">
      <div className="mx-auto flex max-w-sitio flex-wrap items-start gap-x-16 gap-y-10 px-5 py-16 md:px-10 md:py-28">
        <div className="flex min-w-0 flex-[5_1_340px] flex-col gap-4">
          <span className="etiqueta">Después de la entrega</span>
          <h2 id="acompanamiento-titulo" className="titular text-h1">Tu proyecto no termina el día de la entrega.</h2>
          <p className="md:text-lg">
            Con el Acompañamiento mantenemos tu página o sistema funcionando, actualizado y creciendo contigo.
          </p>
          <div className="flex flex-col gap-1 border-t-2 border-borde-fuerte pt-4">
            <span className="font-mono text-[32px] leading-tight font-medium md:text-[40px]">
              $250.000<span className="text-base text-texto-suave"> / mes</span>
            </span>
            <span className="font-mono text-[13px] text-texto-suave">
              Precio fijo · Sin permanencia · Cancelas cuando quieras
            </span>
          </div>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Button asChild size="lg">
              <a
                href={waLink("Hola, quiero información sobre el plan de Acompañamiento")}
                target="_blank"
                rel="noopener noreferrer">
                <Icon icon={MessageCircle} />
                Quiero el Acompañamiento
              </a>
            </Button>
            <Button asChild variant="link" size="lg" className="self-center sm:self-auto">
              <Link href="/acompanamiento">Ver todos los detalles</Link>
            </Button>
          </div>
        </div>
        <ul className="grid min-w-0 flex-[7_1_480px] gap-1.5 sm:grid-cols-2">
          {supportIncludes.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(index % 2) * 70} className="h-full">
                <div className="flex h-full flex-col gap-1.5 bg-fondo p-5">
                  <strong className="text-[17px]">{item.title}</strong>
                  <span className="text-[15px] text-texto-suave">{item.description}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
