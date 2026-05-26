"use client";

import { useRef, useEffect, useState } from "react";
import { Target, DollarSign, FolderKanban, Zap } from "lucide-react";

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
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [MotionDiv, setMotionDiv] = useState<React.ElementType | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          import("framer-motion").then((mod) => {
            setMotionDiv(() => mod.motion.div);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-100px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Div = MotionDiv ?? "div";

  const fadeUp = (delay = 0) =>
    MotionDiv
      ? {
          initial: { opacity: 0, y: delay === 0 ? 20 : 30 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: delay === 0 ? 0.6 : 0.5, delay },
        }
      : {};

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            ¿Por qué trabajar con Vanegas Solutions?
          </h2>
        </Div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Div
              key={index}
              {...fadeUp(index * 0.1)}
              className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 flex items-start gap-4 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </Div>
          ))}
        </div>
      </div>
    </section>
  );
}
