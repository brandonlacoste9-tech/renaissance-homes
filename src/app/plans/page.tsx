import { Cta } from "@/components/chrome";
import { PLANS } from "@/lib/data";

export default function PlansPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Plans & Pricing</p>
      <h1 className="serif mt-2 max-w-[16ch] text-5xl">Every plan is designed in house</h1>
      <p className="mt-5 max-w-2xl text-mute">
        Base prices below are printed on the live plans page. There are additional site costs. Any exterior style can be adapted to the floor plan you choose.
      </p>
      <div className="mt-12 grid gap-8">
        {PLANS.map((plan) => (
          <article key={plan.slug} className="grid overflow-hidden border border-line bg-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden">
              <img src={plan.image} alt={plan.name} className="h-full min-h-72 w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="flex flex-col p-8">
              <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{plan.tags.join(" · ")}</p>
              <h2 className="serif mt-2 text-4xl">{plan.name}</h2>
              <p className="mt-3 text-xl">{plan.price ?? "Price on request"}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-mute">Bedrooms</dt>
                  <dd>{plan.beds}</dd>
                </div>
                <div>
                  <dt className="text-mute">Baths</dt>
                  <dd>{plan.baths}</dd>
                </div>
                <div>
                  <dt className="text-mute">Garage</dt>
                  <dd>{plan.garage}</dd>
                </div>
                <div>
                  <dt className="text-mute">Square feet</dt>
                  <dd>{plan.sqft}</dd>
                </div>
              </dl>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate">{plan.blurb}</p>
              <div className="mt-6">
                <Cta href="/contact">Request this plan</Cta>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
