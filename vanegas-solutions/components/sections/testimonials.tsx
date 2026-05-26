"use client";

import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "CR",
    name: "Carlos R.",
    business: "BuildMart, Materiales de Construcción",
    quote:
      "Antes tenía que atender el teléfono todo el día. Ahora los clientes hacen pedidos directo desde la web, sin que yo tenga que levantar un dedo.",
  },
  {
    initials: "FV",
    name: "Felipe V.",
    business: "Barberia Style",
    quote:
      "Mis clientes adoran poder reservar por WhatsApp. Mi agenda nunca estuvo tan llena, y yo tengo más tiempo para enfocarme en el negocio.",
  },
];

export function TestimonialsSection() {
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
            Lo que dicen los negocios
          </h2>
        </Div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Div
              key={index}
              {...fadeUp(index * 0.15)}
              className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </Div>
          ))}
        </div>
      </div>
    </section>
  );
}
