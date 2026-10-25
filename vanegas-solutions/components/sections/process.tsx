import { Reveal } from "@/components/brand/reveal";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Hablamos", description: "Nos cuentas qué vende tu negocio y qué necesitas." },
  { title: "Proponemos", description: "Te enviamos una propuesta por escrito, con alcance y precio." },
  { title: "Construimos", description: "Te mostramos avances mientras avanza el proyecto." },
  { title: "Publicamos", description: "Tu negocio queda en línea y te enseñamos a usarlo." },
];

export function ProcessSection() {
  return (
    <section aria-labelledby="proceso" className="mx-auto max-w-sitio px-5 py-16 md:px-10 md:py-28">
      <div className="flex flex-wrap items-center gap-x-16 gap-y-8">
        <div className="flex min-w-0 flex-[4_1_300px] flex-col gap-4">
          <span className="etiqueta">Cómo trabajamos</span>
          <h2 id="proceso" className="titular text-h1">Cuatro pasos, sin enredos.</h2>
          <p className="max-w-[26em] md:text-lg">
            Hablas directo con quien construye tu proyecto. Ves avances y apruebas antes de publicar.
          </p>
        </div>
        <ol className="grid min-w-0 flex-[8_1_520px] auto-rows-fr gap-1.5 md:grid-cols-2 md:pr-12">
          {steps.map((step, index) => {
            const last = index === steps.length - 1;
            return (
              <li key={step.title} className={cn("h-full", index >= 2 && "md:translate-x-12")}>
                <Reveal delay={index * 70} className="h-full">
                  <div
                    className={cn(
                      "flex h-full flex-col gap-2 p-5 md:p-6",
                      last ? "bg-ladrillo text-sobre-ladrillo" : "bg-texto text-fondo",
                    )}>
                    <span className="font-mono text-xs font-medium">0{index + 1}</span>
                    <strong className="text-[19px] md:text-[22px]">{step.title}</strong>
                    <span className={cn("text-[15px]", !last && "text-borde")}>{step.description}</span>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
