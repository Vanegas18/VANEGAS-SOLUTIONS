"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
}

/**
 * Drop-in replacement for framer-motion's useInView.
 * Uses IntersectionObserver — no third-party deps, Safari iOS safe.
 */
export function useInViewLite(
  ref: React.RefObject<Element | null>,
  options: UseInViewOptions = {},
): boolean {
  const { once = false, margin = "0px" } = options;
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disconnect previous observer if any
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once && observerRef.current) {
            observerRef.current.disconnect();
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin },
    );

    observerRef.current.observe(el);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [ref, once, margin]);

  return inView;
}
