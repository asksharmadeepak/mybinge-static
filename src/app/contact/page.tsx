import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact OfflineMediaLibrary.com",
  description:
    "Contact the OfflineMediaLibrary.com team for MyBinge feedback, partnership ideas, and content requests.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact us"
      description="Need help with offline media organization? Reach us directly."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ]}
    >
      <p>
        For product support, partnership opportunities, or guide requests, contact us on LinkedIn. We review every
        message and prioritize requests that improve practical offline media workflows.
      </p>
      <div>
        <Link href={siteConfig.linkedInContactUrl} className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-white hover:border-white/40">
          Message on LinkedIn
        </Link>
      </div>
    </SimplePage>
  );
}
