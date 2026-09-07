"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/data";

const INTERESTS = [
  "Schedule a private tour",
  "Custom home on my land",
  "Move-in ready inventory",
  "Land consultation",
  "Design Studio",
];

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const interest = String(fd.get("interest") || "");
    const message = String(fd.get("message") || "").trim();
    if (!name || !email) {
      setError("Name and email are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email.");
      return;
    }
    setError("");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(interest || "Renaissance Homes inquiry")}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-line bg-cream px-5 py-6 text-sm leading-relaxed text-slate">
        Your email app should open to {SITE.email}, the printed custom homes sales address. This
        preview does not copy the live Drupal form.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-xs tracking-[0.16em] uppercase text-mute">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className="h-12 border border-line bg-white px-3 text-sm tracking-normal text-ink outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-1.5 text-xs tracking-[0.16em] uppercase text-mute">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-12 border border-line bg-white px-3 text-sm tracking-normal text-ink outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-1.5 text-xs tracking-[0.16em] uppercase text-mute">
        Phone
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="h-12 border border-line bg-white px-3 text-sm tracking-normal text-ink outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-1.5 text-xs tracking-[0.16em] uppercase text-mute">
        I am interested in
        <select
          name="interest"
          defaultValue={INTERESTS[0]}
          className="h-12 border border-line bg-white px-3 text-sm tracking-normal text-ink outline-none focus:border-gold"
        >
          {INTERESTS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-xs tracking-[0.16em] uppercase text-mute">
        Message
        <textarea
          name="message"
          rows={compact ? 4 : 6}
          className="border border-line bg-white px-3 py-3 text-sm tracking-normal text-ink outline-none focus:border-gold"
        />
      </label>
      {error ? <p className="text-sm text-bronze">{error}</p> : null}
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center bg-ink px-6 text-xs tracking-[0.18em] uppercase text-cream transition hover:bg-bronze"
      >
        Send inquiry
      </button>
    </form>
  );
}
