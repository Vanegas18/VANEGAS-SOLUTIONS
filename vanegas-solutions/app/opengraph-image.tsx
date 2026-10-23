import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0A0A0F",
        color: "#ffffff",
      }}>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#3B82F6",
          marginBottom: 24,
        }}>
        vanegassolutions.com
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 700,
          lineHeight: 1.1,
        }}>
        Digitaliza tu negocio
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          color: "#9ca3af",
          marginTop: 24,
          maxWidth: 900,
        }}>
        Páginas web, WhatsApp automatizado y software para negocios.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 48,
          width: 120,
          height: 8,
          background: "#2563EB",
          borderRadius: 4,
        }}
      />
    </div>,
    size,
  );
}
