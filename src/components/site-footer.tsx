import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { StoreCta } from "@/components/store-cta";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/guides", label: "Guides" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Screenshots" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-conditions", label: "Terms" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070707]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[2fr_3fr] md:px-8">
        <div>
          <BrandLogo variant="header" markClassName="h-8 w-8" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a]">
            {siteConfig.brandName} helps you organize offline movies and videos — guides and tools for building a
            durable {siteConfig.tagline.toLowerCase()}.
          </p>
          <StoreCta placement="footer" className="mt-6" />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#8a8a8a] transition duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-4 py-5 text-center text-xs text-[#6e6e6e] md:px-8">
        © {new Date().getFullYear()} OfflineMediaLibrary.com
      </div>
    </footer>
  );
}
