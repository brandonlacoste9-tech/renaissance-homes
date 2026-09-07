import { Cta } from "@/components/chrome";
import { HomeCard } from "@/components/cards";
import { PLANS } from "@/lib/data";

export default function CustomHomesPage() {
  const plans = PLANS.filter((p) => p.kind === "custom");
  return (
    <main>
      <section className="relative min-h-[48vh] text-cream">
        <img src="/homes/thoma.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Custom Homes</p>
          <h1 className="serif mt-3 max-w-[14ch] text-5xl md:text-6xl">Your land, their plan, one team</h1>
          <p className="mt-5 max-w-xl text-cream/80">
            Site visit, in-house architecture, Design Studio, then a fixed upfront price. Most homes finish 9 to 11 months after the foundation is poured.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((home) => (
            <HomeCard key={home.slug} home={home} href="/plans" />
          ))}
        </div>
        <div className="mt-12">
          <Cta href="/contact">Start a land consultation</Cta>
        </div>
      </section>
    </main>
  );
}
