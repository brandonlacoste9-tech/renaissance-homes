import { Cta } from "@/components/chrome";

const STEPS = [
  { n: "01", t: "Site evaluation", b: "The team visits the lot, reviews permits, placement, and views, then estimates site costs. Complimentary." },
  { n: "02", t: "Plan design", b: "In-house plans, or a plan from the library, adjusted to the land and how you live." },
  { n: "03", t: "Design Studio", b: "Pam Criswell leads interior selections: finishes, stone, millwork, lighting. Under one roof." },
  { n: "04", t: "Fixed price", b: "A locked upfront price before construction. No trimming the wish list for surprises." },
];

export default function StudioPage() {
  return (
    <main>
      <section className="relative min-h-[46vh] text-cream">
        <img src="/homes/studio.jpg" alt="Design studio materials" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Design Studio</p>
          <h1 className="serif mt-3 max-w-[14ch] text-5xl">Selections with the people who will build it</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="text-mute">
            Unique to Renaissance: architecture, interiors, and construction sit together. After the foundation, most homes complete in 9 to 11 months. A quality assurance manager stays with you through warranty.
          </p>
          <div className="mt-10 grid gap-6">
            {STEPS.map((s) => (
              <article key={s.n} className="border-t border-line pt-5">
                <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{s.n}</p>
                <h2 className="serif mt-1 text-3xl">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.b}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Cta href="/contact">Book the studio</Cta>
          </div>
        </div>
        <img src="/homes/kitchen.jpg" alt="Luxury kitchen selections" className="h-full min-h-[28rem] w-full object-cover" />
      </section>
    </main>
  );
}
