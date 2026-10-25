import { MessageCircle } from "lucide-react";
import { Icon } from "@/components/brand/icon";
import { waLink } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
};

export function WhatsAppButton({ message = "Hola, tengo una consulta" }: WhatsAppButtonProps) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center border-2 border-texto bg-superficie text-texto transition-[transform,box-shadow] duration-[var(--dur-rapido)] ease-asentar hover:shadow-[4px_4px_0_var(--ladrillo)] focus-visible:shadow-[4px_4px_0_var(--ladrillo)] motion-safe:animate-aparecer motion-safe:[animation-delay:1s] motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-x-1 motion-safe:focus-visible:-translate-y-1 md:right-6 md:bottom-6 md:size-16">
      <Icon icon={MessageCircle} className="size-7" />
    </a>
  );
}
