"use client";

import { useMemo, useState } from "react";

export default function FolderStructureGeneratorPage() {
  const [libraryName, setLibraryName] = useState("My Library");
  const [includeAnime, setIncludeAnime] = useState(true);

  const structure = useMemo(() => {
    const lines = [
      `${libraryName}/`,
      `  Movies/`,
      `    Movie Title (Year)/`,
      `  TV Shows/`,
      `    Show Name/Season 01/`,
      `  Personal Videos/`,
      `    Events/`,
    ];
    if (includeAnime) {
      lines.push(`  Anime/`, `    Series Name/Season 01/`);
    }
    return lines.join("\n");
  }, [libraryName, includeAnime]);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 md:py-16">
      <h1 className="text-4xl font-semibold text-white">Folder Structure Generator</h1>
      <p className="mt-3 text-[#c4c4c4]">Build a consistent folder template for scalable offline media management.</p>
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
        <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="library-name">
          Library root name
        </label>
        <input
          id="library-name"
          value={libraryName}
          onChange={(event) => setLibraryName(event.target.value)}
          className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
        />
        <label className="mt-4 flex items-center gap-2 text-sm text-[#c4c4c4]">
          <input checked={includeAnime} onChange={(event) => setIncludeAnime(event.target.checked)} type="checkbox" />
          Include anime folder branch
        </label>
        <pre className="mt-6 overflow-auto rounded-xl border border-white/10 bg-[#090909] p-4 text-sm text-white">
          {structure}
        </pre>
      </div>
    </div>
  );
}
