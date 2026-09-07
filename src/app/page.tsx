import { Award, Leaf, MapPin, Shield } from "lucide-react";
import { Cta } from "@/components/chrome";
import { FeaturedGrid, QuoteSlider } from "@/components/cards";
import { HeroMedia } from "@/components/hero-media";

const DIFFERENCE = [
  {
    icon: MapPin,
    title: "Local since 1984",
    body: "Lake Oswego studio. Custom work from North Portland to Salem, the Gorge to wine country.",
  },
  {
    icon: Shield,
    title: "Building standards",
    body: "In-house plan design, a construction manager, and a quality assurance manager through warranty.",
  },
  {
    icon: Leaf,
    title: "ENERGY STAR",
    body: "Printed as the largest builder of ENERGY STAR certified homes in Oregon. Green building is part of the process.",
  },
  {
    icon: Award,
    title: "Street of Dreams",
    body: "Most awarded builder in NW Natural Street of Dreams history. 54 awards, including 9 Best of Show.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden text-cream">
        <HeroMedia />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32">
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Lake Oswego · CCB 49955</p>
          <h1 className="serif mt-4 max-w-[16ch] text-5xl leading-[0.95] md:text-7xl">
            The Best Built Homes Are Renaissance Homes
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80">
            Custom luxury, move-in ready inventory, and an in-house Design Studio. Fixed upfront pricing. Team under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="/custom-homes">Explore Custom Homes</Cta>
            <Cta href="/available-homes" light>
              View Available Inventory
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="text-[11px] tracking-[0.2em] uppercase text-gold">The Renaissance Difference</p>
        <h2 className="serif mt-3 max-w-[16ch] text-4xl md:text-5xl">Decades of craft, under one roof</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DIFFERENCE.map((item) => (
            <article key={item.title} className="border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(28,25,22,0.08)]">
              <item.icon className="text-gold" size={22} />
              <h3 className="serif mt-4 text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <FeaturedGrid />
      <QuoteSlider />
    </main>
  );
}
