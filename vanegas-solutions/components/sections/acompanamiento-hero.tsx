import { waLink } from "@/lib/whatsapp";

export function AcompanamientoHeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden dot-pattern">
      <style>{`
        @keyframes ah-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ah-h1  { animation: ah-in 0.6s ease both; }
        .ah-p   { animation: ah-in 0.6s ease 0.15s both; }
        .ah-cta { animation: ah-in 0.6s ease 0.3s both; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="ah-h1 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-(family-name:--font-syne) text-balance">
          Tu proyecto no termina el día de la entrega
        </h1>
        <p className="ah-p mt-6 text-lg md:text-xl text-muted-foreground text-pretty">
          Mantenemos tu solución actualizada, funcionando y creciendo contigo —
          por un precio fijo y sin sorpresas.
        </p>
        <div className="ah-cta mt-8">
          <a
            href={waLink(
              "Hola, quiero mas información sobre la Fidelización y acompañamiento continuo de Vanegas Solutions",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all">
            Quiero acompañamiento continuo 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
