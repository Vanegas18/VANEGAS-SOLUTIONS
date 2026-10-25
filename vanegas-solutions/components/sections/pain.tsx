import { Reveal } from "@/components/brand/reveal";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    title: "Tu negocio no existe en Google.",
    description: "Te buscan cerca y encuentran a otro.",
  },
  {
    title: "Pierdes ventas por no responder a tiempo.",
    description: "Un mensaje sin respuesta es un cliente que se va.",
  },
  {
    title: "Todo depende de ti, y eso te tiene agotado.",
    description: "Las tareas repetitivas se pueden automatizar.",
  },
];

export function PainSection() {
  return (
    <section aria-labelledby="problemas" className="mx-auto max-w-sitio px-5 py-18 md:px-10 md:pt-8 md:pb-28">
      <h2 id="problemas" className="titular mb-6 text-h1 md:mb-8">
        ¿Te identificas con alguno de estos?
      </h2>
      <ul className="grid gap-1.5 md:grid-cols-3">
        {painPoints.map((point, index) => (
          <li key={point.title} className={cn(index === 1 && "ml-6 md:ml-0")}>
            <Reveal delay={index * 70} className="h-full">
              <div className="flex h-full flex-col gap-2 border-2 border-borde-fuerte bg-superficie p-5 md:gap-4 md:p-7">
                <span className="hidden font-mono text-xs font-medium md:block">0{index + 1}</span>
                <strong className="text-[19px] leading-snug md:text-[22px]">{point.title}</strong>
                <span className="text-[15px] text-texto-suave md:text-body">{point.description}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
