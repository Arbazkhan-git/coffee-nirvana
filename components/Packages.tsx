"use client";

import { packages } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import RoomCard from "./RoomCard";

export default function Packages() {
  return (
    <section id="packages" className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experiences"
          title="Packages"
          description="Walk the plantation, learn how your coffee is grown, and stay long enough to feel the rhythm of the estate."
          dark
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="[&_.btn-outline]:border-copper/50 [&_.btn-outline]:text-copper-light [&_.btn-outline]:hover:bg-copper [&_.btn-outline]:hover:text-cream [&_h3]:text-cream [&_p]:text-cream/55 [&_.caption-label]:text-copper/70">
              <RoomCard {...pkg} priceLabel="person" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
