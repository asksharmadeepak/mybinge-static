import type { Metadata } from "next";
import { DownloadShowcase } from "@/components/download-showcase";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Download MyBinge for iPhone, Android, Tablet & TV",
  description:
    "Download MyBinge from the App Store or Google Play. Organize offline movies on phone, play on TV, add USB folders, and keep watch progress across devices.",
  path: "/download",
});

export default function DownloadPage() {
  return <DownloadShowcase />;
}
