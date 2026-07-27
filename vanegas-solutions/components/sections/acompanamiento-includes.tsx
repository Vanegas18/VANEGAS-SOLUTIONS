import {
  Wrench,
  Sparkles,
  Gauge,
  PlusCircle,
  FileEdit,
  Lightbulb,
} from "lucide-react";

const includes = [
  {
    icon: Wrench,
    title: "Corrección de errores",
    description:
      "Cualquier falla que aparezca, la resolvemos sin costo adicional.",
  },
  {
    icon: Sparkles,
    title: "Mejoras continuas",
    description:
      "Ajustes y optimizaciones que tu proyecto necesite con el tiempo.",
  },
  {
    icon: Gauge,
    title: "Optimización de rendimiento",
    description: "Revisamos que tu sitio siga siendo rápido y eficiente.",
  },
  {
    icon: PlusCircle,
    title: "Nuevas funcionalidades",
    description: "Sumamos funciones nuevas cuando tu negocio lo requiera.",
  },
  {
    icon: FileEdit,
    title: "Actualización de contenido",
    description: "Cambios de textos, imágenes o productos cuando lo necesites.",
  },
  {
    icon: Lightbulb,
    title: "Asesoría tecnológica",
    description: "Resolvemos tus dudas y te guiamos en decisiones digitales.",
  },
];

export function AcompanamientoIncludesSection() {
  return (
    <section className="py-20 md:py-28 bg-background dot-pattern">
      <style>{`
        @keyframes ai-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ai-title  { animation: ai-in 0.6s ease both; }
        .ai-card-0 { animation: ai-in 0.5s ease 0.05s both; }
        .ai-card-1 { animation: ai-in 0.5s ease 0.1s both; }
        .ai-card-2 { animation: ai-in 0.5s ease 0.15s both; }
        .ai-card-3 { animation: ai-in 0.5s ease 0.2s both; }
        .ai-card-4 { animation: ai-in 0.5s ease 0.25s both; }
        .ai-card-5 { animation: ai-in 0.5s ease 0.3s both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ai-title text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-(family-name:--font-syne)">
            Qué incluye
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {includes.map((item, i) => (
            <div
              key={item.title}
              className={`ai-card-${i} glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300`}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon
                  className="text-blue-500"
                  size={22}
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
