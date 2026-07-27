import { Check } from "lucide-react";

const reasons = [
  "No tienes que preocuparte por tu sitio — nosotros lo monitoreamos",
  "Detectamos problemas antes de que te cuesten clientes",
  "Tienes un aliado técnico permanente, no un proveedor que desaparece",
];

export function AcompanamientoWhySection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 font-(family-name:--font-syne)">
          Por qué contratar acompañamiento
        </h2>
        <ul className="space-y-4 text-left">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600/15 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={14} className="text-blue-500" strokeWidth={3} />
              </span>
              <span className="text-foreground/90">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
