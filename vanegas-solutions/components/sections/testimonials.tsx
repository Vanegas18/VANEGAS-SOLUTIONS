const testimonials = [
  {
    initials: "CR",
    name: "Carlos R.",
    business: "BuildMart, Materiales de Construcción",
    quote: "En 5 días tenía mi página lista. La primera semana ya recibí 3 consultas nuevas que antes se perdían porque no me encontraban..",
  },
  {
    initials: "FV",
    name: "Felipe V.",
    business: "Barberia Style",
    quote: "Antes perdía reservas por no ver los mensajes a tiempo. Ahora WhatsApp trabaja solo y mi agenda está llena.",
  },
];

const StarSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-background">
      <style>{`
        @keyframes test-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .test-title  { animation: test-in 0.6s ease both; }
        .test-card-0 { animation: test-in 0.5s ease 0.1s both; }
        .test-card-1 { animation: test-in 0.5s ease 0.25s both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="test-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            Lo que dicen los negocios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`test-card-${index} glass-card rounded-2xl p-6 md:p-8`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.business}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarSVG key={i} />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}