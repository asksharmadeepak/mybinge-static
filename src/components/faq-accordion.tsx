"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
      {items.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="text-base font-medium text-white md:text-lg">{faq.q}</span>
              <span className="mt-0.5 text-[#8a8a8a]" aria-hidden>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? <p className="pb-6 text-sm leading-relaxed text-[#c4c4c4] md:text-base">{faq.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
