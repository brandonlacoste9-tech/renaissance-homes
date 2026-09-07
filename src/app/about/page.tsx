import { TEAM } from "@/lib/data";

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[46vh] text-cream">
        <img src="/homes/south-shore.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">About</p>
          <h1 className="serif mt-3 max-w-[16ch] text-5xl">Oregon luxury, forty years in</h1>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-slate">
        <p>
          Renaissance Homes has designed and built custom luxury homes from Lake Oswego since 1984. Randy Sebastian is founder and president. The printed claim: no other local builder has this mix of Street of Dreams record, in-house AIA architecture, and a professional interior team.
        </p>
        <p className="mt-6">
          Work runs from North Portland to Salem, the Gorge to wine country. Move-in ready homes sit beside full custom on your lot. ENERGY STAR certification is part of the published green-building story.
        </p>
        <p className="mt-6">
          CCB 49955. Corporate office at 16771 Boones Ferry Rd., Lake Oswego, OR 97035.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <h2 className="serif text-4xl">The team as printed</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <article key={p.name} className="border border-line bg-white p-6">
              <h3 className="serif text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm text-mute">{p.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
