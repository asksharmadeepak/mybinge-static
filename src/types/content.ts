export type ContentKind = "blog" | "guides" | "comparisons" | "tools";

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  category?: string;
  tags?: string[];
  faq?: Array<{ q: string; a: string }>;
  related?: string[];
};

export type ContentItem = Frontmatter & {
  slug: string;
  kind: ContentKind;
  body: string;
  readingTime: string;
};
