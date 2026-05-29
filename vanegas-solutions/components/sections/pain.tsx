const painPoints = [
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Tu negocio no existe en Google",
    description: "Mientras duermes, tu competencia está captando los clientes que deberían ser tuyos",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: "Pierdes ventas por no responder a tiempo",
    description: "Cada mensaje sin respuesta es dinero que se va. Y pasa todo el día, todos los días",
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Todo depende de ti, y eso te tiene agotado",
    description: "Sin sistemas, sin orden — si tú no estás, el negocio se para",
  },
];

export function PainSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <style>{`
        @keyframes pain-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pain-title { animation: pain-in 0.6s ease both; }
        .pain-card-0 { animation: pain-in 0.5s ease 0.1s both; }
        .pain-card-1 { animation: pain-in 0.5s ease 0.25s both; }
        .pain-card-2 { animation: pain-in 0.5s ease 0.4s both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pain-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            ¿Te identificas con alguno de estos?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className={`pain-card-${index} glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-300`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                {point.svg}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}