"use client";

import { useRef } from "react";

/**
 * Hook vacío — mantiene la interfaz para no romper imports
 * pero no hace nada. Todo el contenido es visible por CSS.
 */
export function useSectionAnimation() {
  return useRef<HTMLElement>(null);
}
