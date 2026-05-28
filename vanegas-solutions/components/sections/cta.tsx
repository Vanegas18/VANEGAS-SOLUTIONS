const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

const guarantees = [
  "Sin contratos",
  "Sin permanencia",
  "Resultados garantizados",
];

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
          ¿Listo para digitalizar tu negocio?
        </h2>
        <p className="cta-p text-lg md:text-xl text-muted-foreground mb-10">
          Escribime hoy y en menos de 24 horas tenés una propuesta.
        </p>
        <div className="cta-btn">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all">
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
            Escríbeme por WhatsApp 💬
          </a>
        </div>
        <div className="cta-tags mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {guarantees.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
