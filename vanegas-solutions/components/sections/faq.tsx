import { Plus } from "lucide-react";
import { Icon } from "@/components/brand/icon";
import { faqs } from "@/lib/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-titulo" className="scroll-mt-20 bg-superficie">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto flex max-w-sitio flex-wrap gap-x-16 gap-y-8 px-5 py-16 md:px-10 md:py-28">
        <div className="flex min-w-0 flex-[4_1_280px] flex-col gap-3">
          <h2 id="faq-titulo" className="titular text-h1">Preguntas frecuentes</h2>
          <p className="text-texto-suave">Toca una pregunta para ver la respuesta.</p>
        </div>
        <div className="min-w-0 flex-[8_1_520px] border-t-2 border-borde-fuerte">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group border-b border-borde last:border-b-2 last:border-borde-fuerte">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-semibold md:text-xl [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex size-9 shrink-0 items-center justify-center border-2 border-borde-fuerte transition-colors duration-(--dur-rapido) group-open:bg-texto group-open:text-fondo">
                  <Icon icon={Plus} className="size-4 transition-transform duration-(--dur-rapido) group-open:rotate-45" />
                </span>
              </summary>
              <p className="max-w-[40em] pb-5 text-texto-suave md:text-lg">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
