import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const WHATSAPP_URL = "https://wa.me/message/KAQPPGZPVYOVK1";
const INSTAGRAM_URL = "https://www.instagram.com/vanegas.solutions/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61572028376926";
const TIKTOK_URL = "https://www.tiktok.com/@felipecatano0";
const EMAIL = "mailto:contacto@vanegassolutions.com";

const socials = [
  {
    href: INSTAGRAM_URL,
    icon: FaInstagram,
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    href: WHATSAPP_URL,
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "hover:text-green-400",
  },
  {
    href: FACEBOOK_URL,
    icon: FaFacebook,
    label: "Facebook",
    color: "hover:text-blue-400",
  },
  {
    href: TIKTOK_URL,
    icon: FaTiktok,
    label: "TikTok",
    color: "hover:text-white",
  },
  { href: EMAIL, icon: MdEmail, label: "Correo", color: "hover:text-sky-400" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-foreground font-[family-name:var(--font-syne)]">
              Vanegas Solutions
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Digitalizando negocios en Medellín 🚀
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-colors ${color}`}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Juan Jose Vanegas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
