"use client";

import Link from "next/link";
import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground antialiased flex items-center justify-center px-4">
        <main className="max-w-xl text-center">
          <p className="text-sm font-semibold text-primary mb-4">
            Algo salió mal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            No pudimos cargar esta página
          </h1>
          <p className="text-muted-foreground mb-10">
            Intenta de nuevo en unos segundos. Si el problema continúa,
            escríbenos y lo revisamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Intentar de nuevo
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-border hover:bg-muted text-foreground font-semibold px-6 py-3 rounded-xl transition-colors">
              Volver al inicio
            </Link>
          </div>
          {error.digest && (
            <p className="mt-8 text-xs text-muted-foreground/60">
              Código: {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
