const steps = [
  {
    number: "01",
    title: "Me cuentas tu negocio",
    description: "Hablamos por WhatsApp: qué haces, qué necesitas y qué problema quieres resolver.",
  },
  {
    number: "02",
    title: "Te armo una propuesta clara",
    description: "Recibes alcance, funcionalidades y valor por escrito. Sin letra pequeña.",
  },
  {
    number: "03",
    title: "Aprobás y arrancamos",
    description: "Con el anticipo confirmado, empiezo a construir tu solución.",
  },
  {
    number: "04",
    title: "Entrega y acompañamiento",
    description: "Recibes tu proyecto funcionando, con capacitación y soporte inicial.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <style>{`
        @keyframes proc-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proc-title  { animation: proc-in 0.6s ease both; }
        .proc-step-0 { animation: proc-in 0.5s ease 0.1s both; }
        .proc-step-1 { animation: proc-in 0.5s ease 0.2s both; }
        .proc-step-2 { animation: proc-in 0.5s ease 0.3s both; }
        .proc-step-3 { animation: proc-in 0.5s ease 0.4s both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="proc-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            Así trabajamos juntos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`proc-step-${index} glass-card glass-card-hover rounded-2xl p-6 md:p-8 relative transition-all duration-300`}>
              <span className="text-4xl font-bold text-primary/20 font-[family-name:var(--font-syne)] mb-4 block">
                {step.number}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}