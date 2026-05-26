import type { Metadata, Viewport } from "next";
import { Outfit, Syne, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  preload: true,
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
        geist.variable,
      )}>
      <body className="font-sans antialiased">
        {children}
        {<Analytics />}
      </body>
    </html>
  );
}
