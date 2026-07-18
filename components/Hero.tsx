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
    <header className="relative overflow-hidden bg-gradient-to-br from-espresso via-[#3b2e1e] to-cream/15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%)] pointer-events-none" />
      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20 lg:px-10">
        <div className="relative z-10">
          <span className="caption-label mb-5 inline-flex rounded-full bg-cream/10 px-4 py-2 text-cream shadow-sm">
            Chikkamagaluru · Coffee Estate Retreat
          </span>

          <CoffeeBranchIcon className="mb-6 h-5 w-36 text-cream/80" />

          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-[5.5rem]">
            Coffee Nirvana Homestay
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-8 text-cream/85 md:text-xl">
            A calm homestay set inside a lush coffee estate near Mudigere. Wake up to misty mornings, filter coffee, and easy access to waterfalls, temples and trails in the Western Ghats.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-cream/20 bg-cream/10 p-6 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-cream/70">Estate Highlights</p>
              <p className="mt-3 font-display text-3xl text-cream">10 acres</p>
              <p className="mt-2 text-sm text-cream/70">Shade-grown coffee estate and private verandahs</p>
            </div>
            <div className="rounded-[2rem] border border-cream/20 bg-cream/10 p-6 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-cream/70">Discover Nearby</p>
              <p className="mt-3 font-display text-3xl text-cream">20+ attractions</p>
              <p className="mt-2 text-sm text-cream/70">Waterfalls, viewpoints, temples and trekking routes</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-cream/15 bg-cream/5 shadow-[0_44px_120px_-58px_rgba(46,33,24,0.55)]">
          <Image
            src={featured.src}
            alt={featured.alt}
            width={1200}
            height={900}
            className="h-[28rem] w-full object-cover object-center sm:h-[34rem] md:h-[40rem]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/95 via-espresso/30 to-transparent px-6 py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-2xl font-semibold text-cream">Misty Morning Views</p>
                <p className="mt-2 text-sm text-cream/80">
                  One of the estate scenes you can explore during your stay.
                </p>
              </div>
              <div className="inline-flex rounded-full bg-cream/10 px-4 py-2 text-sm text-cream/90 backdrop-blur-sm">
                22 photos in gallery
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
