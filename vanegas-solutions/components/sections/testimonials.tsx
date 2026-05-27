"use client";

import { Star } from "lucide-react";
import { useSectionAnimation } from "@/hooks/use-section-animation";

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
  const ref = useSectionAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-item text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-(family-name:--font-syne)">
            Lo que dicen los negocios
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`section-item delay-${index + 1} glass-card rounded-2xl p-6 md:p-8`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
