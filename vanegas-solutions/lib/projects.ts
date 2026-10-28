export type Project = {
  name: string;
  category: string;
  badge: "Demo" | "Proyecto para cliente";
  image: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    name: "Carbón",
    category: "Comidas rápidas",
    badge: "Demo",
    image: "/images/carbon.webp",
    description: "Menú para domicilios: tus clientes arman el pedido, ven el costo según su barrio y te llega completo por WhatsApp.",
    link: "https://carbon.vanegassolutions.com/",
  },
  {
    name: "Gota",
    category: "Perfumería",
    badge: "Demo",
    image: "/images/gota.webp",
    description: "Catálogo con pedido por WhatsApp y panel para cambiar precios y stock desde el celular, sin depender de nadie.",
    link: "https://gota.vanegassolutions.com/",
  },
  {
    name: "Esquina",
    category: "Tienda de ropa",
    badge: "Demo",
    image: "/images/esquina.webp",
    description: "Catálogo con talla, color y stock por talla. El pedido llega por WhatsApp con todo listo para despachar.",
    link: "https://esquina.vanegassolutions.com/",
  },
  {
    name: "BuildMart",
    category: "Constructora",
    badge: "Proyecto para cliente",
    image: "/images/buildmart.png",
    description: "Sistema web con catálogo, carrito, pagos y gestión administrativa: ventas, inventario y pedidos en una sola plataforma.",
    link: "https://build-two-sage.vercel.app/",
  },
];
