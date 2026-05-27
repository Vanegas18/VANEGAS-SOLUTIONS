"use client";

import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSectionAnimation } from "@/hooks/use-section-animation";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";
const guarantees = [
  "Sin contratos",
  "Sin permanencia",
  "Resultados garantizados",
];

export function CTASection() {
  const ref = useSectionAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-item text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-(family-name:--font-syne)">
          ¿Listo para digitalizar tu negocio?
        </h2>
        <p className="section-item delay-1 text-lg md:text-xl text-muted-foreground mb-10">
          Escribime hoy y en menos de 24 horas tenés una propuesta.
        </p>
        <div className="section-item delay-2">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Escríbeme por WhatsApp 💬
            </a>
          </Button>
        </div>
        <div className="section-item delay-3 mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {guarantees.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
