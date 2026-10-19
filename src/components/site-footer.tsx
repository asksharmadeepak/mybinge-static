import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { StoreCta } from "@/components/store-cta";
import { playStoreUrlWithUtm, siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/guides", label: "Guides" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/download", label: "Screenshots" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-conditions", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

const moreFromDlabs = [
  {
    href: playStoreUrlWithUtm(siteConfig.dlabs.nextBingePlayUrl, "footer_more_apps"),
    label: "NextBinge — What to Watch",
  },
  {
    href: siteConfig.dlabs.homeworkBuddySiteUrl,
    label: "Homework Buddy",
  },
  {
    href: siteConfig.dlabs.developerPlayUrl,
    label: "All D labs apps",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070707]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[2fr_2fr_1.5fr] md:px-8">
        <div>
          <BrandLogo variant="header" markClassName="h-8 w-8" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a]">
            {siteConfig.brandName} helps you organize offline movies and videos — guides and tools for building a
            durable {siteConfig.tagline.toLowerCase()}.
          </p>
          <StoreCta placement="footer" className="mt-6" />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:col-span-1 md:grid-cols-2 lg:grid-cols-3">
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
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">More from D labs</p>
          <ul className="mt-4 space-y-2.5">
            {moreFromDlabs.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8a8a8a] transition duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-4 py-5 text-center text-xs text-[#6e6e6e] md:px-8">
        © {new Date().getFullYear()} OfflineMediaLibrary.com · A D labs product
      </div>
    </footer>
  );
}
