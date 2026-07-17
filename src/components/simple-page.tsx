import { CtaStrip } from "@/components/cta-strip";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function SimplePage({
  title,
  description,
  breadcrumbs,
  children,
}: {
  title: string;
  description: string;
  breadcrumbs: Array<{ name: string; href: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 md:px-8 md:py-20">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c4c4c4]">{description}</p>
      <div className="mt-10 space-y-5 text-[#c4c4c4]">{children}</div>
      <div className="mt-14">
        <CtaStrip />
      </div>
    </div>
  );
}
