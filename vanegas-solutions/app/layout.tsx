import type { Metadata, Viewport } from "next";
import { Outfit, Syne, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vanegassolutions.com"),
  title: "Vanegas Solutions | Digitaliza tu negocio",
  description:
    "Páginas web, WhatsApp automatizado y soluciones tecnológicas simples para negocios tradicionales. Vendé más con tecnología.",
  keywords: [
    "páginas web para negocios medellín",
    "whatsapp business automatizado colombia",
    "catálogo digital whatsapp",
    "digitalizar negocio pequeño",
    "página web para restaurante",
    "automatización pymes colombia",
  ],
  authors: [{ name: "Vanegas Solutions" }],
  openGraph: {
    title: "Vanegas Solutions | Digitaliza tu negocio",
    description:
      "Páginas web, WhatsApp automatizado y soluciones tecnológicas simples para negocios tradicionales. Vendé más con tecnología.",
    type: "website",
    locale: "es_CO",
    url: "https://vanegassolutions.com",
    siteName: "Vanegas Solutions",
    images: [
      {
        url: "/LOGO.png",
        width: 759,
        height: 759,
        alt: "Vanegas Solutions - Soluciones digitales para negocios",
      },
    ],
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
      className={cn(
        "bg-background",
        outfit.variable,
        syne.variable,
        "font-sans",
        geist.variable,
      )}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vanegas Solutions",
              description:
                "Desarrollo de software y soluciones digitales para pequeñas y medianas empresas en Medellín.",
              url: "https://vanegassolutions.com",
              areaServed: {
                "@type": "City",
                name: "Medellín",
              },
              sameAs: [
                "https://www.instagram.com/vanegas.solutions/",
                "https://www.facebook.com/profile.php?id=61572028376926",
                "https://www.tiktok.com/@vanegassolutions",
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
