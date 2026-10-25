import { cn } from "@/lib/utils";

type HiladaProps = {
  bricks?: number;
  accentAt?: number | null;
  tone?: "tinta" | "cal";
  height?: "sm" | "md";
  className?: string;
};

export function Hilada({
  bricks = 8,
  accentAt = null,
  tone = "tinta",
  height = "md",
  className,
}: HiladaProps) {
  return (
    <div aria-hidden="true" className={cn("flex w-full gap-1 overflow-hidden", className)}>
      {Array.from({ length: bricks }, (_, index) => (
        <span
          key={index}
          className={cn(
            "flex-1",
            height === "sm" ? "h-3" : "h-4",
            index === accentAt ? "bg-ladrillo" : tone === "tinta" ? "bg-texto" : "bg-fondo",
          )}
        />
      ))}
    </div>
  );
}
