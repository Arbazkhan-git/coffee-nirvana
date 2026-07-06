"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  const featured = galleryImages[0];
  const rest = galleryImages.slice(1);

  return (
    <section id="gallery" className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="The Estate"
          description="Twenty-two acres of shade-grown coffee, pepper vines, and the kind of mornings that stay with you."
        />
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-premium-lg md:aspect-[21/9]">
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative mt-10 md:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream-dark to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream-dark to-transparent md:w-24" />

        <div className="gallery-scroll flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory md:gap-5 md:px-8">
          {rest.map((image, i) => (
            <div
              key={image.src}
              className="group relative h-[22rem] w-[17rem] flex-shrink-0 snap-center overflow-hidden rounded-sm shadow-card md:h-[26rem] md:w-[20rem]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 768px) 272px, 320px"
              />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/10" />
              <span className="caption-label absolute bottom-4 left-4 text-cream/0 transition-all duration-500 group-hover:text-cream/90">
                {String(i + 2).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
