import { Check } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function AcompanamientoPriceSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 md:p-10 text-center border-blue-500/40">
          <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-blue-600/10 text-blue-500 font-medium mb-6">
            <Check size={14} strokeWidth={3} /> Sin permanencia · Cancela cuando
            quieras
          </span>

          <p className="text-4xl md:text-5xl font-bold text-foreground font-(family-name:--font-syne)">
            $250.000
            <span className="text-lg font-medium text-muted-foreground">
              {" "}
              COP/mes
            </span>
          </p>
          <p className="text-muted-foreground text-sm mt-3 mb-8">
            Un solo precio, sin importar el tamaño de tu proyecto
          </p>

          <a
            href={waLink(
              "Hola, quiero empezar con el acompañamiento continuo de Vanegas Solutions",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors">
            Empezar acompañamiento
          </a>
        </div>
      </div>
    </section>
  );
}
