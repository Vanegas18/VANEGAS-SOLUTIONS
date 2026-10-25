export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  priceFrom: number;
  featured: boolean;
  headline: string;
  explanation: string;
  includes: string[];
  ideal: string;
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    slug: "pagina-web",
    title: "Página web",
    shortTitle: "Web",
    summary: "Una página moderna y rápida, lista para recibir clientes desde el celular.",
    priceFrom: 650000,
    featured: false,
    headline: "¿Para qué sirve una página web?",
    explanation:
      "Es un vendedor que trabaja todo el día, todos los días. Cuando alguien en tu ciudad busca en Google lo que vendes, tu negocio aparece, el cliente se convence solo y te escribe directo por WhatsApp.",
    includes: [
      "Diseño profesional adaptado a tu negocio",
      "Se ve bien en celular, tablet y computador",
      "Botón directo a tu WhatsApp",
      "Optimizada para aparecer en Google",
      "Avances que revisas durante el proceso",
    ],
    ideal: "Tiendas, restaurantes, barberías, ferreterías y talleres: cualquier negocio que quiera más clientes.",
    whatsappMessage: "Hola, me interesa una página web profesional para mi negocio",
  },
  {
    slug: "landing-page",
    title: "Landing page",
    shortTitle: "Landing",
    summary: "Una página enfocada en una sola acción: que te escriban o te compren.",
    priceFrom: 350000,
    featured: false,
    headline: "¿Para qué sirve una landing page?",
    explanation:
      "Tiene un solo objetivo: convertir al visitante en cliente. Está diseñada para que la persona tome una acción concreta, como escribirte o comprar. Es ideal para promociones, servicios específicos o campañas.",
    includes: [
      "Diseño enfocado en conversión",
      "Mensaje claro y directo",
      "Botón de contacto destacado",
      "Optimizada para celular",
      "Lista para usar en campañas",
    ],
    ideal: "Negocios que pautan en redes sociales o Google y necesitan convertir ese tráfico en clientes.",
    whatsappMessage: "Hola, necesito una landing page para mi negocio",
  },
  {
    slug: "catalogo-digital",
    title: "Catálogo digital",
    shortTitle: "Catálogo",
    summary: "Muestra tus productos y actualízalos tú mismo, sin saber de tecnología.",
    priceFrom: 350000,
    featured: false,
    headline: "¿Para qué sirve un catálogo digital?",
    explanation:
      "Tus clientes consultan precios, fotos y disponibilidad solos, sin tener que escribirte para preguntar. Tú actualizas los productos cuando quieras desde el celular.",
    includes: [
      "Productos organizados por categorías",
      "Fotos, descripciones y buscador",
      "Panel para actualizar precios y productos",
      "Pedidos directo a tu WhatsApp",
      "Fácil de usar sin conocimientos técnicos",
    ],
    ideal: "Tiendas, ferreterías, distribuidoras y restaurantes con muchos productos y preguntas repetidas.",
    whatsappMessage: "Hola, quiero un catálogo digital para mostrar mis productos",
  },
  {
    slug: "whatsapp-business",
    title: "WhatsApp Business",
    shortTitle: "WhatsApp",
    summary: "Perfil, catálogo y mensajes automáticos para atender mejor.",
    priceFrom: 200000,
    featured: false,
    headline: "¿Cómo mejoramos tu WhatsApp?",
    explanation:
      "Cada mensaje sin respuesta es una venta que se va. Configuramos tu WhatsApp Business completo para que tu negocio responda bien, incluso cuando no estás disponible.",
    includes: [
      "Perfil de empresa completo",
      "Catálogo de productos o servicios",
      "Respuestas rápidas para preguntas frecuentes",
      "Mensajes de bienvenida y ausencia",
      "Etiquetas para organizar tus chats",
    ],
    ideal: "Cualquier negocio que reciba consultas por WhatsApp y quiera responder mejor.",
    whatsappMessage: "Hola, quiero optimizar mi WhatsApp Business",
  },
  {
    slug: "automatizacion",
    title: "Automatización",
    shortTitle: "Automatiza",
    summary: "Las tareas repetitivas de tu negocio, hechas solas.",
    priceFrom: 600000,
    featured: false,
    headline: "¿Qué procesos podemos automatizar?",
    explanation:
      "Si haces las mismas tareas todos los días, como responder las mismas preguntas, confirmar citas o anotar pedidos, las automatizamos para que sucedan solas.",
    includes: [
      "Respuestas automáticas a preguntas frecuentes",
      "Confirmación de citas y pedidos",
      "Notificaciones y recordatorios",
      "Integración entre tus herramientas",
      "Flujos diseñados para tu negocio",
    ],
    ideal: "Negocios con agendas, pedidos, confirmaciones o seguimientos que consumen tiempo.",
    whatsappMessage: "Hola, quiero automatizar procesos de mi negocio",
  },
  {
    slug: "redes-sociales",
    title: "Redes sociales",
    shortTitle: "Redes",
    summary: "Perfiles configurados para que tu negocio se vea profesional.",
    priceFrom: 200000,
    featured: false,
    headline: "¿Qué hacemos con tus redes sociales?",
    explanation:
      "Tener redes no es suficiente: tienen que estar bien configuradas, con la información correcta y conectadas entre sí. Te las dejamos listas para que generen confianza.",
    includes: [
      "Perfil con toda la información del negocio",
      "Biografía clara y profesional",
      "Foto de perfil y portada",
      "Enlaces y datos de contacto",
      "Conexión entre Instagram, Facebook y WhatsApp",
    ],
    ideal: "Negocios con redes incompletas o desactualizadas. No incluye creación continua de contenido.",
    whatsappMessage: "Hola, quiero optimizar mis redes sociales",
  },
  {
    slug: "digitalizacion-completa",
    title: "Digitalización completa",
    shortTitle: "Todo",
    summary:
      "Página web, WhatsApp Business, automatización básica y redes sociales en un solo proyecto, con una estructura lista para crecer.",
    priceFrom: 1500000,
    featured: true,
    headline: "¿Qué incluye la digitalización completa?",
    explanation:
      "No se trata solo de tener una página o usar WhatsApp: construimos un sistema digital completo que trabaja por ti. Tu negocio queda listo para captar clientes, responder rápido y operar con orden.",
    includes: [
      "Página web profesional completa",
      "WhatsApp Business configurado",
      "Automatización básica de procesos",
      "Redes sociales conectadas y listas",
      "Estructura digital lista para crecer",
    ],
    ideal: "Negocios que quieren dar el salto digital de una sola vez, sin hacerlo por partes.",
    whatsappMessage: "Hola, quiero digitalizar completamente mi negocio",
  },
];

export const formatCOP = (value: number) => `$${value.toLocaleString("es-CO")}`;
