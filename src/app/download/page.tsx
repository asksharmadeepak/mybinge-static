import type { Metadata } from "next";
import { DownloadShowcase } from "@/components/download-showcase";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Download MyBinge for Android Phone, Tablet & TV",
  description:
    "Download MyBinge from Google Play. Organize offline movies on phone, play on Android TV, add USB folders, and keep watch progress across devices.",
  path: "/download",
});

export default function DownloadPage() {
  return <DownloadShowcase />;
}
