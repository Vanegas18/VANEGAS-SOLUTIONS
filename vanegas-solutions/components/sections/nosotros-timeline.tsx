import { MessageCircle, FileText, Wallet, Rocket } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Conversamos sobre tu negocio", description: "Sin presión, sin venta inmediata. Primero entendemos qué necesitas." },
  { icon: FileText, title: "Te enviamos una propuesta clara", description: "Alcance, tiempo y valor, todo por escrito antes de empezar." },
  { icon: Wallet, title: "Iniciamos con el 50% de anticipo", description: "Sin sorpresas ni cobros ocultos durante el desarrollo." },
  { icon: Rocket, title: "Entregamos y seguimos acompañando", description: "Capacitación incluida y soporte después de la entrega." },
];

export function NosotrosTimelineSection() {
  return (
    <section className="py-20 md:py-28 bg-background dot-pattern">
      <style>{`
        @keyframes nt-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .nt-title  { animation: nt-in 0.6s ease both; }
        .nt-step-0 { animation: nt-in 0.5s ease 0.05s both; }
        .nt-step-1 { animation: nt-in 0.5s ease 0.15s both; }
        .nt-step-2 { animation: nt-in 0.5s ease 0.25s both; }
        .nt-step-3 { animation: nt-in 0.5s ease 0.35s both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nt-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-(family-name:--font-syne)">
            Cómo trabajamos
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-6">
          {/* Línea conectora — solo desktop */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-border" style={{ marginInline: "12.5%" }} />

          {steps.map((step, i) => (
            <div key={step.title} className={`nt-step-${i} relative flex md:flex-col items-start md:items-center gap-4 md:text-center`}>
              <div className="relative z-10 w-14 h-14 rounded-full bg-primary/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                <step.icon className="text-blue-500" size={22} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}