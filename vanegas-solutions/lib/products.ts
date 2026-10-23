import type { LucideIcon } from "lucide-react";
import { Scissors } from "lucide-react";

export type ProductStatus = "soon" | "live";

export interface Product {
  slug: string;
  name: string;
  niche: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  status: ProductStatus;
  trialDays: number;
  url?: string;
}

export const products: Product[] = [
  {
    slug: "barberos",
    name: "BarberOS",
    niche: "Barberías",
    icon: Scissors,
    description:
      "Gestiona citas, barberos, clientes y ventas de tu barbería desde un solo lugar.",
    features: [
      "Agenda y reservas online",
      "Recordatorios por WhatsApp",
      "Gestión de barberos y comisiones",
      "Historial de clientes",
      "Control de ventas y caja",
      "Reportes del negocio",
    ],
    status: "soon",
    trialDays: 7,
  },
];
