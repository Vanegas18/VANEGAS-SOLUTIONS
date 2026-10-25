import { Hilada } from "@/components/brand/hilada";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <>
      <section className="mx-auto flex max-w-sitio flex-col gap-5 px-5 pt-14 pb-14 md:gap-6 md:px-10 md:pt-24 md:pb-20">
        <span className="etiqueta">{eyebrow}</span>
        <h1 className="titular max-w-[14em] text-display-l">{title}</h1>
        {description && <p className="max-w-[36em] text-[17px] leading-relaxed md:text-lead">{description}</p>}
        {children && <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">{children}</div>}
      </section>
      <Hilada />
    </>
  );
}
