import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

// Quitamos Geist Mono — no se usa en el sitio y suma ~40kb al bundle
// display: "swap" en lugar de "optional" — evita FOIT (flash invisible)
// en Safari que a veces ignora "optional" y no muestra el texto nunca
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  // Solo los weights que realmente usás
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vanegas Solutions | Digitaliza tu negocio",
  description:
    "Páginas web, WhatsApp automatizado y soluciones tecnológicas simples para negocios tradicionales. Vendé más con tecnología.",
  keywords: [
    "páginas web medellín",
    "whatsapp automatizado",
    "digitalización negocios",
    "tecnología para negocios",
    "vanegas solutions",
  ],
  authors: [{ name: "Vanegas Solutions" }],
  openGraph: {
    title: "Vanegas Solutions | Digitaliza tu negocio",
    description:
      "Páginas web, WhatsApp automatizado y soluciones tecnológicas simples para negocios tradicionales. Vendé más con tecnología.",
    type: "website",
    locale: "es_CO",
  },
  other: {
    "color-scheme": "dark",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      style={{ backgroundColor: "#0A0A0F" }}
      className={cn(
        "bg-background",
        outfit.variable,
        syne.variable,
        "font-sans",
      )}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}