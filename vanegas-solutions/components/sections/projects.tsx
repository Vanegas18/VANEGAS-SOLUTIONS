import Image from "next/image";

const ArrowSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const projects = [
  {
    name: "BuildMart",
    category: "Constructora",
    image: "/images/buildmart.png",
    description:
      "Sistema web completo con catálogo, carrito, pagos y gestión administrativa",
    result:
      "Ahora controla todo su negocio desde una sola plataforma, sin depender de terceros",
    link: "https://build-two-sage.vercel.app/",
  },
  {
    name: "SaborExpress",
    category: "Restaurante",
    image: "/images/saborexpress.png",
    description:
      "Landing page con menú digital y sistema de reservas via WhatsApp",
    result:
      "Ahora sus clientes pueden reservar y ordenar desde su celular, sin esperas ni llamadas perdidas",
    link: "https://restaurant-landing-beta.vercel.app/",
  },
  {
    name: "Lumen",
    category: "Tienda de ropa",
    image: "/images/lumen.png",
    description:
      "Landing page con catálogo de productos y sistema de compra via WhatsApp",
    result:
      "Ahora sus clientes pueden comprar desde su celular, sin esperas ni llamadas perdidas",
    link: "https://store-landing-rouge.vercel.app/",
  },
  {
    name: "Maison Noir",
    category: "Perfumería",
    image: "/images/maison.png",
    description:
      "Catalogo digital con sistema de compra via WhatsApp Y panel administrativo para gestionar productos",
    result:
      "Ahora sus clientes pueden comprar desde su celular, sin esperas ni llamadas perdidas y el negocio puede gestionar su catálogo sin depender de terceros",
    link: "https://perfume-catalog-chi.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-24 md:py-32 bg-background dot-pattern">
      <style>{`
        @keyframes proj-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proj-title  { animation: proj-in 0.6s ease both; }
        .proj-card-0 { animation: proj-in 0.5s ease 0.1s both; }
        .proj-card-1 { animation: proj-in 0.5s ease 0.25s both; }
        .proj-card-2 { animation: proj-in 0.5s ease 0.4s both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="proj-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-syne)]">
            Así podría verse tu negocio
          </h2>
          <p className="text-muted-foreground text-lg">
            Ejemplos reales de lo que puedo construir para tu negocio.
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            projects.length === 1
              ? "grid-cols-1 max-w-sm mx-auto"
              : projects.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
                : "grid-cols-1 md:grid-cols-3"
          }`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`proj-card-${index} group glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300`}>
              {/* Browser bar */}
              <div className="bg-[#1a1a24] px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                    {project.name.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>
              </div>

              {/* Preview */}
              {project.image && (
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Vista previa de ${project.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {project.description}
                </p>
                <p className="text-sm text-primary font-medium mb-4">
                  → {project.result}
                </p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    Ver proyecto <ArrowSVG />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
