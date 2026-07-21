"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { useRef, useState } from "react";
import RoomDetailModal from "./RoomDetailModal";

type RoomCardProps = {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  priceLabel?: string;
  details?: any;
};

export default function RoomCard({
  id,
  name,
  price,
  images,
  description,
  priceLabel = "night",
  details,
}: RoomCardProps) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const slideW = el.clientWidth;
    const idx = Math.round(el.scrollLeft / Math.max(1, slideW));
    setActive(idx);
  }

  return (
    <article className="group flex flex-col">
      <div
        className="flex overflow-x-auto snap-x snap-mandatory rounded-t-xl h-48 relative shadow-card transition-all duration-500 group-hover:shadow-premium-lg [&::-webkit-scrollbar]:hidden"
        ref={scrollRef}
        onScroll={onScroll}
        onClick={() => setShowModal(true)}
        role="button"
      >
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-full snap-center relative h-48">
            <Image
              src={img}
              alt={`${name} photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-espresso/5 to-transparent opacity-80" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === active ? "bg-espresso" : "bg-espresso/30"}`}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-display text-2xl font-semibold tracking-display text-espresso">
          {name}
        </h3>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-espresso/60 md:text-[0.9375rem]">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              addToCart({ id, name, price });
              setAdded(true);
              window.setTimeout(() => setAdded(false), 1200);
            }}
            className="btn-outline"
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center rounded-full border border-espresso/15 bg-transparent px-4 py-2.5 font-body text-sm font-semibold text-espresso transition hover:border-espresso hover:bg-espresso/5"
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <RoomDetailModal
          item={{ id, name, price, images, description, details }}
          onClose={() => setShowModal(false)}
        />
      )}
    </article>
  );
}
