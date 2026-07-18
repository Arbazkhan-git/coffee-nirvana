"use client";

import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

function InfoIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-forest/10 text-forest">
      {children}
    </div>
  );
}

export default function Amenities() {
  const mapUrl = "https://www.google.com/maps?q=13.1147090,75.5940930&z=15";

  return (
    <section id="visit" className="bg-cream py-20 md:py-28">
      <div className="section-divider mb-20 md:mb-28" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Discover Coffee Nirvana"
          title="Location, Contact & Estate Comfort"
          description="Everything you need before your stay: exact location, contact details, food options and amenities that make the homestay premium."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8 rounded-[2rem] border border-forest/10 bg-sage/10 p-8 shadow-[0_24px_56px_-32px_rgba(20,44,30,0.12)]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-forest/70">Location</p>
              <div className="rounded-3xl border border-forest/10 bg-cream p-6">
                <p className="font-display text-xl text-forest">Coffee Nirvana Homestay</p>
                <p className="mt-2 text-sm text-forest/80">Bamboo Village, Mudigere</p>
                <p className="text-sm text-forest/80">Chikkamagaluru – 577132, Karnataka</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-cream p-6 shadow-card">
                <div className="flex items-center gap-3 text-forest">
                  <InfoIcon>☎️</InfoIcon>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-forest/70">Contact for enquiry</p>
                    <p className="mt-2 font-display text-lg text-forest">+91 94826 69139</p>
                    <p className="text-sm text-forest/70">+91 97425 56636</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+919482669139"
                    className="inline-flex rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream transition hover:bg-leaf"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/919482669139"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-forest px-4 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-cream"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-cream p-6 shadow-card">
                <div className="flex items-center gap-3 text-forest">
                  <InfoIcon>🍽️</InfoIcon>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-forest/70">Food</p>
                    <p className="mt-2 font-display text-lg text-forest">Unlimited Homemade Malnad Cuisine</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-forest/80">
                  <p>Vegetarian & non-vegetarian options.</p>
                  <p className="text-forest/60">(Terms & Conditions Apply)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-forest/70">Amenities</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Nature-Friendly Homestay",
                  "24×7 Hot Water",
                  "Comfortable Rooms",
                  "Family-Friendly",
                  "Pets allowed",
                  "Guided Estate Walk",
                  "Fishing Experience",
                  "Campfire available",
                  "Free Wi-Fi",
                  "Free Parking",
                  "Pick up And drop Available (Terms & Conditions Apply)",
                  "4*4 vehicle available for visiting off-road places (Terms & Conditions Apply)",
                  "Rain Dance (if available)",
                  "Scenic Photography Spots",
                  "Sunrise & Sunset Views",
                  "Beautiful Coffee Estate",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-forest/10 bg-cream px-4 py-3 text-sm text-forest/80 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-forest/15 bg-forest/5 shadow-premium">
            <iframe
              title="Coffee Nirvana location on Google Maps"
              src="https://maps.google.com/maps?q=13.1147090,75.5940930&z=15&output=embed"
              width="100%"
              height="570"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-forest/95 px-8 py-6 text-cream">
              <p className="text-sm uppercase tracking-[0.24em] text-cream/60">Map</p>
              <p className="mt-3 text-lg font-semibold">Open directions to Coffee Nirvana</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-cream px-5 py-3 text-sm font-medium text-forest shadow-sm transition hover:bg-olive"
                >
                  Open Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/place/13.1147090,75.5940930"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-cream/30 bg-transparent px-5 py-3 text-sm font-medium text-cream transition hover:bg-cream/10"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
