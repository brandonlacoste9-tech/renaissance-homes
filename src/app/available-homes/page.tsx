import { Cta } from "@/components/chrome";
import { LISTINGS } from "@/lib/data";

export default function AvailablePage() {
  const ready = LISTINGS.filter((h) => h.kind === "ready");
  const soon = LISTINGS.filter((h) => h.kind === "coming");
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Inventory</p>
      <h1 className="serif mt-2 text-5xl">Available Homes</h1>
      <p className="mt-4 max-w-2xl text-mute">
        Move-in ready and coming soon listings printed on renaissance-homes.com. Prices and dates are subject to change.
      </p>

      <h2 className="serif mt-14 text-3xl">Move-in ready</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {ready.map((home) => (
          <article key={home.slug} className="grid overflow-hidden border border-line bg-white md:grid-cols-2">
            <div className="overflow-hidden">
              <img src={home.image} alt={home.name} className="h-full min-h-56 w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="flex flex-col p-6">
              <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{home.location}</p>
              <h3 className="serif mt-2 text-2xl">{home.name}</h3>
              <p className="mt-3 text-lg text-ink">{home.price}</p>
              <p className="mt-2 text-sm text-mute">
                {home.sqft} sf · {home.beds} bed · {home.baths} bath · {home.garage}-car
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{home.blurb}</p>
              <div className="mt-6">
                <Cta href="/contact">Inquire</Cta>
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2 className="serif mt-16 text-3xl">Coming soon</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {soon.map((home) => (
          <article key={home.slug} className="border border-line bg-white">
            <div className="overflow-hidden">
              <img src={home.image} alt={home.name} className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{home.location}</p>
              <h3 className="serif mt-1 text-2xl">{home.name}</h3>
              <p className="mt-2 text-sm text-mute">
                {home.sqft} sf · {home.beds} bed · {home.baths} bath
              </p>
              <p className="mt-3 text-sm text-slate">{home.blurb}</p>
              <div className="mt-5">
                <Cta href="/contact">Request details</Cta>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
