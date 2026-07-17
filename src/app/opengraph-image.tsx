import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.brandName} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #090909 0%, #141414 55%, #090909 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#E50914",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            ▶
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.1 }}>{siteConfig.brandName}</span>
            <span style={{ fontSize: 20, color: "#9a9a9a", marginTop: 6 }}>{siteConfig.tagline}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: 58,
              lineHeight: 1.12,
              margin: 0,
              maxWidth: 980,
              fontWeight: 700,
            }}
          >
            Build Your Own Offline Media Library
          </h1>
          <p style={{ color: "#c4c4c4", fontSize: 26, marginTop: 20, maxWidth: 900, lineHeight: 1.4 }}>
            Organize downloaded movies, TV shows, and personal videos — then watch offline on phone, tablet, and TV.
          </p>
        </div>

        <div style={{ display: "flex", color: "#9a9a9a", fontSize: 22, letterSpacing: "0.04em" }}>
          offlinemedialibrary.com
        </div>
      </div>
    ),
    size,
  );
}
