"use client";

import { useEffect, useState } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

const badges = [
  "Respondo en menos de 1 hora",
  "Sin contratos",
  "Resultados reales",
];

export function HeroSection() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [MotionComponents, setMotionComponents] = useState<{
    div: React.ElementType;
    h1: React.ElementType;
    p: React.ElementType;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    // Framer Motion carga después del primer render visible
    import("framer-motion").then((mod) => {
      setMotionComponents({
        div: mod.motion.div,
        h1: mod.motion.h1,
        p: mod.motion.p,
      });
    });
  }, []);

  const Div = MotionComponents?.div ?? "div";
  const H1 = MotionComponents?.h1 ?? "h1";
  const P = MotionComponents?.p ?? "p";

  // Animaciones del hero (entran desde el inicio, no desde scroll)
  const heroAnim = (delay = 0) =>
    MotionComponents
      ? {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        }
      : {};

  // Orbes de fondo — solo se renderizan cuando Framer Motion está listo
  const glowOrbs = MotionComponents ? (
    <div className="absolute inset-0 overflow-hidden">
      <MotionComponents.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionComponents.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  ) : (
    // Versión estática mientras carga — mantiene el espacio visual
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px] opacity-30" />
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      {glowOrbs}

      {/* Hero content — visible inmediatamente, sin esperar Framer */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <H1
          {...heroAnim(0)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight font-[family-name:var(--font-syne)] text-balance">
          Digitaliza tu negocio y vende más 🚀
        </H1>

        <P
          {...heroAnim(0.2)}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Páginas web, WhatsApp automatizado y soluciones simples para negocios.
        </P>

        <Div {...heroAnim(0.4)} className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </a>
          </Button>
        </Div>

        <Div
          {...heroAnim(0.6)}
          className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {badges.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              {item}
            </span>
          ))}
        </Div>
      </div>

      {/* Scroll indicator — solo cuando Framer está listo */}
      {MotionComponents && (
        <MotionComponents.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <MotionComponents.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <MotionComponents.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </MotionComponents.div>
        </MotionComponents.div>
      )}
    </section>
  );
}
