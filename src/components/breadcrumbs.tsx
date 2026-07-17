import Link from "next/link";

type Breadcrumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#9a9a9a]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span>/</span> : null}
            <Link href={item.href} className="hover:text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
