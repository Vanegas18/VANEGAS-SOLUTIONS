"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight, Store, Scissors, Wrench } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    icon: Store,
    name: "BuildMart",
    category: "Constructora",
    image: "/images/buildmart.png",
    description: "Sistema web completo con catálogo, carrito, pagos y gestión administrativa",
    result: "Ahora controla todo su negocio desde una sola plataforma, sin depender de terceros",
  },
  {
    icon: Scissors,
    name: "Barberia Style",
    category: "Barbería",
    image: "",
    description: "Sistema de citas por WhatsApp y web automatizado",
    result: "Reservas sin llamadas, agenda siempre llena",
  },
  {
    icon: Wrench,
    name: "Ferretería El Progreso",
    category: "Ferretería",
    image: "",
    description: "Catálogo digital con precios actualizables",
    result: "Clientes consultan precios sin llamar",
  },
];

function ProjectPreview({ image, icon: Icon, name }: { image?: string; icon: React.ElementType; name: string }) {
  return image ? (
    <div className="relative h-32 md:h-40 overflow-hidden">
      <Image
        src={image}
        alt={`Vista previa de ${name}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const fallback = e.currentTarget.parentElement?.querySelector("[data-fallback]") as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div data-fallback style={{ display: "none" }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 items-center justify-center">
        <Icon className="w-16 h-16 text-primary/30" />
      </div>
    </div>
  ) : (
    <div className="h-32 md:h-40 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
      <Icon className="w-16 h-16 text-primary/30" />
    </div>
  );
}

export function ProjectsSection() {
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
      { threshold: 0.1, rootMargin: "-100px" }
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
    <section ref={ref} id="proyectos" className="py-24 md:py-32 bg-background dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-syne)]">
            Así podría verse tu negocio
          </h2>
          <p className="text-muted-foreground text-lg">Ejemplos reales de lo que puedo construir para vos</p>
        </Div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Div
              key={index}
              {...fadeUp(index * 0.15)}
              className="group glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="bg-[#1a1a24] px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                    {project.name.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>
              </div>
              <ProjectPreview image={project.image} icon={project.icon} name={project.name} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{project.category}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                <p className="text-sm text-primary font-medium mb-4">→ {project.result}</p>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Así podría verse tu negocio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Div>
          ))}
        </div>
      </div>
    </section>
  );
}