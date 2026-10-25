import type { LucideIcon, LucideProps } from "lucide-react";

type IconProps = LucideProps & { icon: LucideIcon };

export function Icon({ icon: IconComponent, ...props }: IconProps) {
  return (
    <IconComponent
      strokeWidth={1.75}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      {...props}
    />
  );
}
