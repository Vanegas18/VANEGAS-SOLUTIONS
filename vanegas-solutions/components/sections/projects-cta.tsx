const WHATSAPP_URL = "https://wa.me/message/ONFQJUHPPM3JK1";

export function ProjectsCTASection() {
  return (
    <section className="pb-20 md:pb-24 bg-background dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm md:text-base font-medium">
          ¿Quieres algo similar para tu negocio? Hablemos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
