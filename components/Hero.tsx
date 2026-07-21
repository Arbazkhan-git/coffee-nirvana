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
          <span className="caption-label mb-4 inline-flex rounded-full bg-cream/10 px-4 py-2 text-cream shadow-sm sm:mb-5">
            Chikkamagaluru · Coffee Estate Retreat
          </span>

          <CoffeeBranchIcon className="mb-5 h-5 w-36 text-cream/80 sm:mb-6" />

          <h1 className="font-display text-4xl font-semibold leading-[0.95] tracking-tight text-cream sm:text-5xl lg:text-[5.5rem]">
            Coffee Nirvana Homestay
          </h1>

          <p className="mt-5 max-w-xl font-body text-base leading-7 text-cream/85 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
            A calm homestay set inside a lush coffee estate near Mudigere. Wake up to misty mornings, filter coffee, and easy access to waterfalls, temples and trails in the Western Ghats.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={scrollToRooms} className="btn-primary w-full sm:w-auto">
              Explore Rooms
            </button>
            <button type="button" onClick={scrollToGallery} className="btn-outline w-full sm:w-auto">
              View Gallery
            </button>
            <button type="button" onClick={scrollToNearby} className="btn-outline w-full sm:w-auto">
              Nearby Attractions
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-[1.5rem] border border-cream/20 bg-cream/10 p-5 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-cream/70 sm:text-sm">Estate Highlights</p>
              <p className="mt-3 font-display text-2xl text-cream sm:text-3xl">10 acres</p>
              <p className="mt-2 text-sm text-cream/70">Shade-grown coffee estate and private verandahs</p>
            </div>
            <div className="rounded-[1.5rem] border border-cream/20 bg-cream/10 p-5 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-cream/70 sm:text-sm">Discover Nearby</p>
              <p className="mt-3 font-display text-2xl text-cream sm:text-3xl">20+ attractions</p>
              <p className="mt-2 text-sm text-cream/70">Waterfalls, viewpoints, temples and trekking routes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-strip relative border-t border-cream/15 bg-espresso/70 px-4 py-3 shadow-[0_-12px_50px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-[0.7rem] uppercase tracking-[0.2em] text-cream/80 sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cream/80 shadow-[0_0_0_4px_rgba(255,255,255,0.12)]" />
            Private verandahs
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cream/70" />
            Fresh breakfast served daily
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cream/70" />
            Nature trails nearby
          </div>
        </div>
      </div>
    </header>
  );
}
