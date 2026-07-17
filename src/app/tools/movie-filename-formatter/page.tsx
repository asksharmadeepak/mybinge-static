"use client";

import { useMemo, useState } from "react";

export default function MovieFilenameFormatterPage() {
  const [input, setInput] = useState("");
  const output = useMemo(() => {
    if (!input.trim()) return "";
    const cleaned = input
      .replace(/\.[a-z0-9]{2,4}$/i, "")
      .replace(/[._]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return cleaned
      .split(" ")
      .map((token) => token.charAt(0).toUpperCase() + token.slice(1).toLowerCase())
      .join(" ");
  }, [input]);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 md:py-16">
      <h1 className="text-4xl font-semibold text-white">Movie Filename Formatter</h1>
      <p className="mt-3 text-[#c4c4c4]">Paste a raw filename and get a cleaner title for better metadata matching.</p>
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
        <label htmlFor="filename-input" className="mb-2 block text-sm text-[#c4c4c4]">
          Raw filename
        </label>
        <input
          id="filename-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="e.g. interstellar.2014.1080p.bluray.x264.mkv"
          className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
        />
        <div className="mt-6">
          <p className="text-sm text-[#c4c4c4]">Formatted result</p>
          <p className="mt-2 rounded-xl border border-white/10 bg-[#090909] px-4 py-3 text-white">
            {output || "Your clean title appears here"}
          </p>
        </div>
      </div>
    </div>
  );
}
