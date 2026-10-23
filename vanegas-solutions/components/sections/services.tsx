"use client";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Globe,
  MessageCircle,
  Zap,
  FileText,
  Grid2x2,
  Instagram,
  Package,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const services = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Página web profesional",
    benefit:
      "Tu negocio visible las 24 horas, captando clientes aunque estés durmiendo",
    description:
      "Diseño moderno, optimizado para celular y listo para recibir clientes.",
    featured: false,
    modal: {
      headline: "¿Para qué sirve una página web?",
      explanation:
        "Imagina tener un vendedor que trabaja 24 horas, 7 días a la semana, sin descanso y sin sueldo. Eso es tu página web. Cuando alguien en tu ciudad busca en Google lo que vendes, tu negocio aparece. El cliente se convence solo y te escribe directo por WhatsApp.",
      includes: [
        "Diseño profesional adaptado a tu negocio",
        "Se ve perfecto en celular, tablet y computador",
        "Botón directo a tu WhatsApp",
        "Optimizada para aparecer en Google",
        "Entrega ágil, con avances que revisas en el camino",
      ],
      ideal:
        "Tiendas, restaurantes, peluquerías, ferreterías, talleres — cualquier negocio que quiera más clientes.",
      whatsappMessage:
        "Hola, me interesa una página web profesional para mi negocio",
      priceFrom: "Desde $650.000 COP",
    },
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: "WhatsApp Business",
    benefit: "Responde más rápido, mejor y no pierdas ni una venta más",
    description:
      "Configuramos y optimizamos tu WhatsApp para que no pierdas ninguna oportunidad de venta.",
    featured: false,
    modal: {
      headline: "¿Cómo mejoramos tu WhatsApp?",
      explanation:
        "Cada mensaje sin respuesta es dinero que se va. Configuramos tu WhatsApp Business completo — perfil profesional, catálogo de productos, respuestas rápidas y mensajes automáticos — para que tu negocio responda bien incluso cuando no estás disponible.",
      includes: [
        "Perfil de negocio profesional completo",
        "Catálogo de productos o servicios",
        "Respuestas rápidas para preguntas frecuentes",
        "Mensaje de bienvenida y ausencia",
        "Etiquetas para organizar tus chats",
      ],
      ideal:
        "Cualquier negocio que reciba consultas por WhatsApp y quiera responder mejor y más rápido.",
      whatsappMessage: "Hola, quiero optimizar mi WhatsApp Business",
      priceFrom: "Desde $200.000 COP",
    },
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Automatización",
    benefit: "Tu negocio funcionando solo — tú enfocado en crecer",
    description:
      "Automatizamos procesos para que tu negocio funcione más eficiente, ahorrando tiempo y esfuerzo.",
    featured: false,
    modal: {
      headline: "¿Qué procesos podemos automatizar?",
      explanation:
        "Si todavía haces las mismas tareas repetitivas todos los días — responder las mismas preguntas, confirmar citas manualmente, anotar pedidos en papel — estás perdiendo tiempo valioso. Automatizamos esos procesos para que sucedan solos.",
      includes: [
        "Respuestas automáticas a preguntas frecuentes",
        "Confirmación automática de citas y pedidos",
        "Notificaciones y recordatorios automáticos",
        "Integración entre tus herramientas digitales",
        "Flujos personalizados según tu negocio",
      ],
      ideal:
        "Negocios con procesos repetitivos que consumen tiempo: agendas, pedidos, confirmaciones, seguimientos.",
      whatsappMessage: "Hola, quiero automatizar procesos de mi negocio",
      priceFrom: "Desde $600.000 COP",
    },
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Landing pages",
    benefit: "Páginas que convierten visitas en clientes reales",
    description:
      "Páginas enfocadas en convertir — ideales para campañas, promociones o servicios específicos.",
    featured: false,
    modal: {
      headline: "¿Para qué sirve una landing page?",
      explanation:
        "Una landing page tiene un solo objetivo: convertir al visitante en cliente. A diferencia de una página web completa, está diseñada para que el usuario tome una acción concreta — llamarte, escribirte o comprar. Perfecta para promociones, servicios específicos o campañas publicitarias.",
      includes: [
        "Diseño enfocado en conversión",
        "Mensaje claro y directo al punto",
        "Formulario o botón de contacto destacado",
        "Optimizada para celular",
        "Lanzamiento rápido, ideal para campañas",
      ],
      ideal:
        "Negocios que hacen publicidad en redes sociales o Google y necesitan una página que convierta ese tráfico en clientes.",
      whatsappMessage: "Hola, necesito una landing page para mi negocio",
      priceFrom: "Desde $350.000 COP",
    },
  },
  {
    icon: <Grid2x2 className="w-7 h-7" />,
    title: "Catálogo digital",
    benefit:
      "Tus productos siempre actualizados, sin llamadas para preguntar precios",
    description:
      "Catálogo web para mostrar tus productos de forma clara, organizada y profesional.",
    featured: false,
    modal: {
      headline: "¿Para qué sirve un catálogo digital?",
      explanation:
        "¿Cuántas veces al día te preguntan '¿cuánto cuesta?' o '¿tienen tal producto?'. Con un catálogo digital tus clientes consultan precios, fotos y disponibilidad solos — sin necesidad de llamarte. Tú actualizas los productos cuando quieras desde el celular.",
      includes: [
        "Catálogo organizado por categorías",
        "Fotos y descripciones de productos",
        "Precios actualizables fácilmente",
        "Compatible con WhatsApp — comparten el enlace",
        "Fácil de usar sin conocimientos técnicos",
      ],
      ideal:
        "Tiendas, ferreterías, distribuidoras, restaurantes — negocios con muchos productos que reciben consultas repetitivas.",
      whatsappMessage:
        "Hola, quiero un catálogo digital para mostrar mis productos",
      priceFrom: "Desde $350.000 COP",
    },
  },
  {
    icon: <Instagram className="w-7 h-7" />,
    title: "Redes sociales",
    benefit:
      "Tus redes listas, conectadas y optimizadas para vender desde el primer día",
    description:
      "Dejamos tus perfiles configurados y optimizados para que generen resultados reales.",
    featured: false,
    modal: {
      headline: "¿Qué hacemos con tus redes sociales?",
      explanation:
        "Tener redes sociales no es suficiente — tienen que estar bien configuradas, con la información correcta y conectadas entre sí. Muchos negocios pierden clientes porque sus redes están incompletas, desactualizadas o no generan confianza. Te las dejamos listas para empezar a vender.",
      includes: [
        "Perfil optimizado con toda la información del negocio",
        "Bio y descripción atractiva y profesional",
        "Enlace en bio unificado con todos tus canales",
        "Foto de perfil y portada profesional",
        "Conexión entre Instagram, Facebook y WhatsApp",
      ],
      ideal:
        "Negocios que tienen redes sociales pero no las tienen bien configuradas o no generan resultados.",
      whatsappMessage: "Hola, quiero optimizar mis redes sociales",
      priceFrom: "Desde $200.000 COP",
    },
  },
  {
    icon: <Package className="w-7 h-7" />,
    title: "Digitalización completa",
    benefit:
      "Todo en uno — web, WhatsApp, automatización y estructura digital completa",
    description:
      "Transformamos completamente tu negocio con una solución integral lista para vender.",
    featured: true,
    modal: {
      headline: "¿Qué incluye la digitalización completa?",
      explanation:
        "Este es el servicio principal. No se trata solo de tener una página web o usar WhatsApp — se trata de construir un sistema digital completo que trabaje por ti. Tu negocio queda listo para captar clientes, responder rápido y operar con orden desde el primer día.",
      includes: [
        "Página web profesional completa",
        "WhatsApp Business configurado y optimizado",
        "Automatización básica de procesos",
        "Redes sociales conectadas y listas",
        "Estructura digital lista para crecer",
      ],
      ideal:
        "Negocios que quieren dar el salto digital de una sola vez, sin hacerlo por partes.",
      whatsappMessage: "Hola, quiero digitalizar completamente mi negocio",
      priceFrom: "Desde $1.500.000 COP",
    },
  },
];

type Service = (typeof services)[number];

export function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);

  const openService = (service: Service) => {
    setSelected(service);
    setOpen(true);
  };

  return (
    <section
      id="servicios"
      className="py-24 md:py-32 bg-background dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-(family-name:--font-syne)">
            ¿Qué podemos hacer por tu negocio?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className={cn(
                "group relative glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-300 overflow-hidden",
                service.featured && "border-primary/50 md:col-span-3",
              )}>
              {service.featured && (
                <span className="absolute top-4 right-4 text-xs bg-brand text-white px-3 py-1 rounded-full font-medium">
                  Más completo
                </span>
              )}

              <div
                className={cn(
                  "flex",
                  service.featured
                    ? "md:flex-row flex-col md:items-center gap-8"
                    : "flex-col",
                )}>
                <div className={service.featured ? "shrink-0" : undefined}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {service.benefit}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.description}
                  </p>
                  <p className="text-sm font-semibold text-primary mb-6">
                    {service.modal.priceFrom}
                  </p>
                </div>

                {service.featured && (
                  <ul className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3">
                    {service.modal.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-xs text-foreground/80">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="button"
                onClick={() => openService(service)}
                aria-label={`Ver más sobre ${service.title}`}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:text-primary focus-visible:after:ring-2 focus-visible:after:ring-ring">
                Ver más
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg p-0 gap-0 max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader className="flex-row items-center gap-3 px-6 py-5 pr-12 border-b border-border bg-primary/10">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                  {selected.icon}
                </div>
                <DialogTitle className="text-base font-bold text-foreground font-(family-name:--font-syne) leading-tight text-left">
                  {selected.modal.headline}
                </DialogTitle>
              </DialogHeader>

              <div className="px-6 py-5 space-y-5">
                <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                  {selected.modal.explanation}
                </DialogDescription>

                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    Qué incluye
                  </p>
                  <ul className="space-y-2">
                    {selected.modal.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted border border-border rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Ideal para
                  </p>
                  <p className="text-sm text-foreground/70">
                    {selected.modal.ideal}
                  </p>
                </div>

                <p className="text-sm font-semibold text-primary">
                  {selected.modal.priceFrom}
                </p>

                <a
                  href={waLink(selected.modal.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-colors">
                  Quiero esto para mi negocio
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
