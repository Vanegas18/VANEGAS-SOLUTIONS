const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

const badges = [
  "Respondo en menos de 1 hora",
  "Primera consulta gratis",
  "Resultados reales",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      <style>{`
        @keyframes hero-blob-1 {
          0%, 100% { transform: scale(1);   opacity: 0.3; }
          50%       { transform: scale(1.2); opacity: 0.5; }
        }
        @keyframes hero-blob-2 {
          0%, 100% { transform: scale(1.2); opacity: 0.4; }
          50%       { transform: scale(1);   opacity: 0.2; }
        }
        @keyframes hero-in {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(12px); }
        }
        .hero-h1     { animation: hero-in 0.6s ease both; }
        .hero-p      { animation: hero-in 0.6s ease 0.2s both; }
        .hero-cta    { animation: hero-in 0.6s ease 0.4s both; }
        .hero-tags   { animation: hero-in 0.6s ease 0.6s both; }
        .hero-scroll { animation: hero-in 0.6s ease 1.2s both; }
        .scroll-dot  { animation: scroll-dot 1.5s ease infinite; }
        .hero-blob-1 { animation: hero-blob-1 8s ease-in-out infinite; }
        .hero-blob-2 { animation: hero-blob-2 10s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-blob-1 absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="hero-blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="hero-h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight font-[family-name:var(--font-syne)] text-balance">
          Tu negocio pierde clientes hoy por no estar en internet 📲
        </h1>

        <p className="hero-p mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Te ayudo a digitalizarlo en menos de 7 días — más ventas, más orden, menos trabajo manual.
        </p>

        <div className="hero-cta mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all">
            {/* WhatsApp / MessageCircle SVG inline */}
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
            Quiero digitalizar mi negocio
          </a>
        </div>

        <div className="hero-tags mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {badges.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5">
              {/* CheckCircle SVG inline */}
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

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="scroll-dot w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
