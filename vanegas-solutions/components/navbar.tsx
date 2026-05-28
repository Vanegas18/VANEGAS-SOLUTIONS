"use client";

import { useState, useEffect } from "react";

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
    <nav
      style={{ animation: "navSlideDown 0.5s ease forwards" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}>
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        .mobile-menu { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s ease; }
        .mobile-menu.open { grid-template-rows: 1fr; }
        .mobile-menu-inner { overflow: hidden; }
      `}</style>

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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Contactar
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu md:hidden ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner bg-background/95 backdrop-blur-xl border-b border-border">
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-3 rounded-lg transition-colors text-center">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
