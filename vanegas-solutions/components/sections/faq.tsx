import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Por dónde empezamos?",
    answer:
      "Escríbenos por WhatsApp, cuéntanos sobre tu negocio y te enviamos una propuesta concreta con alcance y precio.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende del servicio. Configuración de WhatsApp o redes: desde $200.000 COP. Landing page o catálogo web: desde $350.000 COP. Automatización: desde $600.000 COP. Página web completa: desde $650.000 COP. Digitalización completa: desde $1.500.000 COP. Hablamos y te damos el precio exacto según lo que necesites.",
  },
  {
    question: "¿Cuánto demora?",
    answer:
      "Depende del alcance del proyecto. Una vez definimos qué necesitas, te damos un tiempo estimado claro antes de empezar.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "Para nada. Nos encargamos de todo y te lo explicamos en lenguaje simple.",
  },
  {
    question: "¿Qué pasa si no quedo satisfecho?",
    answer:
      "Si algo no te convence, revisamos contigo qué cambiar y lo ajustamos sin costo adicional, dentro del alcance acordado en la propuesta. Además, cualquier error atribuible al desarrollo queda cubierto por nuestra garantía.",
  },
  {
    question: "¿Cómo funciona el pago?",
    answer:
      "Se solicita un anticipo del 50% para iniciar el proyecto, y el saldo restante se cancela según lo acordado o antes de la entrega final.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Te damos soporte inicial para resolver dudas. Si quieres que sigamos acompañándote con mejoras, actualizaciones y nuevas funcionalidades, existe el servicio de Fidelización mensual.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background dot-pattern">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-(family-name:--font-syne)">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="glass-card rounded-xl overflow-hidden">
              <AccordionTrigger className="px-6 py-5 text-base md:text-lg font-medium text-foreground text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}