import { Scale, ShieldCheck, Lock, FileText, LucideIcon } from "lucide-react";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  updatedAt: string;
  sections: LegalSection[];
};

const UPDATED = "26 de julio de 2026";

export const legalDocs: LegalDoc[] = [
  {
    slug: "terminos-y-condiciones",
    title: "Términos y Condiciones",
    description:
      "Cómo funciona la contratación, pagos y entregas de cada proyecto.",
    icon: Scale,
    updatedAt: UPDATED,
    sections: [
      {
        id: "sobre-vanegas-solutions",
        title: "1. Sobre Vanegas Solutions",
        blocks: [
          {
            type: "p",
            text: "Vanegas Solutions, identificada con NIT 1013458886-3, con sede en Medellín, Colombia, ofrece servicios de desarrollo de software y soluciones digitales para pequeñas y medianas empresas.",
          },
        ],
      },
      {
        id: "servicios-ofrecidos",
        title: "2. Servicios ofrecidos",
        blocks: [
          {
            type: "p",
            text: "Desarrollo de páginas web, landing pages, catálogos administrables, configuración de WhatsApp Business, automatizaciones, configuración de redes sociales, digitalización completa y servicio de fidelización. El alcance específico de cada servicio se define por escrito en la cotización correspondiente.",
          },
        ],
      },
      {
        id: "proceso-de-contratacion",
        title: "3. Proceso de contratación",
        blocks: [
          {
            type: "p",
            text: "Toda cotización incluye objetivo, alcance, funcionalidades, tiempo estimado, valor, forma de pago, condiciones y exclusiones. El proyecto solo inicia tras la aprobación escrita de la cotización.",
          },
        ],
      },
      {
        id: "forma-de-pago",
        title: "4. Forma de pago",
        blocks: [
          {
            type: "p",
            text: "Se requiere un anticipo del 50% del valor acordado antes de iniciar cualquier desarrollo. El saldo restante se cancela según lo definido en la propuesta comercial o antes de la entrega final.",
          },
        ],
      },
      {
        id: "alcance-y-cambios",
        title: "5. Alcance y cambios",
        blocks: [
          {
            type: "p",
            text: "Cualquier funcionalidad no incluida en la cotización inicial se considera un requerimiento adicional, sujeto a nuevos tiempos y costos, previa aprobación del cliente.",
          },
        ],
      },
      {
        id: "entrega",
        title: "6. Entrega",
        blocks: [
          {
            type: "p",
            text: "La entrega incluye el proyecto funcionando, accesos correspondientes, documentación necesaria y, cuando aplique, capacitación básica. El cliente debe confirmar la recepción conforme de los entregables.",
          },
        ],
      },
      {
        id: "propiedad-intelectual",
        title: "7. Propiedad intelectual",
        blocks: [
          {
            type: "p",
            text: "Una vez pagado en su totalidad, el cliente es propietario del producto desarrollado, salvo acuerdo diferente por escrito. Vanegas Solutions conserva el derecho de usar capturas o descripciones del proyecto en su portafolio, salvo solicitud expresa en contrario.",
          },
        ],
      },
      {
        id: "dominio-y-hosting",
        title: "8. Dominio y hosting",
        blocks: [
          {
            type: "p",
            text: "Siempre que sea posible, el dominio y el hosting se registran a nombre del cliente. Vanegas Solutions puede gestionar la configuración técnica cuando sea necesario.",
          },
        ],
      },
      {
        id: "responsabilidades-del-cliente",
        title: "9. Responsabilidades del cliente",
        blocks: [
          {
            type: "p",
            text: "Entregar información necesaria a tiempo, revisar avances, realizar los pagos acordados y facilitar accesos requeridos. Retrasos por falta de información pueden modificar el cronograma.",
          },
        ],
      },
      {
        id: "cancelacion",
        title: "10. Cancelación",
        blocks: [
          {
            type: "p",
            text: "Consulta las condiciones completas en el documento de Garantía y Cancelación.",
          },
        ],
      },
      {
        id: "modificaciones",
        title: "11. Modificaciones",
        blocks: [
          {
            type: "p",
            text: "Vanegas Solutions puede actualizar estos términos. Los cambios aplican a proyectos contratados después de la fecha de actualización.",
          },
        ],
      },
    ],
  },
  {
    slug: "garantia-y-cancelacion",
    title: "Garantía y Cancelación",
    description:
      "Qué pasa si algo falla o decides no continuar. Sin letra chiquita.",
    icon: ShieldCheck,
    featured: true,
    updatedAt: UPDATED,
    sections: [
      {
        id: "garantia-de-correccion",
        title: "1. Garantía de corrección",
        blocks: [
          {
            type: "p",
            text: "Vanegas Solutions ofrece 30 días de garantía posteriores a la entrega para corregir, sin costo adicional, errores atribuibles al desarrollo realizado. Esta garantía no cubre:",
          },
          {
            type: "list",
            items: [
              "Cambios solicitados posteriormente.",
              "Modificaciones realizadas por terceros.",
              "Fallas de servicios externos (hosting, dominio, APIs de terceros).",
              "Uso incorrecto del sistema.",
            ],
          },
        ],
      },
      {
        id: "anticipo-y-cancelacion",
        title: "2. Anticipo y cancelación durante el desarrollo",
        blocks: [
          {
            type: "p",
            text: "Todo proyecto requiere un anticipo del 50% antes de iniciar. Si el cliente decide cancelar el proyecto una vez iniciado el desarrollo, el anticipo no es reembolsable, ya que cubre el trabajo comprometido y ejecutado hasta ese momento. Se entregará al cliente el avance correspondiente según lo desarrollado.",
          },
        ],
      },
      {
        id: "cancelacion-fidelizacion",
        title: "3. Cancelación del servicio de Fidelización",
        blocks: [
          {
            type: "p",
            text: "El servicio mensual de Fidelización no tiene permanencia ni contratos forzosos. El cliente puede cancelarlo en cualquier momento, sin penalidad, dejando de realizar el pago del mes siguiente.",
          },
        ],
      },
      {
        id: "sin-permanencia",
        title: "4. Sin contratos de permanencia",
        blocks: [
          {
            type: "p",
            text: "Ningún servicio de Vanegas Solutions obliga al cliente a permanecer más allá de lo acordado en cada proyecto puntual.",
          },
        ],
      },
    ],
  },
  {
    slug: "politica-de-privacidad",
    title: "Política de Privacidad",
    description: "Qué datos recolectamos y cómo los protegemos.",
    icon: Lock,
    updatedAt: UPDATED,
    sections: [
      {
        id: "responsable-del-tratamiento",
        title: "1. Responsable del tratamiento",
        blocks: [
          {
            type: "p",
            text: "Vanegas Solutions, NIT 1013458886-3, con sede en Medellín, Colombia, es responsable del tratamiento de los datos personales recolectados a través de sus canales de contacto (formulario web, WhatsApp, correo electrónico).",
          },
        ],
      },
      {
        id: "datos-que-recolectamos",
        title: "2. Datos que recolectamos",
        blocks: [
          {
            type: "p",
            text: "Nombre, número de teléfono, correo electrónico y, cuando aplique, nombre e información básica de la empresa del cliente — únicamente los datos necesarios para elaborar una cotización o prestar el servicio contratado.",
          },
        ],
      },
      {
        id: "finalidad-del-tratamiento",
        title: "3. Finalidad del tratamiento",
        blocks: [
          {
            type: "p",
            text: "Los datos se usan exclusivamente para responder consultas, elaborar propuestas comerciales, prestar los servicios contratados y dar soporte posterior. No se utilizan con fines distintos a los aquí descritos.",
          },
        ],
      },
      {
        id: "confidencialidad",
        title: "4. Confidencialidad",
        blocks: [
          {
            type: "p",
            text: "Toda información suministrada por el cliente se trata de forma confidencial. No se comparte con terceros sin autorización expresa. Cuando el proyecto lo requiera, puede firmarse un acuerdo de confidencialidad (NDA).",
          },
        ],
      },
      {
        id: "marco-legal",
        title: "5. Marco legal",
        blocks: [
          {
            type: "p",
            text: "Este tratamiento de datos se realiza conforme a la Ley 1581 de 2012 (Régimen General de Protección de Datos Personales) de Colombia.",
          },
        ],
      },
      {
        id: "derechos-del-titular",
        title: "6. Derechos del titular",
        blocks: [
          {
            type: "p",
            text: "El titular de los datos puede conocer, actualizar, rectificar o solicitar la eliminación de su información en cualquier momento, escribiendo a contacto@vanegassolutions.com.",
          },
        ],
      },
      {
        id: "conservacion",
        title: "7. Conservación",
        blocks: [
          {
            type: "p",
            text: "Los datos se conservan únicamente mientras dure la relación comercial o mientras sean necesarios para los fines descritos, salvo obligación legal de conservarlos por más tiempo.",
          },
        ],
      },
    ],
  },
  {
    slug: "aviso-legal",
    title: "Aviso Legal",
    description:
      "Identidad legal de la empresa y condiciones de uso del sitio.",
    icon: FileText,
    updatedAt: UPDATED,
    sections: [
      {
        id: "titular",
        title: "1. Titular",
        blocks: [
          {
            type: "p",
            text: "Este sitio web es operado por Juan José Vanegas, bajo el nombre comercial Vanegas Solutions, NIT 1013458886-3, con domicilio en Medellín, Antioquia, Colombia.",
          },
        ],
      },
      {
        id: "objeto",
        title: "2. Objeto",
        blocks: [
          {
            type: "p",
            text: "Vanegas Solutions ofrece servicios de desarrollo de software y soluciones digitales descritos en la sección de Servicios de este sitio web.",
          },
        ],
      },
      {
        id: "contacto",
        title: "3. Contacto",
        blocks: [
          {
            type: "list",
            items: [
              "Correo: contacto@vanegassolutions.com",
              "WhatsApp: wa.me/message/ONFQJUHPPM3JK1",
            ],
          },
        ],
      },
      {
        id: "condiciones-de-uso",
        title: "4. Condiciones de uso del sitio",
        blocks: [
          {
            type: "p",
            text: "El contenido de este sitio (textos, imágenes, diseño) es propiedad de Vanegas Solutions, salvo indicación contraria. Se prohíbe su reproducción total o parcial sin autorización.",
          },
        ],
      },
      {
        id: "exactitud-de-la-informacion",
        title: "5. Exactitud de la información",
        blocks: [
          {
            type: "p",
            text: "Vanegas Solutions procura mantener la información de este sitio actualizada y precisa, pero no garantiza la ausencia total de errores u omisiones.",
          },
        ],
      },
      {
        id: "legislacion-aplicable",
        title: "6. Legislación aplicable",
        blocks: [
          {
            type: "p",
            text: "Estas condiciones se rigen por la legislación de la República de Colombia.",
          },
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug);
}
