import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Cookie usage policy for OfflineMediaLibrary.com.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <SimplePage
      title="Cookie Policy"
      description="How cookies are used for analytics and performance improvements."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Cookie Policy", href: "/cookie-policy" },
      ]}
    >
      <p>
        We use essential cookies for site reliability and optional analytics cookies to measure traffic and improve
        user experience. You can control cookies in your browser settings.
      </p>
      <p>
        If advertising integrations are added in the future, this policy will include details about third-party cookies
        and user consent controls.
      </p>
    </SimplePage>
  );
}
