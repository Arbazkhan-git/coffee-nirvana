"use client";

import Image from "next/image";
import CoffeeBranchIcon from "./CoffeeBranchIcon";
import { galleryImages } from "@/lib/data";

export default function Hero() {
  const featured = galleryImages[9];

  const scrollToRooms = () => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  const scrollToGallery = () => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  const scrollToNearby = () => document.getElementById("nearby")?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-br from-espresso via-[#3b2e1e] to-cream/15">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%)]" />
      <div className="pointer-events-none absolute -left-12 top-16 h-44 w-44 rounded-full bg-cream/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#d1a86b]/15 blur-[120px]" />

      <div className="absolute inset-0">
        <Image
          src={featured.src}
          alt={featured.alt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/80 to-espresso/35" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,17,0.15)_0%,rgba(17,19,17,0.25)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-16">
        <div className="max-w-2xl hero-fade-up">
          <CoffeeBranchIcon className="mb-6 h-5 w-36 text-cream/80" />

          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-[5.5rem]">
            Coffee Nirvana Homestay
          </h1>

          <p className="mt-5 max-w-xl font-body text-lg leading-8 text-cream/85 sm:text-xl">
            Quiet rooms, green plantation views, and mornings that slow down.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={scrollToRooms} className="btn-primary w-full sm:w-auto">
              Explore Rooms
            </button>
            <button type="button" onClick={scrollToGallery} className="btn-outline w-full sm:w-auto">
              View Gallery
            </button>
          </div>
        </div>
      </div>

      <div className="hero-bottom-strip absolute inset-x-0 bottom-6 z-20 flex justify-center px-4 sm:bottom-8">
        <div className="relative flex w-full max-w-3xl items-center overflow-hidden rounded-full border border-cream/20 bg-espresso/70 py-3 px-4 text-[0.72rem] uppercase tracking-[0.18em] text-cream/85 shadow-[0_16px_50px_-30px_rgba(0,0,0,0.45)] sm:text-sm">
          <div className="hero-strip-track absolute inset-y-0 left-0 h-full w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-90" />
          <div className="relative z-10 flex min-w-[200%] items-center gap-8 animate-hero-strip-scroll">
            <span className="whitespace-nowrap">
              Private verandahs • Fresh breakfast served daily • Nature trails nearby
            </span>
            <span className="whitespace-nowrap">
              Private verandahs • Fresh breakfast served daily • Nature trails nearby
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
