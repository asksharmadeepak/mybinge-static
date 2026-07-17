"use client";

import { useMemo, useState } from "react";

function parseFilename(raw: string) {
  const withoutExt = raw.replace(/\.[a-z0-9]{2,4}$/i, "");
  const yearMatch = withoutExt.match(/(19|20)\d{2}/);
  const year = yearMatch?.[0] ?? "";
  let titlePart = withoutExt
    .replace(/[._]/g, " ")
    .replace(/\b(1080p|720p|2160p|4k|x264|x265|hevc|bluray|webrip|web-dl|hdrip|dvdrip|proper|repack)\b/gi, "")
    .replace(/\b\d{2,4}p\b/gi, "")
    .replace(year, "")
    .replace(/\s+/g, " ")
    .trim();

  const qualityTags = withoutExt.match(/\b(1080p|720p|2160p|4k|x265|x264|hevc|bluray|webrip)\b/gi)?.join(", ") ?? "";

  const title = titlePart
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  const searchQuery = year ? `${title} ${year}`.trim() : title;
  const tmdbUrl = `https://www.themoviedb.org/search?query=${encodeURIComponent(searchQuery)}`;

  return { title, year, qualityTags, searchQuery, tmdbUrl };
}

export default function MetadataFinderPage() {
  const [input, setInput] = useState("");

  const parsed = useMemo(() => {
    if (!input.trim()) return null;
    return parseFilename(input.trim());
  }, [input]);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 md:py-16">
      <h1 className="text-4xl font-semibold text-white">Metadata Finder</h1>
      <p className="mt-3 text-[#c4c4c4]">
        Parse a messy movie filename into a clean title, year, and TMDB search link for metadata matching.
      </p>
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
        <label htmlFor="metadata-input" className="mb-2 block text-sm text-[#c4c4c4]">
          Raw filename
        </label>
        <input
          id="metadata-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. interstellar.2014.1080p.bluray.x264-GROUP.mkv"
          className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
        />
        {parsed && (
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm text-[#c4c4c4]">Parsed title</dt>
              <dd className="mt-1 text-lg text-white">{parsed.title || "—"}</dd>
            </div>
            <div>
              <dt className="text-sm text-[#c4c4c4]">Year</dt>
              <dd className="mt-1 text-white">{parsed.year || "Not detected"}</dd>
            </div>
            <div>
              <dt className="text-sm text-[#c4c4c4]">Quality tags</dt>
              <dd className="mt-1 text-white">{parsed.qualityTags || "None detected"}</dd>
            </div>
            <div>
              <dt className="text-sm text-[#c4c4c4]">Suggested folder name</dt>
              <dd className="mt-1 rounded-xl border border-white/10 bg-[#090909] px-4 py-3 font-mono text-white">
                {parsed.year ? `${parsed.title} (${parsed.year})` : parsed.title}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#c4c4c4]">TMDB search</dt>
              <dd className="mt-1">
                <a
                  href={parsed.tmdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline-offset-2 hover:underline"
                >
                  Search TMDB for &quot;{parsed.searchQuery}&quot;
                </a>
              </dd>
            </div>
          </dl>
        )}
      </div>
    </div>
  );
}
