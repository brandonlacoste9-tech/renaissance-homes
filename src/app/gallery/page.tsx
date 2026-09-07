import { GALLERY } from "@/lib/data";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Portfolio</p>
      <h1 className="serif mt-2 text-5xl">Gallery</h1>
      <p className="mt-4 max-w-xl text-mute">
        Exterior elevations, kitchens, primary suites, and outdoor living. Imagery is studio photography for this preview, not the live listing set.
      </p>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {GALLERY.map((item) => (
          <figure key={item.src + item.label} className="group mb-4 break-inside-avoid overflow-hidden bg-cream">
            <div className="overflow-hidden">
              <img
                src={item.src}
                alt={item.label}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${item.w === "tall" ? "aspect-[3/4]" : "aspect-[16/10]"}`}
              />
            </div>
            <figcaption className="px-3 py-3 text-[11px] tracking-[0.14em] uppercase text-mute">{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
