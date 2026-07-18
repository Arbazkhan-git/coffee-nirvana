"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  const featured = galleryImages[4];
  const highlights = galleryImages.slice(0, 4);
  const extras = galleryImages.slice(4, 12);

  return (
    <section id="gallery" className="bg-sage/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="Estate Moments"
          description="Browse a premium selection of photos showing our homestay, coffee gardens and the natural beauty that surrounds Coffee Nirvana."
          align="center"
          dark
        />
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-premium-lg">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full bg-forest/80 px-4 py-2 text-sm font-medium text-cream shadow-sm">
              Coffee estate sunrise
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((image) => (
              <div key={image.src} className="relative overflow-hidden rounded-[1.5rem] shadow-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 45vw, 45vw"
                />
                <div className="absolute inset-0 bg-forest/0 transition duration-500 hover:bg-forest/10" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-forest/10 bg-olive/10 px-4 py-6 shadow-[0_24px_56px_-32px_rgba(20,44,30,0.14)] sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold text-forest">More photos to explore</p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-forest/70">
                Scroll through extra images of the homestay, gardens and coffee country for a richer sense of the stay.
              </p>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary whitespace-nowrap"
            >
              View Visit Details
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {extras.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-[1.5rem] border border-forest/10 bg-cream shadow-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={540}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
