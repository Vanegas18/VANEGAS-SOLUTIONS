export function NosotrosHeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden dot-pattern">
      <style>{`
        @keyframes nh-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nh-h1 { animation: nh-in 0.6s ease both; }
        .nh-p  { animation: nh-in 0.6s ease 0.15s both; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="nh-h1 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-(family-name:--font-syne) text-balance">
          Ayudamos a negocios tradicionales a digitalizarse sin complicaciones
        </h1>
        <p className="nh-p mt-6 text-lg md:text-xl text-muted-foreground text-pretty">
          Tecnología simple, clara y sin tecnicismos — pensada para negocios que quieren crecer, no para expertos en sistemas.
        </p>
      </div>
    </section>
  );
}