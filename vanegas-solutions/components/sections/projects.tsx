import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/brand/icon";
import { Reveal } from "@/components/brand/reveal";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className="scroll-mt-20 bg-superficie-alt">
      <div className="mx-auto flex max-w-sitio flex-col gap-8 py-16 md:gap-12 md:px-10 md:py-28">
        <header className="flex flex-col gap-3 px-5 md:max-w-3xl md:px-0">
          <span className="etiqueta">Proyectos</span>
          <h2 id="proyectos-titulo" className="titular text-h1">Así podría verse tu negocio</h2>
          <p className="text-texto-suave md:text-lg">
            Proyectos que puedes abrir y probar ahora mismo desde tu celular.
          </p>
        </header>

        <ul className="flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {projects.map((project, index) => (
            <li key={project.name} className="w-[82%] shrink-0 snap-start md:w-auto">
              <Reveal delay={(index % 2) * 70} className="h-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-3 outline-none">
                  <span className="relative block aspect-[4/3] overflow-hidden border-2 border-borde-fuerte bg-fondo transition-[transform,box-shadow] duration-[var(--dur-rapido)] ease-asentar group-hover:shadow-[6px_6px_0_var(--ladrillo)] group-focus-visible:shadow-[6px_6px_0_var(--ladrillo)] motion-safe:group-hover:-translate-x-1.5 motion-safe:group-hover:-translate-y-1.5 md:aspect-[2/1]">
                    <Image
                      src={project.image}
                      alt={`Página de ${project.name}`}
                      fill
                      sizes="(min-width: 768px) 600px, 82vw"
                      className="object-cover object-left-top"
                    />
                  </span>
                  <span className="etiqueta mt-2">
                    {project.badge} · {project.category}
                  </span>
                  <span className="titular text-h2">{project.name}</span>
                  <span className="text-[15px] text-texto-suave md:text-body">{project.description}</span>
                  <span className="inline-flex items-center gap-1.5 self-start font-semibold underline decoration-2 underline-offset-[6px] group-hover:text-ladrillo-hover">
                    Ver demo en vivo
                    <Icon icon={ArrowUpRight} className="size-4" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="px-5 font-mono text-xs text-texto-suave md:hidden">Desliza para ver los {projects.length} proyectos</p>
      </div>
    </section>
  );
}
