"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

const navLinks = [
  { href: "#servicios", label: "Servicios" }, 
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-foreground font-(family-name:--font-syne)">
            Vanegas Solutions
          </a>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden md:block text-muted-foreground hover:text-foreground transition-colors text-sm">
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg">
              Contactar
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-foreground p-2"
              aria-label="Abrir menú">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300 border-b border-border bg-background"
        style={{ maxHeight: open ? "320px" : "0px" }}>
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors text-base">
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-center text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
}
