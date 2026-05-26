"use client";

import { useState, useEffect } from "react";
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
  const [MotionComponents, setMotionComponents] = useState<{
    nav: React.ElementType;
    div: React.ElementType;
    AnimatePresence: React.ElementType;
  } | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion carga después del primer render
  useEffect(() => {
    import("framer-motion").then((mod) => {
      setMotionComponents({
        nav: mod.motion.nav,
        div: mod.motion.div,
        AnimatePresence: mod.AnimatePresence,
      });
    });
  }, []);

  const Nav = MotionComponents?.nav ?? "nav";
  const MotionDiv = MotionComponents?.div ?? "div";
  const AnimatePresence = MotionComponents?.AnimatePresence;

  const navProps = MotionComponents
    ? { initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.5 } }
    : {};

  const mobileMenuProps = MotionComponents
    ? {
        initial: { opacity: 1, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 1, height: 0 },
      }
    : {};

  const mobileMenu = isMobileMenuOpen && (
    <MotionDiv
      {...mobileMenuProps}
      className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
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
    </MotionDiv>
  );

  return (
    <Nav
      {...navProps}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-foreground font-[family-name:var(--font-syne)]">
            Vanegas Solutions
          </a>

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

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Con AnimatePresence si Framer cargó, sin ella si no */}
      {AnimatePresence ? (
        <AnimatePresence>{mobileMenu}</AnimatePresence>
      ) : (
        mobileMenu
      )}
    </Nav>
  );
}
