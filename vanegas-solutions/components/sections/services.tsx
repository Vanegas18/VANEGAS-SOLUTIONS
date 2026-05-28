"use client";

import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

const services = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
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
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
    title: "WhatsApp automatizado",
    benefit: "Respondé a clientes automáticamente y no pierdas ventas",
    description: "Respuestas inteligentes que trabajan mientras dormís.",
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
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        {/* removed invalid <bolt /> element */}
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
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

export function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section
      id="servicios"
      className="py-24 md:py-32 bg-background dot-pattern">
      <style>{`
        @keyframes svc-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-title  { animation: svc-in 0.6s ease both; }
        .svc-card-0 { animation: svc-in 0.5s ease 0.1s both; }
        .svc-card-1 { animation: svc-in 0.5s ease 0.25s both; }
        .svc-card-2 { animation: svc-in 0.5s ease 0.4s both; }

        /* Modal */
        .svc-modal-backdrop {
          position: fixed; inset: 0; z-index: 50;
          background: rgba(0,0,0,0.7);
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
        }
        .svc-modal {
          background: #0f0f17;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          width: 100%; max-width: 512px;
          max-height: 90vh; overflow-y: auto;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="svc-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            ¿Qué puedo hacer por tu negocio?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelected(service)}
              className={`svc-card-${index} group glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {service.svg}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal CSS puro — sin Radix/Dialog */}
      {selected && (
        <div className="svc-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="svc-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-blue-600/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  {selected.svg}
                </div>
                <p className="text-base font-bold text-white font-[family-name:var(--font-syne)] leading-tight">
                  {selected.modal.headline}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-white/50 hover:text-white ml-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-5">
              <p className="text-gray-400 text-sm leading-relaxed">
                {selected.modal.explanation}
              </p>

              <div>
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-3">
                  Qué incluye
                </p>
                <ul className="space-y-2">
                  {selected.modal.includes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-white/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-0.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Ideal para
                </p>
                <p className="text-sm text-white/70">{selected.modal.ideal}</p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors">
                Quiero esto para mi negocio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
