// hooks/use-page-ready.ts
"use client";

import { useEffect, useState } from "react";

export function usePageReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleReady = () => setReady(true);
    window.addEventListener("loading-complete", handleReady);

    // Si el loading ya terminó antes de que este componente monte
    // (ej: navegación entre páginas), marcarlo como listo de inmediato
    const fallback = setTimeout(() => setReady(true), 8000);

    return () => {
      window.removeEventListener("loading-complete", handleReady);
      clearTimeout(fallback);
    };
  }, []);

  return ready;
}