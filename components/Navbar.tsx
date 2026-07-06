"use client";

import { useEffect, useState } from "react";
import CoffeeBranchIcon from "./CoffeeBranchIcon";

const links = [
  { label: "The Estate", href: "#gallery" },
  { label: "Rooms", href: "#rooms" },
  { label: "Packages", href: "#packages" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-cream/10 bg-espresso/90 py-3 shadow-nav backdrop-blur-md"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
        >
          <CoffeeBranchIcon
            className={`h-3.5 w-20 transition-colors ${
              scrolled ? "text-copper/70" : "text-cream/60"
            }`}
          />
          <span
            className={`font-display text-lg font-semibold tracking-display transition-colors md:text-xl ${
              scrolled ? "text-cream" : "text-cream"
            }`}
          >
            Coffee Nirvana
          </span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => scrollTo(link.href)}
                className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-copper-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper ${
                  scrolled ? "text-cream/75" : "text-cream/80"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo("#rooms")}
            className={`hidden rounded-full border px-5 py-2 font-body text-xs font-medium uppercase tracking-caption transition-all md:inline-flex ${
              scrolled
                ? "border-copper/60 text-copper-light hover:bg-copper hover:text-cream"
                : "border-cream/30 text-cream/90 hover:border-cream hover:bg-cream/10"
            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper`}
          >
            Book a Stay
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
              scrolled ? "bg-espresso/10 text-cream" : "bg-transparent text-cream/90"
            }`}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.5h18M0 6h18M0 10.5h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[64px] z-40 bg-espresso/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setOpen(false);
                    scrollTo(link.href);
                  }}
                  className="text-cream/90 text-lg font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  scrollTo("#rooms");
                }}
                className="mt-4 rounded-full border border-copper/60 bg-transparent px-4 py-3 text-copper-light"
              >
                Book a Stay
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
