import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ContentItem, ContentKind, Frontmatter } from "@/types/content";

const ROOT = path.join(process.cwd(), "content");

function minutes(text: string) {
  const words = text.trim().split(/\s+/).length;
  const time = Math.max(1, Math.ceil(words / 220));
  return `${time} min read`;
}

function dirFor(kind: ContentKind) {
  return path.join(ROOT, kind);
}

export function getContentByKind(kind: ContentKind): ContentItem[] {
  const folder = dirFor(kind);
  if (!fs.existsSync(folder)) return [];
  const files = fs.readdirSync(folder).filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const fullPath = path.join(folder, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const parsed = matter(source);
      const frontmatter = parsed.data as Frontmatter;
      const slug = file.replace(/\.mdx$/, "");
      return {
        ...frontmatter,
        slug,
        kind,
        body: parsed.content.trim(),
        readingTime: minutes(parsed.content),
      };
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getContentItem(
  kind: ContentKind,
  slug: string,
): ContentItem | null {
  return getContentByKind(kind).find((item) => item.slug === slug) ?? null;
}
