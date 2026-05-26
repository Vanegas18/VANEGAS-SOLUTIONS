"use client";

import { useRef, useEffect, useState } from "react";
import { Globe, MessageSquare, Zap, ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

const services = [
  {
    icon: Globe,
    title: "Página web profesional",
    benefit: "Tu negocio abierto 24/7, sin que hagas nada",
    description:
      "Diseño moderno, optimizado para celular y listo para recibir clientes.",
    modal: {
      headline: "¿Qué es una página web y para qué te sirve?",
      explanation:
        "Imaginá que tu negocio tiene un vendedor que trabaja las 24 horas, los 7 días de la semana, sin descanso y sin sueldo. Eso es tu página web. Cuando alguien en Medellín busca en Google lo que vos vendés, tu negocio aparece. El cliente ve tus productos o servicios, se convence solo, y te escribe directo por WhatsApp.",
      includes: [
        "Diseño bonito y profesional adaptado a tu negocio",
        "Se ve perfecto en celular, tablet y computador",
        "Botón directo a tu WhatsApp para que te contacten fácil",
        "Aparece en Google cuando buscan lo que vos vendés",
        "Listo en 5 a 7 días hábiles",
      ],
      ideal:
        "Tiendas, restaurantes, peluquerías, ferreterías, talleres — cualquier negocio que quiera más clientes.",
    },
  },
  {
    icon: MessageSquare,
    title: "WhatsApp automatizado",
    benefit: "Respondé a clientes automáticamente y no pierdas ventas",
    description: "Respuestas inteligentes que trabajan mientras duermes.",
    modal: {
      headline: "¿Cómo funciona el WhatsApp automatizado?",
      explanation:
        "¿Cuántas veces te escriben a las 10 de la noche preguntando precios y vos no podés responder? Con el WhatsApp automatizado, tu negocio responde solo — precios, horarios, cómo llegar, cómo pedir — sin que vos hagas nada. El cliente recibe respuesta inmediata y vos no perdés la venta.",
      includes: [
        "Respuestas automáticas a preguntas frecuentes",
        "Menú de opciones para que el cliente elija lo que necesita",
        "Confirmación automática de pedidos o citas",
        "Mensaje de bienvenida y despedida profesional",
        "Funciona mientras dormís, salís o estás ocupado",
      ],
      ideal:
        "Negocios que reciben muchos mensajes repetidos: precios, horarios, disponibilidad, direcciones.",
    },
  },
  {
    icon: Zap,
    title: "Sistemas para negocios",
    benefit: "Organizá tu negocio y trabajá menos con más orden",
    description: "Inventario, citas, pedidos y más, todo en un solo lugar.",
    modal: {
      headline: "¿Qué es un sistema para tu negocio?",
      explanation:
        "Si todavía llevás las cuentas en un cuaderno, anotás los pedidos en papel o se te olvida quién debe qué — un sistema te cambia la vida. Es como tener una oficina digital donde controlás todo desde el celular: quién compró, cuánto hay en inventario, qué citas tenés, cuánto ganaste hoy.",
      includes: [
        "Control de inventario — sabés siempre qué tenés y qué falta",
        "Gestión de pedidos — sin papeles, sin confusiones",
        "Agenda de citas — tus clientes reservan solos",
        "Reportes simples — cuánto vendiste y cuándo",
        "Todo desde el celular, sin necesitar computador",
      ],
      ideal:
        "Ferreterías, tiendas, talleres, peluquerías, restaurantes — negocios que manejan mucha información a diario.",
    },
  },
];

type Service = (typeof services)[number];

function ServiceModal({
  service,
  open,
  onClose,
}: {
  service: Service | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!service) return null;
  const Icon = service.icon;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-[#0f0f17] border border-white/10 text-foreground p-0 overflow-hidden">
        <div className="bg-primary/10 border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <DialogHeader className="text-left space-y-0">
              <DialogTitle className="text-base font-bold text-foreground font-[family-name:var(--font-syne)] leading-tight">
                {service.modal.headline}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Información detallada sobre {service.title}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
        <div className="px-6 py-5 space-y-5">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.modal.explanation}
          </p>
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              Qué incluye
            </p>
            <ul className="space-y-2">
              {service.modal.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/3 border border-white/8 rounded-xl px-4 py-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
              Ideal para
            </p>
            <p className="text-sm text-foreground/70">{service.modal.ideal}</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-colors">
            Quiero esto para mi negocio
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [MotionDiv, setMotionDiv] = useState<React.ElementType | null>(null);
  const [selected, setSelected] = useState<Service | null>(null);

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
          initial: { opacity: 1, y: 20},
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 },
          transition: { duration: delay === 0 ? 0.6 : 0.5, delay },
        }
      : {};

  return (
    <section
      ref={ref}
      id="servicios"
      className="py-24 md:py-32 bg-background dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            ¿Qué puedo hacer por tu negocio?
          </h2>
        </Div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Div
              key={index}
              {...fadeUp(index * 0.15)}
              onClick={() => setSelected(service)}
              className="group glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-primary font-medium mb-3">{service.benefit}</p>
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Ver más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Div>
          ))}
        </div>
      </div>
      <ServiceModal
        service={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
