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
      <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Tools</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c4c4c4]">
        Lightweight utilities built to solve everyday offline media management tasks.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6 transition hover:border-white/20"
          >
            <h2 className="text-xl font-medium text-white">{tool.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
