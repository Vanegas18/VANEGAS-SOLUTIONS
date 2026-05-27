"use client";

import { useEffect, useRef } from "react";

/**
 * useSectionAnimation — v2
 *
 * El bug en Safari: el LoadingScreen (position:fixed; inset:0; z-index:9999) cubre
 * todo el viewport durante 7s. Safari iOS no considera "intersectando" a los elementos
 * tapados por un fixed overlay, así que el observer nunca dispara en las secciones
 * que están below-the-fold mientras el loading está activo.
 *
 * Solución:
 * 1. NO agregamos .will-animate hasta que el loading termine
 * 2. Escuchamos el evento "loading-complete" del LoadingScreen
 * 3. Solo entonces ocultamos y empezamos a observar
 * 4. Fallback: si el evento ya pasó o nunca llega, activamos a los 8s igual
 *
 * Para las secciones ya visibles cuando termina el loading (Hero, Pain)
 * marcamos inmediatamente in-view sin pasar por will-animate.
 */
export function useSectionAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | null = null;

    function startObserving() {
      const sectionEl = ref.current;
      if (!sectionEl) return;

      const items = sectionEl.querySelectorAll<HTMLElement>(".section-item");

      // Crear el observer ANTES de agregar will-animate
      // para que la primera evaluación de intersección sea correcta
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("will-animate");
              entry.target.classList.add("in-view");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          // Sin rootMargin negativo: después del loading el viewport está libre
          // y queremos que los elementos ya visibles se revelen de inmediato
          rootMargin: "0px",
        },
      );

      items.forEach((item) => {
        // Solo ocultar si el elemento NO está ya en el viewport
        const rect = item.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (!inViewport) {
          item.classList.add("will-animate");
        }
        // Si ya está visible, no lo ocultamos — simplemente lo observamos
        // y el observer lo marcará in-view en la primera evaluación
        observer!.observe(item);
      });
    }

    // Escuchar el evento que dispara LoadingScreen al terminar
    function onLoadingComplete() {
      startObserving();
    }

    window.addEventListener("loading-complete", onLoadingComplete, {
      once: true,
    });

    // Fallback: si el evento ya se disparó antes de que este componente montara
    // (ej: navegación entre páginas, hot reload) arrancamos igual después de un tick
    const fallbackTimer = setTimeout(() => {
      startObserving();
    }, 7500); // justo después del LOADING_DURATION de 7000ms

    return () => {
      window.removeEventListener("loading-complete", onLoadingComplete);
      clearTimeout(fallbackTimer);
      observer?.disconnect();
    };
  }, []);

  return ref;
}
