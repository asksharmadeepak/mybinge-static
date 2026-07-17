import { getContentByKind } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export async function GET() {
  const posts = getContentByKind("blog").slice(0, 30);
  const items = posts
    .map(
      (post) => `<item>
  <title><![CDATA[${post.title}]]></title>
  <link>${siteConfig.domain}/blog/${post.slug}</link>
  <guid>${siteConfig.domain}/blog/${post.slug}</guid>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  <description><![CDATA[${post.description}]]></description>
</item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${siteConfig.name}</title>
  <link>${siteConfig.domain}</link>
  <description>${siteConfig.description}</description>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
