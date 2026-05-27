"use client";

import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";
const badges = [
  "Respondo en menos de 1 hora",
  "Sin contratos",
  "Resultados reales",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      {/*
        Orbes de luz del fondo — animadas con CSS (glowPulse keyframes en globals.css).
        Sin Framer Motion: no hay dependencia de JS para mostrar estos elementos.
      */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-glow-1 absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="hero-glow-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/*
          hero-animate + hero-animate-delay-*: keyframe fadeSlideUp definido en globals.css.
          Estos corren inmediatamente al cargar la página — sin esperar ningún JS.
          opacity:0 inicial está dentro del keyframe @from, no como estado React.
        */}
        <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight font-(family-name:--font-syne) text-balance">
          Digitaliza tu negocio y vende más 🚀
        </h1>

        <p className="hero-animate hero-animate-delay-1 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Páginas web, WhatsApp automatizado y soluciones simples para negocios.
        </p>

        <div className="hero-animate hero-animate-delay-2 mt-10">
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
        </div>

        <div className="hero-animate hero-animate-delay-3 mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {badges.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/*
        Indicador de scroll — fade-in tardío con CSS (scroll-indicator en globals.css).
        scroll-bounce anima el contenedor, scroll-dot anima el punto interior.
      */}
    </section>
  );
}
