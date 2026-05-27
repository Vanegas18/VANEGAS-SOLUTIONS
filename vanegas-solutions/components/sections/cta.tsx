"use client";

import { useRef, useEffect, useState } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMotion } from "@/components/motion-provider";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";
const guarantees = [
  "Sin contratos",
  "Sin permanencia",
  "Resultados garantizados",
];

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const motionLib = useMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-100px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const H2 = motionLib?.motion.h2 ?? "h2";
  const P = motionLib?.motion.p ?? "p";
  const Div = motionLib?.motion.div ?? "div";

  const fadeUp = (delay = 0) =>
    motionLib
      ? {
          initial: { opacity: 1, y: 16 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 },
          transition: { duration: 0.6, delay },
        }
      : {};

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <H2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-syne)]">
          ¿Listo para digitalizar tu negocio?
        </H2>
        <P
          {...fadeUp(0.1)}
          className="text-lg md:text-xl text-muted-foreground mb-10">
          Escribime hoy y en menos de 24 horas tenés una propuesta.
        </P>
        <Div {...fadeUp(0.2)}>
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
        </Div>
        <Div
          {...fadeUp(0.3)}
          className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {guarantees.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              {item}
            </span>
          ))}
        </Div>
      </div>
    </section>
  );
}
