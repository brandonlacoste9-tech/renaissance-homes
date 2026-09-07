"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LISTINGS, PLANS, QUOTES, type Plan } from "@/lib/data";

export function HomeCard({ home, href }: { home: Plan; href?: string }) {
  const to = href ?? (home.kind === "ready" || home.kind === "coming" ? "/available-homes" : "/plans");
  return (
    <Link href={to} className="group block">
      <div className="overflow-hidden bg-cream">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={home.image}
            alt={home.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="border border-t-0 border-line px-5 py-5">
          <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{home.tags[0]}</p>
          <h3 className="serif mt-1 text-2xl">{home.name}</h3>
          <p className="mt-2 text-sm text-mute">{home.location}</p>
          <p className="mt-3 text-sm text-slate">
            {home.beds === "Lakefront"
              ? "Lakefront custom on Lake Oswego"
              : `${home.sqft} sf · ${home.beds} bed · ${home.baths} bath${home.price ? ` · ${home.price}` : ""}`}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedGrid() {
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Custom Homes", "Move-In Ready"];
  const items = useMemo(() => {
    const custom = PLANS.filter((p) => ["thoma", "turner", "sunningdale", "allegro", "south-shore"].includes(p.slug));
    const ready = LISTINGS.filter((p) => p.kind === "ready");
    if (tab === "Custom Homes") return custom;
    if (tab === "Move-In Ready") return ready;
    return [...custom, ...ready];
  }, [tab]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Portfolio</p>
          <h2 className="serif mt-2 max-w-[14ch] text-4xl md:text-5xl">Featured models and inventory</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`h-10 px-4 text-[11px] tracking-[0.14em] uppercase ${
                tab === t ? "bg-ink text-cream" : "border border-line text-slate hover:border-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((home) => (
          <HomeCard key={home.slug} home={home} />
        ))}
      </div>
    </section>
  );
}

export function QuoteSlider() {
  const [i, setI] = useState(0);
  const q = QUOTES[i]!;
  return (
    <section className="bg-ink px-5 py-20 text-cream">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Homeowners</p>
        <blockquote className="serif mt-6 text-3xl leading-snug md:text-4xl">“{q.body}”</blockquote>
        <p className="mt-6 text-sm tracking-[0.12em] uppercase text-cream/60">
          {q.name} · {q.source}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setI((n) => (n === 0 ? QUOTES.length - 1 : n - 1))}
            className="grid h-11 w-11 place-items-center border border-cream/20 hover:border-gold"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => setI((n) => (n + 1) % QUOTES.length)}
            className="grid h-11 w-11 place-items-center border border-cream/20 hover:border-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
