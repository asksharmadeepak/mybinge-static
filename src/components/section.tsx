import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-4 text-base leading-relaxed text-[#c4c4c4] md:text-lg">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
