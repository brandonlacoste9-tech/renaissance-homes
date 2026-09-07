import { InquiryForm } from "@/components/inquiry-form";
import { SITE, TEAM } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-[11px] tracking-[0.2em] uppercase text-gold">Contact</p>
        <h1 className="serif mt-2 text-5xl">Come see for yourself</h1>
        <p className="mt-4 max-w-xl text-mute">
          Tours, land, and Design Studio. The live site uses a Drupal form. This preview validates locally and opens your email app to the printed custom homes sales address.
        </p>
        <div className="mt-10 grid gap-2 text-sm">
          <p>
            {SITE.address1}
            <br />
            {SITE.address2}
          </p>
          <p>
            <a className="text-bronze hover:underline" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
          </p>
          <p>
            <a className="text-bronze hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <p className="text-mute">{SITE.ccb}</p>
        </div>
        <ul className="mt-10 grid gap-3 text-sm text-slate">
          {TEAM.slice(2, 5).map((p) => (
            <li key={p.name}>
              <span className="text-ink">{p.name}</span>
              <span className="text-mute"> · {p.role}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-line bg-white p-6 md:p-8">
        <h2 className="serif text-3xl">Inquiry</h2>
        <p className="mt-2 mb-6 text-sm text-mute">Private tour, custom, inventory, or land.</p>
        <InquiryForm />
      </div>
    </main>
  );
}
