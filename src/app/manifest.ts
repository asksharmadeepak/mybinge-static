import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OfflineMediaLibrary.com",
    short_name: "MyBinge",
    description:
      "Guides and tools for organizing offline media libraries — and MyBinge for phone, tablet, and TV.",
    start_url: "/",
    display: "standalone",
    background_color: "#090909",
    theme_color: "#E50914",
    icons: [
      { src: "/brand-mark.png", sizes: "192x192", type: "image/png" },
      { src: "/brand-mark.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
