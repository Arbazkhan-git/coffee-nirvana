"use client";

import SectionHeader from "./SectionHeader";

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h2.5a2 2 0 0 1 0 4H9V9Z" />
    </svg>
  );
}

function MealsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10v8M8 6v12M12 8v10M16 6v12M20 10v8" />
    </svg>
  );
}

function BonfireIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2 3-4 4-4 7a4 4 0 1 0 8 0c0-3-2-4-4-7Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
    </svg>
  );
}

function WalkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="5" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 9 2 4 3-1 2 7" />
    </svg>
  );
}

function PetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-6 w-6" aria-hidden="true">
      <circle cx="8" cy="6" r="1.5" />
      <circle cx="16" cy="6" r="1.5" />
      <circle cx="5" cy="11" r="1.5" />
      <circle cx="19" cy="11" r="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c-2 0-3.5 1.5-3.5 4v3h7v-3c0-2.5-1.5-4-3.5-4Z" />
    </svg>
  );
}

const amenities = [
  { icon: WifiIcon, label: "Wifi", detail: "Estate-wide coverage" },
  { icon: ParkingIcon, label: "Parking", detail: "On-site, free" },
  { icon: MealsIcon, label: "Home-cooked meals", detail: "Local Karnataka fare" },
  { icon: BonfireIcon, label: "Bonfire", detail: "Evenings on request" },
  { icon: WalkIcon, label: "Nature walks", detail: "Guided estate trails" },
  { icon: PetIcon, label: "Pet-friendly", detail: "Dogs welcome" },
];

export default function Amenities() {
  return (
    <section id="visit" className="bg-cream py-20 md:py-28">
      <div className="section-divider mb-20 md:mb-28" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Plan Your Visit"
          title="Location & Amenities"
          description="Deep in Chikkamagaluru coffee country — reachable by road from Bangalore in about four hours."
        />

        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {amenities.map(({ icon: Icon, label, detail }) => (
            <li key={label} className="group text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-moss/20 bg-cream text-moss transition-all duration-300 group-hover:border-copper/40 group-hover:bg-cream-dark group-hover:text-copper">
                <Icon />
              </div>
              <p className="mt-4 font-body text-sm font-medium text-espresso">
                {label}
              </p>
              <p className="mt-1 font-body text-xs text-espresso/45">{detail}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-8 md:grid-cols-5 md:gap-10">
          <div className="flex flex-col justify-center md:col-span-2">
            <span className="section-eyebrow">Getting Here</span>
            <h3 className="font-display text-2xl font-semibold tracking-display text-espresso">
              Chikkamagaluru, Karnataka
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-espresso/60 md:text-base">
              Coffee Estate, Chikkamagaluru District, Karnataka 577101. The
              nearest town is about 15 minutes by car. We will share exact
              directions when you book.
            </p>
            <a
              href="tel:+919482669139"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-copper transition-colors hover:text-copper-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            >
              94826 69139
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-sm border border-mist/80 shadow-premium md:col-span-3">
            {/*
              Arbaz: replace src below with your Google Maps embed URL
              Google Maps → Share → Embed a map → copy iframe src
            */}
            <iframe
              title="Coffee Nirvana location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d75.77!3d13.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE5JzEyLjAiTiA3NcKwNDYnMDguNCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-[20%] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
