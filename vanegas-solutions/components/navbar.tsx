"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Icon } from "@/components/brand/icon";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const mainLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#productos", label: "Productos" },
  { href: "/acompanamiento", label: "Acompañamiento" },
];

const mobileExtraLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#faq", label: "Preguntas frecuentes" },
];

const contactHref = waLink("Hola, quiero saber más sobre Vanegas Solutions");

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => !href.startsWith("/#") && pathname === href;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-borde bg-fondo">
      <div className="mx-auto flex h-17 max-w-sitio items-center justify-between gap-6 px-5 md:h-19 md:px-10">
        <Link href="/" aria-label="Vanegas Solutions, inicio" className="shrink-0">
          <Logo animated={pathname === "/"} className="block h-8 w-auto md:h-10" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "text-[15px] font-medium underline-offset-[6px] decoration-2 transition-colors duration-[var(--dur-instante)] hover:text-ladrillo-hover",
                isActive(link.href) && "underline decoration-ladrillo",
              )}>
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline">
            <a href={contactHref} target="_blank" rel="noopener noreferrer">
              Escríbenos
            </a>
          </Button>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil">
          <Icon icon={open ? X : Menu} />
        </Button>
      </div>

      <div
        id="menu-movil"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-[69px] bottom-0 flex flex-col bg-fondo px-5 pt-8 pb-10 transition-[opacity,transform] duration-[var(--dur-base)] ease-asentar md:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none opacity-0 motion-safe:-translate-y-2",
        )}>
        <nav aria-label="Menú móvil" className="flex flex-col border-t-2 border-borde-fuerte">
          {[...mainLinks, ...mobileExtraLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "titular border-b border-borde py-4 text-h2",
                isActive(link.href) && "text-ladrillo",
              )}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="lg" className="mt-auto w-full">
          <a href={contactHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <Icon icon={MessageCircle} />
            Escríbenos por WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}
