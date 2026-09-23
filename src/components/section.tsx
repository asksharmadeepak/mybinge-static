import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  narrow?: boolean;
};

export function Section({ id, eyebrow, title, subtitle, children, narrow }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className={`mb-10 ${narrow ? "max-w-2xl" : "max-w-3xl"}`}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">{eyebrow}</p>
        ) : null}
        <h2 className="font-heading text-3xl leading-tight tracking-tight text-white md:text-5xl">{title}</h2>
        {subtitle ? <p className="mt-4 text-base leading-relaxed text-[#c4c4c4] md:text-lg">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
