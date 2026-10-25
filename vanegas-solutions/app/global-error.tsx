"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { archivo, plexMono } from "./fonts";
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
    <html lang="es" className={cn(archivo.variable, plexMono.variable)}>
      <body className="flex min-h-svh items-center">
        <main className="mx-auto flex w-full max-w-sitio flex-col gap-6 px-5 py-16 md:px-10">
          <span className="etiqueta text-ladrillo">Algo salió mal</span>
          <h1 className="titular max-w-[12em] text-display-l">No pudimos cargar esta página.</h1>
          <p className="max-w-[32em] text-[17px] md:text-lead">
            Intenta de nuevo en unos segundos. Si el problema continúa, escríbenos y lo revisamos.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Button size="lg" onClick={reset}>
              Intentar de nuevo
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
          {error.digest && <p className="font-mono text-xs text-texto-suave">Código: {error.digest}</p>}
        </main>
      </body>
    </html>
  );
}
