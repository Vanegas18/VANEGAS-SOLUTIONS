type SectionHeaderProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ id, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="flex flex-col gap-3 md:max-w-3xl">
      {eyebrow && <span className="etiqueta">{eyebrow}</span>}
      <h2 id={id} className="titular text-h1">
        {title}
      </h2>
      {description && <p className="text-texto-suave md:text-lg">{description}</p>}
    </header>
  );
}
