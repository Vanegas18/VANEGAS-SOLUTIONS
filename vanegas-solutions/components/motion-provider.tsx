"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type {
  motion as MotionType,
  AnimatePresence as APType,
} from "framer-motion";

type MotionLib = {
  motion: typeof MotionType;
  AnimatePresence: typeof APType;
} | null;

const MotionContext = createContext<MotionLib>(null);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [lib, setLib] = useState<MotionLib>(null);

  useEffect(() => {
    import("framer-motion").then((mod) => {
      setLib({ motion: mod.motion, AnimatePresence: mod.AnimatePresence });
    });
  }, []);

  return (
    <MotionContext.Provider value={lib}>{children}</MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}
