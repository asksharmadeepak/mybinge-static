import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/guides", label: "Guides" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Download" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-conditions", label: "Terms" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#090909]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[2fr_3fr] md:px-8">
        <div>
          <BrandLogo variant="header" markClassName="h-8 w-8" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
            {siteConfig.brandName} helps you organize offline movies and videos — guides and tools for building a
            durable {siteConfig.tagline.toLowerCase()}.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#9a9a9a] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-5 text-center text-xs text-[#6e6e6e] md:px-8">
        © {new Date().getFullYear()} OfflineMediaLibrary.com
      </div>
    </footer>
  );
}
