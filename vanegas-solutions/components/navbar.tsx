"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/legal", label: "Legal" },
  { href: "/acompanamiento", label: "Acompañamiento" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    !href.startsWith("/#") && pathname === href;

  // Bloquea el scroll del body mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-border bg-background/80 backdrop-blur-xl px-4 md:px-6 py-2.5 md:py-3 shadow-lg shadow-black/20">
          <Link
            href="/"
            className="text-base md:text-lg font-bold text-foreground font-(family-name:--font-syne) shrink-0">
            Vanegas Solutions
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-blue-500 font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}>
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={waLink("Hola, quiero saber más sobre Vanegas Solutions")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors shrink-0">
            Contactar
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-1.5 shrink-0"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Overlay full-screen mobile */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6 dot-pattern px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${index * 0.05}s` : "0s" }}
              className={`text-2xl font-semibold tracking-wide text-center transition-all duration-300 ${
                isActive(link.href) ? "text-blue-500" : "text-foreground"
              } ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {link.label}
            </Link>
          ))}
          <a
            href={waLink("Hola, quiero saber más sobre Vanegas Solutions")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 bg-primary hover:bg-primary/90 text-white text-base font-medium px-8 py-3 rounded-full transition-colors">
            Contactar
          </a>
        </div>
      </div>
    </>
  );
}