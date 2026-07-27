import { CalendarClock, FileX, XCircle } from "lucide-react";

const steps = [
  {
    icon: CalendarClock,
    title: "Pago mensual fijo",
    description: "$250.000 COP, sin importar el proyecto.",
  },
  {
    icon: FileX,
    title: "Sin contratos forzosos",
    description: "No firmas permanencia de ningún tipo.",
  },
  {
    icon: XCircle,
    title: "Cancela cuando quieras",
    description: "Dejas de pagar el mes siguiente, sin penalidad.",
  },
];

export function AcompanamientoHowSection() {
  return (
    <section className="py-20 md:py-28 bg-background dot-pattern">
      <style>{`
        @keyframes aw-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .aw-title  { animation: aw-in 0.6s ease both; }
        .aw-card-0 { animation: aw-in 0.5s ease 0.1s both; }
        .aw-card-1 { animation: aw-in 0.5s ease 0.2s both; }
        .aw-card-2 { animation: aw-in 0.5s ease 0.3s both; }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aw-title text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-(family-name:--font-syne)">
            Cómo funciona
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`aw-card-${i} glass-card rounded-2xl p-6 text-center`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <s.icon className="text-blue-500" size={24} strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
