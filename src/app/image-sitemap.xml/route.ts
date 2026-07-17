import { siteConfig } from "@/lib/site";

const imageUrls = [
  siteConfig.assets.brandMark,
  siteConfig.assets.logoLockup,
  siteConfig.assets.heroDevices,
  siteConfig.assets.screenshots.mobileHome,
  siteConfig.assets.screenshots.mobileLogin,
  siteConfig.assets.screenshots.mobileSettings,
  siteConfig.assets.screenshots.mobileVideos,
  siteConfig.assets.screenshots.tvHome,
  siteConfig.assets.screenshots.tvLogin,
  siteConfig.assets.screenshots.tvMovies,
  siteConfig.assets.screenshots.tvSettings,
];

export async function GET() {
  const images = imageUrls
    .map(
      (path) => `<image:image>
      <image:loc>${siteConfig.domain}${path}</image:loc>
    </image:image>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteConfig.domain}/download</loc>
    ${images}
  </url>
  <url>
    <loc>${siteConfig.domain}</loc>
    ${images}
  </url>
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
