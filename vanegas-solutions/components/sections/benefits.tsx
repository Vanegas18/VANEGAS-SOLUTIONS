"use client";

import { Target, DollarSign, FolderKanban, Zap } from "lucide-react";
import { useSectionAnimation } from "@/hooks/use-section-animation";

const benefits = [
  {
    icon: Target,
    title: "Más clientes",
    description: "Te encuentran en internet cuando te buscan",
  },
  {
    icon: DollarSign,
    title: "Más ventas",
    description: "Tu negocio vende incluso cuando estás dormido",
  },
  {
    icon: FolderKanban,
    title: "Más orden",
    description: "Sistemas simples que organizan tu negocio",
  },
  {
    icon: Zap,
    title: "Menos trabajo manual",
    description: "Automatizá tareas repetitivas y enfocate en crecer",
  },
];

export function BenefitsSection() {
  const ref = useSectionAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-item text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-(family-name:--font-syne)">
            ¿Por qué trabajar con Vanegas Solutions?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`section-item delay-${index + 1} glass-card glass-card-hover rounded-2xl p-6 md:p-8 flex items-start gap-4 transition-all duration-300`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
