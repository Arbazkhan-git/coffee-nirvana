import CoffeeBranchIcon from "./CoffeeBranchIcon";

export default function Footer() {
  return (
    <footer className="bg-forest py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <CoffeeBranchIcon className="h-4 w-28 text-olive/80" />
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight text-cream">
                Coffee Nirvana
              </p>
              <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-cream/75">
                A quiet homestay hidden in the coffee hills of Chikkamagaluru, offering handcrafted meals, restful nights, and a warm estate welcome.
              </p>
            </div>
            <address className="not-italic space-y-3 font-body text-sm text-cream/70">
              <p>📍 Bamboo Village, Mudigere</p>
              <p>Chikkamagaluru – 577132, Karnataka</p>
              <p>
                <a
                  href="tel:+919482669139"
                  className="transition-colors hover:text-cream"
                >
                  +91 94826 69139
                </a>
                <span className="mx-2">|</span>
                <a
                  href="tel:+919742556636"
                  className="transition-colors hover:text-cream"
                >
                  +91 97425 56636
                </a>
              </p>
            </address>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-cream/15 bg-forest/10 p-6">
              <p className="caption-label text-cream/70">Quick links</p>
              <ul className="mt-4 space-y-3 text-sm text-cream/80">
                <li>
                  <a href="#gallery" className="transition-colors hover:text-cream">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#packages" className="transition-colors hover:text-cream">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#visit" className="transition-colors hover:text-cream">
                    Visit & amenities
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-cream">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-cream/15 bg-forest/10 p-6">
              <p className="caption-label text-cream/70">Stay in touch</p>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">
                Reach out to ask about bookings, custom package options, or estate experiences.
              </p>
              <a
                href="mailto:info@coffeenirvana.in"
                className="mt-6 inline-flex rounded-full bg-cream px-4 py-3 text-sm font-medium text-forest transition hover:bg-olive/90"
              >
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-8 text-sm text-cream/60">
          <p>© {new Date().getFullYear()} Coffee Nirvana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
