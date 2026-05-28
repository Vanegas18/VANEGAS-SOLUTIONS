const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      <style>{`
        @keyframes hero-in {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-h1  { animation: hero-in 0.6s ease both; }
        .hero-p   { animation: hero-in 0.6s ease 0.2s both; }
        .hero-cta { animation: hero-in 0.6s ease 0.4s both; }
      `}</style>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="hero-h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight font-[family-name:var(--font-syne)] text-balance">
          Digitaliza tu negocio y vende más 🚀
        </h1>
        <p className="hero-p mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Páginas web, WhatsApp automatizado y soluciones simples para negocios.
        </p>
        <div className="hero-cta mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg px-8 py-4 rounded-xl">
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}