import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for OfflineMediaLibrary.com and MyBinge promotional content.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      title="Privacy Policy"
      description="How we collect and use website analytics and contact data."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ]}
    >
      <p>
        We collect minimal analytics to understand page performance and improve content quality. We do not sell personal
        data. Contact details submitted via LinkedIn are used only to respond to your inquiry.
      </p>
      <p>
        If ads or additional analytics tools are introduced later, this policy will be updated with clear disclosures
        on cookies, consent, and data retention.
      </p>
    </SimplePage>
  );
}
