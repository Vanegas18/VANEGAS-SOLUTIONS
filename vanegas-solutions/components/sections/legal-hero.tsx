export function LegalHeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden dot-pattern">
      <style>{`
        @keyframes legal-hero-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .legal-hero-h1  { animation: legal-hero-in 0.6s ease both; }
        .legal-hero-p   { animation: legal-hero-in 0.6s ease 0.15s both; }
        .legal-hero-cta { animation: legal-hero-in 0.6s ease 0.3s both; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="legal-hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-(family-name:--font-syne) text-balance">
          Transparencia desde el primer contacto
        </h1>
        <p className="legal-hero-p mt-6 text-lg md:text-xl text-muted-foreground text-pretty">
          Toda nuestra relación comercial queda por escrito — garantías, pagos y
          datos protegidos, sin sorpresas.
        </p>
        <div className="legal-hero-cta mt-8">
          <a
            href="#centro-legal"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-colors">
            Ver documentos
          </a>
        </div>
      </div>
    </section>
  );
}
