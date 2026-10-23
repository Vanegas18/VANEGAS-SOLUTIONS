import { ArrowUpRight, Check } from "lucide-react";
import { products } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ProductsSection() {
  if (products.length === 0) return null;

  return (
    <section id="productos" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-(family-name:--font-syne)">
            Software listo para tu sector
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apps diseñadas para negocios como el tuyo, con suscripción mensual y
            prueba gratis.
          </p>
        </div>

        <div
          className={cn(
            "grid gap-6 grid-cols-1 mx-auto",
            products.length === 1 ? "max-w-xl" : "md:grid-cols-2 max-w-4xl",
          )}>
          {products.map((product) => {
            const isLive = product.status === "live" && Boolean(product.url);
            const href = isLive
              ? product.url!
              : waLink(`Hola, quiero acceso anticipado a ${product.name}`);
            const Icon = product.icon;

            return (
              <article
                key={product.slug}
                className="glass-card rounded-2xl p-6 md:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {isLive ? "Disponible" : "Próximamente"}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-wider text-primary mb-2">
                  {product.niche}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-(family-name:--font-syne)">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {product.features.length > 0 && (
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5 text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-colors">
                  {isLive
                    ? `Probar gratis ${product.trialDays} días`
                    : "Quiero acceso anticipado"}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
