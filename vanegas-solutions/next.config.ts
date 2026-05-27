import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Divide el bundle agresivamente para que Lucide y shadcn
  // no bloqueen el parse inicial en Safari iOS
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-accordion",
    ],
  },

  // Comprime todo con gzip/brotli
  compress: true,

  // Headers de cache agresivo para assets estáticos
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;