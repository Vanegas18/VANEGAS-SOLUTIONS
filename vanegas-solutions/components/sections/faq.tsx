"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Por dónde empezamos?",
    answer:
      "Escríbeme por WhatsApp, me cuentas tu negocio y en menos de 24 horas te mando una propuesta concreta.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende del proyecto. Los paquetes básicos arrancan desde $299.000 COP. Hablamos y te doy un precio justo según lo que necesitas.",
  },
  {
    question: "¿Cuánto demora?",
    answer:
      "Depende del alcance del proyecto. Una vez definimos qué necesitas, te doy un tiempo estimado claro antes de empezar.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer: "Para nada. Yo me encargo de todo y te explico en lenguaje simple.",
  },
  {
    question: "¿Qué pasa si no quedo satisfecho?",
    answer:
      "No hay contratos de permanencia — si en el futuro no quieres seguir con el servicio de Fidelización, no hay problema. Además, cualquier error atribuible al desarrollo queda cubierto por garantía.",
  },
  {
    question: "¿Cómo funciona el pago?",
    answer:
      "Se solicita un anticipo del 50% para iniciar el proyecto, y el saldo restante se cancela según lo acordado o antes de la entrega final.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Te doy soporte inicial para resolver dudas. Si quieres que siga acompañándote con mejoras, actualizaciones y nuevas funcionalidades, existe el servicio de Fidelización mensual.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background dot-pattern">
      <style>{`
        @keyframes faq-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-title { animation: faq-in 0.6s ease both; }
        .faq-list  { animation: faq-in 0.6s ease 0.2s both; }
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }
        .faq-answer.open { grid-template-rows: 1fr; }
        .faq-answer-inner { overflow: hidden; }
      `}</style>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="faq-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-foreground font-medium text-base md:text-lg">
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform:
                      open === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                  }}>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`faq-answer ${open === index ? "open" : ""}`}>
                <div className="faq-answer-inner">
                  <p className="px-6 pb-5 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
