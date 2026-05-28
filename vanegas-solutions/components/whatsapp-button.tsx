"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

export function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes wa-appear {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .wa-btn {
          animation: wa-appear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1s both;
        }
        .wa-btn:hover .wa-inner {
          transform: scale(1.1);
          box-shadow: 0 10px 40px rgba(37, 211, 102, 0.4);
        }
        .wa-inner {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .wa-tooltip {
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }
        .wa-btn:hover .wa-tooltip {
          opacity: 1;
        }
      `}</style>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn fixed bottom-6 right-6 z-50 group"
        aria-label="Contactar por WhatsApp">
        {/* Pulse ring — pure CSS, no JS */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        {/* Button */}
        <span className="wa-inner relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        </span>

        {/* Tooltip */}
        <span className="wa-tooltip absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap">
          ¡Hablemos!
        </span>
      </a>
    </>
  );
}
