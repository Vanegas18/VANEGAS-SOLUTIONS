import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "páginas web para negocios medellín",
    "whatsapp business automatizado colombia",
    "catálogo digital whatsapp",
    "digitalizar negocio pequeño",
    "página web para restaurante",
    "automatización pymes colombia",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/LOGO.png`,
  image: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  taxID: siteConfig.nit,
  email: siteConfig.email,
  telephone: `+${siteConfig.whatsappNumber}`,
  areaServed: { "@type": "City", name: "Medellín" },
  sameAs: Object.values(siteConfig.socials),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={cn("bg-background", outfit.variable, syne.variable)}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
