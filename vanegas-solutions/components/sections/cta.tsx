"use client";

import { useRef } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInViewLite } from "@/hooks/use-in-view-lite";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewLite(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-syne)] fade-up"
          style={isInView ? { opacity: 1, transform: "translateY(0)" } : {}}>
          ¿Listo para digitalizar tu negocio?
        </h2>

        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 fade-up"
          style={
            isInView
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transitionDelay: "0.1s",
                }
              : {}
          }>
          Escribime hoy y en menos de 24 horas tenés una propuesta.
        </p>

        <div
          className="fade-up"
          style={
            isInView
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transitionDelay: "0.2s",
                }
              : {}
          }>
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

        <div
          className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground fade-up"
          style={
            isInView
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transitionDelay: "0.3s",
                }
              : {}
          }>
          {["Sin contratos", "Sin permanencia", "Resultados garantizados"].map(
            (item, index) => (
              <span key={index} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
