import CoffeeBranchIcon from "./CoffeeBranchIcon";

export default function Footer() {
  return (
    <footer className="bg-espresso py-16 text-cream">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <CoffeeBranchIcon className="mx-auto mb-8 h-4 w-28 text-copper/70" />

        <p className="font-display text-2xl font-semibold">Coffee Nirvana</p>

        <address className="mt-8 space-y-2 font-body text-sm not-italic text-cream/75">
          <p>
            <a
              href="tel:+919482669139"
              className="transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            >
              94826 69139
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/coffeenirvana"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            >
              @coffeenirvana
            </a>
          </p>
          <p className="pt-2">
            Coffee Estate, Chikkamagaluru
            <br />
            Karnataka 577101, India
          </p>
        </address>

        <p className="mt-12 font-body text-xs text-cream/40">
          © {new Date().getFullYear()} Coffee Nirvana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
