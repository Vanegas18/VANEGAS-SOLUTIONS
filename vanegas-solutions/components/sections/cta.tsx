const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <style>{`
        @keyframes cta-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cta-h2   { animation: cta-in 0.6s ease both; }
        .cta-p    { animation: cta-in 0.6s ease 0.1s both; }
        .cta-btn  { animation: cta-in 0.6s ease 0.2s both; }
        .cta-tags { animation: cta-in 0.6s ease 0.3s both; }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="cta-h2 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-syne)]">
          Tu negocio puede estar digitalizado esta semana
        </h2>
        <p className="cta-p text-lg md:text-xl text-muted-foreground mb-10">
          Escríbeme hoy — en menos de 24 horas tienes una propuesta concreta y
          un plan claro.
        </p>
        <div className="cta-btn">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            Empezar ahora por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
