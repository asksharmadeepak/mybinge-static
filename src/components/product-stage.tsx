import { DevicePreview } from "@/components/device-preview";

export function ProductStage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">The product</p>
      <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-tight text-white md:text-5xl">
        One library for your whole collection.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#c4c4c4] md:text-lg">
        Movies, TV shows, animation, and personal videos — switch Phone, Tablet, or TV to see the same local
        library on every screen. No server. No cloud locker.
      </p>
      <div className="mt-12">
        <DevicePreview id="product" />
      </div>
    </section>
  );
}
