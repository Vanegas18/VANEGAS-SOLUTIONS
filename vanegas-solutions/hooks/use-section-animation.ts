"use client";

import { useEffect, useRef } from "react";

/**
 * useSectionAnimation
 *
 * Estrategia "progressive enhancement":
 * 1. Por defecto los elementos tienen opacity:1 y son visibles (CSS base: .section-item)
 * 2. En el primer useEffect, si el navegador soporta IntersectionObserver,
 *    añadimos .will-animate para ocultarlos momentáneamente
 * 3. El observer los marca con .in-view cuando entran al viewport → CSS transition los muestra
 *
 * Si JS falla, tarda, o Safari no completa el ciclo: el contenido igual es visible.
 * No hay dependencia de ninguna librería externa ni de eventos de loading.
 */
export function useSectionAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    // Seleccionamos todos los section-items dentro de esta sección
    const items = el.querySelectorAll<HTMLElement>(".section-item");

    // Marcarlos como "will-animate" ahora que sabemos que JS está corriendo
    items.forEach((item) => {
      item.classList.add("will-animate");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("will-animate");
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // rootMargin más generoso para Safari donde el viewport se calcula diferente
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
}
