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
    name: "SaborExpress",
    category: "Restaurante",
    badge: "Demo",
    image: "/images/saborexpress.png",
    description: "Landing con menú digital y reservas por WhatsApp. Tus clientes ven el menú y reservan desde el celular.",
    link: "https://restaurant-landing-beta.vercel.app/",
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
    name: "Lumen",
    category: "Tienda de ropa",
    badge: "Demo",
    image: "/images/lumen.png",
    description: "Landing con catálogo de productos y compra por WhatsApp. Tus clientes eligen y compran en pocos clics.",
    link: "https://store-landing-rouge.vercel.app/",
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
