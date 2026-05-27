"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useMotion } from "@/components/motion-provider";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

export function WhatsAppButton() {
  const motionLib = useMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const A = motionLib?.motion.a ?? "a";
  const motionProps = motionLib
    ? {
        initial: { scale: 0, opacity: 1 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", stiffness: 200 },
      }
    : {};

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
      {...motionProps}>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 group-hover:shadow-xl group-hover:shadow-[#25D366]/40 group-hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Hablemos!
      </span>
    </a>
  );
}
