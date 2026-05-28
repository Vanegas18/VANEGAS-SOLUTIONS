"use client";

import { useRef } from "react";
import { TrendingDown, Smartphone, Clock } from "lucide-react";
import { useInViewLite } from "@/hooks/use-in-view-lite";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Pierdes clientes porque no te encuentran en internet",
    description: "Tu negocio es invisible para quienes buscan en Google",
  },
  {
    icon: Smartphone,
    title: "Tu competencia ya tiene web y redes, y vos no",
    description: "Mientras dudás, ellos captan a tus clientes potenciales",
  },
  {
    icon: Clock,
    title: "Respondés WhatsApp manualmente todo el día y se te van los pedidos",
    description: "Cuando no podés contestar, las ventas se pierden",
  },
];

export function PainSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewLite(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 fade-up"
          style={isInView ? { opacity: 1, transform: "translateY(0)" } : {}}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            ¿Te identificás con esto?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-300 fade-up"
              style={
                isInView
                  ? {
                      opacity: 1,
                      transform: "translateY(0)",
                      transitionDelay: `${index * 0.15}s`,
                    }
                  : {}
              }>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
