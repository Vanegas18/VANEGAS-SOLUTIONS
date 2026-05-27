"use client";

import { useEffect, useState } from "react";

// Duración reducida a 1.5s — solo lo suficiente para que
// el primer paint de Next.js esté completo
const LOADING_DURATION = 1500;
const FADE_DURATION = 400;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / LOADING_DURATION) * 100, 100);
      setProgress(pct);
    }, 30);

    const hideTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), FADE_DURATION);
    }, LOADING_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0F] transition-opacity duration-[400ms] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
      <p className="text-2xl font-bold text-white font-[family-name:var(--font-syne)] mb-2 relative z-10">
        Vanegas Solutions
      </p>
      <p className="text-sm text-white/40 mb-10 relative z-10">
        Preparando tu experiencia...
      </p>
      <div className="relative z-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-white/30 mt-3 relative z-10 tabular-nums">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
