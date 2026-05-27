"use client";

import { useRef, useEffect, useState } from "react";
import { TrendingDown, Smartphone, Clock } from "lucide-react";
import { useMotion } from "@/components/motion-provider";
import { usePageReady } from "@/hooks/use-page-ready";

const painPoints = [
  { icon: TrendingDown, title: "Pierdes clientes porque no te encuentran en internet", description: "Tu negocio es invisible para quienes buscan en Google" },
  { icon: Smartphone, title: "Tu competencia ya tiene web y redes, y tu no", description: "Mientras dudás, ellos captan a tus clientes potenciales" },
  { icon: Clock, title: "Respondés WhatsApp manualmente todo el día y se te van los pedidos", description: "Cuando no puedes contestar, las ventas se pierden" },
];

export function PainSection() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const motionLib = useMotion();
  const pageReady = usePageReady();

  useEffect(() => {
    if (!pageReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pageReady]);

  const Div = motionLib?.motion.div ?? "div";

  const fadeUp = (delay = 0) =>
    motionLib ? {
      initial: { opacity: 1, y: 16 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 },
      transition: { duration: 0.5, delay },
    } : {};

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            ¿Te identificás con esto?
          </h2>
        </Div>
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <Div key={index} {...fadeUp(index * 0.15)}
              className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug">{point.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{point.description}</p>
            </Div>
          ))}
        </div>
      </div>
    </section>
  );
}