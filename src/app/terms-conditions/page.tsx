import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions for using OfflineMediaLibrary.com resources.",
  path: "/terms-conditions",
});

export default function TermsPage() {
  return (
    <SimplePage
      title="Terms and Conditions"
      description="Usage terms for website content, tools, and downloadable resources."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Terms and Conditions", href: "/terms-conditions" },
      ]}
    >
      <p>
        The information provided on this website is for educational use. Tools and templates are offered as-is without
        warranty. You are responsible for compliance with media rights and local laws when organizing personal content.
      </p>
      <p>
        By using this site, you agree not to misuse content, attempt unauthorized access, or redistribute proprietary
        materials without permission.
      </p>
    </SimplePage>
  );
}
