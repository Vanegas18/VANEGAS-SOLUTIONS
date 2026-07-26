import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { legalDocs } from "@/lib/legal-content";

export function LegalHubSection() {
  return (
    <section
      id="centro-legal"
      className="py-20 md:py-28 bg-background dot-pattern">
      <style>{`
        @keyframes lh-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .lh-title  { animation: lh-in 0.6s ease both; }
        .lh-card-0 { animation: lh-in 0.5s ease 0.05s both; }
        .lh-card-1 { animation: lh-in 0.5s ease 0.1s both; }
        .lh-card-2 { animation: lh-in 0.5s ease 0.15s both; }
        .lh-card-3 { animation: lh-in 0.5s ease 0.2s both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lh-title text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-(family-name:--font-syne)">
            Centro Legal
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {legalDocs.map((doc, i) => (
            <Link
              key={doc.slug}
              href={`/legal/${doc.slug}`}
              className={`lh-card-${i} group glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                doc.featured ? "sm:col-span-2 border-blue-500/40" : ""
              }`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <doc.icon className="text-blue-500" size={26} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {doc.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {doc.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-blue-500 group-hover:gap-2 transition-all">
                Leer documento <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
