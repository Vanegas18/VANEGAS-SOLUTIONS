import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hilada } from "@/components/brand/hilada";
import { Icon } from "@/components/brand/icon";
import { waLink } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <>
      <Hilada accentAt={5} />
      <section aria-labelledby="cta-titulo" className="mx-auto flex max-w-sitio flex-col items-start gap-6 px-5 py-20 md:gap-7 md:px-10 md:py-32">
        <h2 id="cta-titulo" className="titular max-w-[10em] text-display-xl">Cuéntanos qué vende tu negocio.</h2>
        <p className="max-w-[32em] text-[17px] md:text-lead">
          Te respondemos por WhatsApp con una idea concreta para tu caso. La primera consulta es gratis.
        </p>
        <Button asChild size="xl" className="w-full sm:w-auto">
          <a
            href={waLink("Hola, quiero contarles sobre mi negocio")}
            target="_blank"
            rel="noopener noreferrer">
            <Icon icon={MessageCircle} />
            Escríbenos por WhatsApp
          </a>
        </Button>
      </section>
    </>
  );
}
