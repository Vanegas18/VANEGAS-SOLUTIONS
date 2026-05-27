"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";
const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // navbar-animate: desliza desde arriba vía CSS keyframe (slideDown en globals.css)
    <nav
      className={`navbar-animate fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 -webkit-backdrop-filter: blur(20px); backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-foreground font-(family-name:--font-syne)">
            Vanegas Solutions
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — animado con max-height CSS transition (sin JS de altura) */}
      <div
        className={`mobile-menu md:hidden bg-background/95 [backdrop-filter:blur(20px)] [-webkit-backdrop-filter:blur(20px)] border-b border-border ${
          isMobileMenuOpen ? "open" : ""
        }`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors py-2">
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Contactar
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
