import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const commitments = [
  { label: "Propuesta por escrito", detail: "alcance y precio" },
  { label: "Anticipo del 50%", detail: "el resto al entregar" },
  { label: "El dominio es tuyo", detail: "a tu nombre" },
  { label: "Empresa registrada", detail: `NIT ${siteConfig.nit}` },
];

export function GuaranteeSection() {
  return (
    <section aria-labelledby="garantia" className="dark bg-fondo text-texto">
      <div className="mx-auto flex max-w-sitio flex-wrap items-end gap-x-16 gap-y-10 px-5 py-16 md:px-10 md:py-28">
        <div className="flex min-w-0 flex-[7_1_480px] flex-col gap-5">
          <span className="etiqueta text-ladrillo">Nuestra garantía</span>
          <h2 id="garantia" className="titular text-display-l">Si algo no te convence, lo ajustamos sin costo.</h2>
          <p className="text-texto-suave md:text-lg">
            Dentro del alcance acordado en tu propuesta. Y cualquier error del desarrollo queda cubierto.
          </p>
          <Link
            href="/legal/garantia-y-cancelacion"
            className="self-start font-semibold underline decoration-2 underline-offset-[6px] hover:text-ladrillo">
            Leer políticas y garantía
          </Link>
        </div>
        <ul className="flex min-w-0 flex-[5_1_340px] flex-col gap-1.5 font-mono text-sm">
          {commitments.map((item) => (
            <li key={item.label} className="flex flex-col gap-1 border border-borde px-5 py-4 sm:flex-row sm:justify-between sm:gap-4">
              <span>{item.label}</span>
              <span className="text-texto-suave sm:text-right">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
