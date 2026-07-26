import { ShieldCheck, Handshake, Lock, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Transparencia",
    description: "Cada condición se explica claramente antes de firmar.",
  },
  {
    icon: Handshake,
    title: "Profesionalismo",
    description: "Cada entrega documentada y respaldada por escrito.",
  },
  {
    icon: Lock,
    title: "Seguridad",
    description:
      "Tus datos se tratan conforme a la ley y nunca se comparten sin permiso.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento",
    description: "El soporte no termina el día de la entrega.",
  },
];

export function LegalCommitmentSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <style>{`
        @keyframes lc-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .lc-title  { animation: lc-in 0.6s ease both; }
        .lc-card-0 { animation: lc-in 0.5s ease 0.1s both; }
        .lc-card-1 { animation: lc-in 0.5s ease 0.2s both; }
        .lc-card-2 { animation: lc-in 0.5s ease 0.3s both; }
        .lc-card-3 { animation: lc-in 0.5s ease 0.4s both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lc-title text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-(family-name:--font-syne)">
            Nuestro compromiso
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`lc-card-${i} glass-card rounded-2xl p-6 md:p-8 flex items-start gap-4`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="text-blue-500" size={26} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
