import Image from "next/image";
import CoffeeBranchIcon from "./CoffeeBranchIcon";

export default function StoryStrip() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="section-divider absolute top-0" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12 md:gap-16 md:py-4">
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-premium-lg">
            <Image
              src="/images/gallery-09.jpg"
              alt="Ripe red coffee cherries on the branch at Coffee Nirvana"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden h-32 w-32 border border-copper/20 md:block" aria-hidden="true" />
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <span className="section-eyebrow">Our Story</span>
          <blockquote className="font-display text-2xl font-normal leading-snug tracking-display text-espresso md:text-3xl lg:text-[2rem] lg:leading-snug">
            &ldquo;This is not a resort. It is a quiet place to stay while the
            estate goes about its day.&rdquo;
          </blockquote>

          <CoffeeBranchIcon className="my-8 h-4 w-32 text-moss/50" />

          <div className="space-y-5 font-body text-base leading-[1.75] text-espresso/70 md:text-lg">
            <p>
              Coffee Nirvana sits on a working plantation in Chikkamagaluru — rows
              of shade-grown arabica, pepper vines on old trees, and mornings that
              start with filter coffee and birdsong.
            </p>
            <p>
              The mist rolls in from the Ghats most mornings. You can walk the
              estate paths before breakfast, watch cherries being sorted, and be
              back in time for home-cooked meals on the verandah.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-copper/20 pt-8">
            <div>
              <dt className="caption-label">Elevation</dt>
              <dd className="mt-1 font-display text-xl text-espresso">3,400 ft</dd>
            </div>
            <div>
              <dt className="caption-label">Region</dt>
              <dd className="mt-1 font-display text-xl text-espresso">Western Ghats</dd>
            </div>
            <div>
              <dt className="caption-label">Crop</dt>
              <dd className="mt-1 font-display text-xl text-espresso">Arabica</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
