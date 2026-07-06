"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";

type Details = {
  amenities: string[];
  maxGuests: number;
  bedType: string;
  extraInfo: string;
};

type Item = {
  id: string;
  name: string;
  price: number;
  images: string[];
  description?: string;
  details: Details;
};

export default function RoomDetailModal({
  item,
  onClose,
}: {
  item: Item;
  onClose: () => void;
}) {
  const { addToCart } = useCart();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/60 p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-cream rounded-2xl shadow-2xl overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-cream/90 p-2 text-espresso shadow-lg transition hover:bg-cream"
        >
          ×
        </button>

        <div className="h-72 overflow-hidden">
          <div className="flex h-72 w-full">
            {item.images.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-full relative h-72">
                <Image src={img} alt={`${item.name} photo ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-3xl font-semibold text-espresso">
            {item.name}
          </h3>
          <p className="mt-3 text-espresso/70">{item.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-espresso">Amenities</p>
              <ul className="mt-2 space-y-2 text-sm text-espresso/80">
                {item.details.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-moss" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-espresso">Details</p>
              <ul className="mt-2 space-y-2 text-sm text-espresso/80">
                <li>Max guests: {item.details.maxGuests}</li>
                <li>Bed type: {item.details.bedType}</li>
                <li>{item.details.extraInfo}</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="font-display text-2xl font-semibold text-espresso">₹{item.price.toLocaleString("en-IN")}</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  addToCart({ id: item.id, name: item.name, price: item.price });
                  onClose();
                }}
                className="btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
