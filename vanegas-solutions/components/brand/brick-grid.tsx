import { Reveal } from "@/components/brand/reveal";
import { cn } from "@/lib/utils";

export type BrickItem = { title: string; description: string };

type BrickGridProps = {
  items: BrickItem[];
  columns?: 2 | 3 | 4;
  tone?: "tinta" | "fondo" | "borde";
  numbered?: boolean;
  accentLast?: boolean;
};

const columnClass = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" };

const toneClass = {
  tinta: "bg-texto text-fondo",
  fondo: "bg-fondo text-texto",
  borde: "border-2 border-borde-fuerte text-texto",
};

export function BrickGrid({ items, columns = 2, tone = "fondo", numbered = false, accentLast = false }: BrickGridProps) {
  return (
    <ul className={cn("grid gap-1.5", columnClass[columns])}>
      {items.map((item, index) => {
        const accent = accentLast && index === items.length - 1;
        return (
          <li key={item.title}>
            <Reveal delay={(index % columns) * 70} className="h-full">
              <div className={cn("flex h-full flex-col gap-2 p-5 md:p-6", accent ? "bg-ladrillo text-sobre-ladrillo" : toneClass[tone])}>
                {numbered && <span className="font-mono text-xs font-medium">0{index + 1}</span>}
                <strong className="text-[17px] md:text-[19px]">{item.title}</strong>
                <span className={cn("text-[15px]", !accent && (tone === "tinta" ? "text-borde" : "text-texto-suave"))}>
                  {item.description}
                </span>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
