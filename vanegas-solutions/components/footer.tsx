import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site-config";
import { waLink } from "@/lib/whatsapp";

const company = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/acompanamiento", label: "Acompañamiento" },
  { href: "/#faq", label: "Preguntas frecuentes" },
];

const legal = [
  { href: "/legal/terminos-y-condiciones", label: "Términos y condiciones" },
  { href: "/legal/politica-de-privacidad", label: "Política de privacidad" },
  { href: "/legal/garantia-y-cancelacion", label: "Garantía y cancelación" },
  { href: "/legal/aviso-legal", label: "Aviso legal" },
];

const socials = [
  { href: siteConfig.socials.instagram, label: "Instagram" },
  { href: siteConfig.socials.facebook, label: "Facebook" },
  { href: siteConfig.socials.tiktok, label: "TikTok" },
];

const linkClass = "py-1 transition-colors duration-[var(--dur-instante)] hover:text-ladrillo";
const phone = `+${siteConfig.whatsappNumber.slice(0, 2)} ${siteConfig.whatsappNumber.slice(2, 5)} ${siteConfig.whatsappNumber.slice(5, 8)} ${siteConfig.whatsappNumber.slice(8)}`;

export function Footer() {
  return (
    <footer className="dark bg-fondo text-texto">
      <div className="mx-auto flex max-w-sitio flex-col gap-12 px-5 pt-16 pb-24 md:gap-14 md:px-10 md:pt-20 md:pb-10">
        <div className="flex flex-wrap justify-between gap-x-12 gap-y-10">
          <div className="flex min-w-0 flex-[2_1_280px] flex-col gap-4">
            <Logo tone="cal" className="block h-10 w-auto self-start" />
            <p className="max-w-[24em] text-texto-suave">
              Estudio de software en Medellín para negocios que venden cara a cara.
            </p>
          </div>
          <div className="grid min-w-0 flex-[3_1_520px] grid-cols-2 gap-8 text-[15px] md:grid-cols-[1fr_1.2fr_1.3fr]">
            <nav aria-label="Empresa" className="flex flex-col gap-1.5">
              <span className="etiqueta mb-2 text-texto-suave">Empresa</span>
              {company.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Legal" className="flex flex-col gap-1.5">
              <span className="etiqueta mb-2 text-texto-suave">Legal</span>
              {legal.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Contacto" className="col-span-2 flex flex-col gap-1.5 md:col-span-1">
              <span className="etiqueta mb-2 text-texto-suave">Contacto</span>
              <a href={waLink("Hola, tengo una consulta")} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp {phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
              <span className="flex flex-wrap gap-x-4">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {social.label}
                  </a>
                ))}
              </span>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-borde pt-6 font-mono text-xs text-texto-suave">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · NIT {siteConfig.nit}
          </span>
          <span>Medellín, Colombia</span>
        </div>
      </div>
    </footer>
  );
}
