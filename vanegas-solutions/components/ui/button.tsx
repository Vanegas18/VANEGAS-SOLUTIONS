import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2.5 rounded-md border-2 border-transparent font-semibold whitespace-nowrap transition-[background-color,color,border-color,transform] duration-[var(--dur-instante)] ease-asentar outline-none select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-ladrillo-hover",
        tinta: "bg-texto text-fondo hover:bg-texto/90",
        cal: "bg-superficie text-texto hover:bg-fondo",
        outline: "border-borde-fuerte bg-transparent text-foreground hover:bg-texto hover:text-fondo",
        "outline-cal": "border-fondo bg-transparent text-fondo hover:bg-fondo hover:text-texto",
        secondary: "bg-secondary text-secondary-foreground hover:bg-borde",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive: "bg-destructive text-sobre-ladrillo hover:bg-destructive/90",
        link: "border-0 px-0 text-foreground underline decoration-2 underline-offset-[6px] hover:text-ladrillo-hover",
      },
      size: {
        default: "min-h-11 px-5 text-[15px]",
        sm: "min-h-10 px-4 text-sm",
        lg: "min-h-13 px-6 text-[17px]",
        xl: "min-h-14 px-7 text-lg",
        icon: "size-11",
      },
    },
    compoundVariants: [{ variant: "link", className: "min-h-11 px-0" }],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
