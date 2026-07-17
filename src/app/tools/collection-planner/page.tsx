"use client";

import { useMemo, useState } from "react";

const GB_PER_MOVIE: Record<string, number> = {
  "480p": 1.2,
  "720p": 2.5,
  "1080p": 8,
  "4k": 25,
};

const GB_PER_EPISODE: Record<string, number> = {
  "480p": 0.4,
  "720p": 0.8,
  "1080p": 2.5,
  "4k": 8,
};

export default function CollectionPlannerPage() {
  const [libraryName, setLibraryName] = useState("My Library");
  const [movieCount, setMovieCount] = useState(200);
  const [tvEpisodes, setTvEpisodes] = useState(500);
  const [quality, setQuality] = useState<keyof typeof GB_PER_MOVIE>("1080p");
  const [includeAnime, setIncludeAnime] = useState(true);

  const estimate = useMemo(() => {
    const movieGb = movieCount * GB_PER_MOVIE[quality];
    const tvGb = tvEpisodes * GB_PER_EPISODE[quality];
    const totalGb = movieGb + tvGb;
    const totalTb = totalGb / 1024;
    return { movieGb, tvGb, totalGb, totalTb };
  }, [movieCount, tvEpisodes, quality]);

  const structure = useMemo(() => {
    const lines = [
      `${libraryName}/`,
      `  Movies/          (~${movieCount} titles)`,
      `  TV Shows/         (~${tvEpisodes} episodes)`,
      `  Personal Videos/`,
    ];
    if (includeAnime) lines.push(`  Anime/`);
    lines.push("", `# Estimated storage at ${quality}: ~${estimate.totalGb.toFixed(0)} GB (${estimate.totalTb.toFixed(2)} TB)`);
    return lines.join("\n");
  }, [libraryName, movieCount, tvEpisodes, quality, includeAnime, estimate]);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 md:py-16">
      <h1 className="text-4xl font-semibold text-white">Collection Planner</h1>
      <p className="mt-3 text-[#c4c4c4]">
        Estimate storage needs and generate a recommended folder layout for your offline movie library.
      </p>
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="lib-name">
              Library name
            </label>
            <input
              id="lib-name"
              value={libraryName}
              onChange={(e) => setLibraryName(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="quality">
              Average quality
            </label>
            <select
              id="quality"
              value={quality}
              onChange={(e) => setQuality(e.target.value as keyof typeof GB_PER_MOVIE)}
              className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
            >
              <option value="480p">480p</option>
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
              <option value="4k">4K</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="movies">
              Movie count
            </label>
            <input
              id="movies"
              type="number"
              min={0}
              value={movieCount}
              onChange={(e) => setMovieCount(Number(e.target.value))}
              className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="episodes">
              TV episode count
            </label>
            <input
              id="episodes"
              type="number"
              min={0}
              value={tvEpisodes}
              onChange={(e) => setTvEpisodes(Number(e.target.value))}
              className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
            />
          </div>
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-[#c4c4c4]">
          <input checked={includeAnime} onChange={(e) => setIncludeAnime(e.target.checked)} type="checkbox" />
          Include Anime folder
        </label>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#090909] p-4">
            <p className="text-sm text-[#c4c4c4]">Movies</p>
            <p className="text-xl text-white">{estimate.movieGb.toFixed(0)} GB</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#090909] p-4">
            <p className="text-sm text-[#c4c4c4]">TV episodes</p>
            <p className="text-xl text-white">{estimate.tvGb.toFixed(0)} GB</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#090909] p-4">
            <p className="text-sm text-[#c4c4c4]">Total estimate</p>
            <p className="text-xl text-white">
              {estimate.totalGb.toFixed(0)} GB ({estimate.totalTb.toFixed(2)} TB)
            </p>
          </div>
        </div>
        <pre className="mt-6 overflow-auto rounded-xl border border-white/10 bg-[#090909] p-4 text-sm text-white">
          {structure}
        </pre>
      </div>
    </div>
  );
}
