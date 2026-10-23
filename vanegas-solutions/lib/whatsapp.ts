import { siteConfig } from "@/lib/site-config";

export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
