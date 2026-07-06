"use client";

import Image from "next/image";
import CoffeeBranchIcon from "./CoffeeBranchIcon";
import { useEffect, useRef, useState } from "react";

const heroImages = [
  "/images/hero-01.jpg",
  "/images/hero-02.jpg",
  "/images/hero-03.jpg",
  "/images/hero-04.jpg",
  "/images/hero-05.jpg",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return; // no animation for reduced motion

    const tick = () => setActiveIndex((p) => (p + 1) % heroImages.length);
    if (paused) return;
    const interval = setInterval(tick, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setActiveIndex((p) => (p - 1 + heroImages.length) % heroImages.length);
      if (e.key === "ArrowRight") setActiveIndex((p) => (p + 1) % heroImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToRooms = () => {
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setPaused(true);
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const endX = event.changedTouches[0]?.clientX ?? null;
    if (touchStartX.current === null || endX === null) {
      touchStartX.current = null;
      setPaused(false);
      return;
    }

    const delta = touchStartX.current - endX;
    const threshold = 45;

    if (delta > threshold) {
      setActiveIndex((p) => (p + 1) % heroImages.length);
    } else if (delta < -threshold) {
      setActiveIndex((p) => (p - 1 + heroImages.length) % heroImages.length);
    }

    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <header
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === activeIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
            }`}
            aria-hidden={i !== activeIndex}
          >
            <Image
              src={img}
              alt="Coffee Nirvana estate"
              fill
              priority={i === 0}
              className={`object-cover motion-reduce:scale-100 animate-ken-burns motion-reduce:animate-none`}
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-transparent" />
        <div className="grain-overlay absolute inset-0" aria-hidden="true" />

        <div className="absolute left-1/2 bottom-6 z-20 -translate-x-1/2 flex items-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-cream/90 w-8 scale-100" : "bg-cream/30 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-36 md:pb-24 md:pt-40">
        <div className="max-w-2xl">
          <span className="caption-label mb-6 inline-block text-copper-light/90">
            Chikkamagaluru, Karnataka
          </span>

          <CoffeeBranchIcon className="mb-5 h-5 w-36 text-copper/70" />

          <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-display text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Coffee
            <br />
            Nirvana
          </h1>

          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-cream/80 md:text-xl md:leading-relaxed">
            A homestay inside a working coffee estate — shade trees, filter
            coffee, and quiet mornings in the Western Ghats.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="button" onClick={scrollToRooms} className="btn-primary">
              View Rooms &amp; Packages
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-body text-sm font-medium text-cream/70 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Explore the estate
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex motion-reduce:hidden"
        aria-hidden="true"
      >
        <span className="caption-label text-cream/40">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-cream/0 via-cream/50 to-cream/0 animate-scroll-hint motion-reduce:animate-none" />
      </div>
    </header>
  );
}
