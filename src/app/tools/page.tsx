import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

const tools = [
  {
    slug: "movie-filename-formatter",
    title: "Movie Filename Formatter",
    description: "Convert messy filenames into clean, metadata-friendly naming patterns.",
  },
  {
    slug: "folder-structure-generator",
    title: "Folder Structure Generator",
    description: "Generate a scalable movie and TV folder template for your offline library.",
  },
  {
    slug: "subtitle-checker",
    title: "Subtitle Checker",
    description: "Find video files missing matching subtitle files in your library.",
  },
  {
    slug: "metadata-finder",
    title: "Metadata Finder",
    description: "Parse raw filenames into title, year, and TMDB search links.",
  },
  {
    slug: "episode-tracker",
    title: "Episode Tracker",
    description: "Checklist grid for tracking downloaded TV episodes by season.",
  },
  {
    slug: "collection-planner",
    title: "Collection Planner",
    description: "Estimate storage needs and plan folder layout for your collection.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Offline Media Tools",
  description: "Use practical tools to clean filenames, plan folders, check subtitles, and organize large offline video libraries.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">Utilities</p>
      <h1 className="mt-3 font-heading text-4xl text-white md:text-6xl">Tools</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c4c4c4]">
        Lightweight utilities built to solve everyday offline media management tasks.
      </p>
      <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {tools.map((tool, index) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="grid gap-2 py-7 md:grid-cols-[72px_1fr] md:items-baseline"
          >
            <span className="text-xs text-[#8a8a8a]">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <span className="font-heading text-2xl text-white md:text-3xl">{tool.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-[#c4c4c4]">{tool.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
