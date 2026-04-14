"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende del proyecto. Los paquetes básicos arrancan desde $399.000 COP. Hablamos y te doy un precio justo según lo que necesitás.",
  },
  {
    question: "¿Cuánto demora?",
    answer:
      "Una página web básica lista en 5-7 días. Proyectos más grandes en 2-3 semanas.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer: "Para nada. Yo me encargo de todo y te explico en lenguaje simple.",
  },
  {
    question: "¿Qué pasa si no quedo satisfecho?",
    answer: "Sin contratos ni permanencia. Si no quedás conforme, no pagás.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="faq"
      className="py-24 md:py-32 bg-background dot-pattern">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
