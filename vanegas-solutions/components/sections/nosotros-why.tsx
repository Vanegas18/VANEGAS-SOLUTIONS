import { Sparkles, MessagesSquare, LifeBuoy, Unlock } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Desarrollo completamente personalizado",
    description:
      "Nada de plantillas genéricas; cada solución se construye para tu negocio.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicación clara, sin tecnicismos",
    description: "Te explicamos todo en lenguaje simple, sin jerga técnica.",
  },
  {
    icon: LifeBuoy,
    title: "Acompañamiento después de la entrega",
    description: "La relación no termina cuando el proyecto se publica.",
  },
  {
    icon: Unlock,
    title: "Sin contratos de permanencia",
    description: "Trabajas con nosotros porque quieres, no porque estás atado.",
  },
];

export function NosotrosWhySection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <style>{`
        @keyframes nw-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .nw-title  { animation: nw-in 0.6s ease both; }
        .nw-card-0 { animation: nw-in 0.5s ease 0.1s both; }
        .nw-card-1 { animation: nw-in 0.5s ease 0.2s both; }
        .nw-card-2 { animation: nw-in 0.5s ease 0.3s both; }
        .nw-card-3 { animation: nw-in 0.5s ease 0.4s both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nw-title text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-(family-name:--font-syne)">
            Por qué elegirnos
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`nw-card-${i} glass-card glass-card-hover rounded-2xl p-6 md:p-8 flex items-start gap-4 transition-all duration-300`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="text-blue-500" size={24} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {r.title}
                </h3>
                <p className="text-muted-foreground text-sm">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
