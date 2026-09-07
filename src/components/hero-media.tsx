"use client";

export function HeroMedia() {
  return (
    <>
      <img
        src="/homes/hero.jpg"
        alt="Luxury custom estate at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/homes/hero.jpg"
        aria-hidden="true"
      >
        <source src="/homes/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
}
