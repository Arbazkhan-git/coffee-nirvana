"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "@/lib/cart-context";

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  );
}

type CartLineProps = {
  name: string;
  price: number;
  index: number;
  onRemove: (index: number) => void;
  isLast: boolean;
};

function CartLine({ name, price, index, onRemove, isLast }: CartLineProps) {
  const [visible, setVisible] = useState(false);
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove(index), 300);
  };

  return (
    <li
      className={`group flex items-center justify-between gap-4 py-3.5 transition-all duration-300 motion-reduce:transition-none ${
        !isLast ? "border-b border-mist/50" : ""
      } ${
        removing
          ? "max-h-0 overflow-hidden opacity-0 -translate-y-1 py-0"
          : visible
            ? "max-h-24 opacity-100 translate-y-0"
            : "max-h-0 overflow-hidden opacity-0 -translate-y-2"
      }`}
    >
      <span className="font-body text-sm font-medium leading-snug text-espresso">
        {name}
      </span>
      <div className="flex shrink-0 items-center gap-3">
        <span className="font-body text-sm tabular-nums text-espresso/50">
          ₹{price.toLocaleString("en-IN")}
        </span>
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${name}`}
          className="flex h-7 w-7 items-center justify-center rounded-full text-lg leading-none text-espresso/25 opacity-40 transition-all hover:bg-mist/80 hover:text-espresso group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-copper md:opacity-0"
        >
          ×
        </button>
      </div>
    </li>
  );
}

export default function Cart() {
  const { cart, removeFromCart, bookViaWhatsApp } = useCart();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const previousCartLength = useRef(cart.length);
  const [cartPulse, setCartPulse] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (cart.length > 0) {
      setMounted(true);
      if (cart.length > previousCartLength.current) {
        setOpen(true);
        setCartPulse(true);
        window.setTimeout(() => setCartPulse(false), 900);
      }
      previousCartLength.current = cart.length;
    } else {
      setOpen(false);
      const timer = setTimeout(() => setMounted(false), 300);
      previousCartLength.current = 0;
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  if (!mounted && cart.length === 0) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-500 motion-reduce:transition-none ${
        cart.length > 0
          ? "scale-100 opacity-100"
          : "pointer-events-none scale-95 opacity-0"
      } bottom-0 left-0 right-0 md:bottom-8 md:left-auto md:right-8 md:w-auto`}
    >
      {open && (
        <div
          className="fixed inset-0 bg-espresso/30 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="relative md:max-w-[380px]">
        {open && (
          <div className="mb-0 rounded-t-2xl border border-mist/80 bg-cream/95 p-6 shadow-premium-lg backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none md:mb-4 md:rounded-2xl">
            <div className="flex items-center justify-between">
              <p className="caption-label">Your Selection</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-espresso/40 transition-colors hover:bg-mist/60 hover:text-espresso md:hidden"
                aria-label="Close cart"
              >
                ×
              </button>
            </div>
            <div className="mb-5 mt-3 h-px bg-gradient-to-r from-copper/50 via-copper/20 to-transparent" />

            <ul className="max-h-56 overflow-y-auto">
              {cart.map((item, index) => (
                <CartLine
                  key={`${item.id}-${index}`}
                  name={item.name}
                  price={item.price}
                  index={index}
                  onRemove={removeFromCart}
                  isLast={index === cart.length - 1}
                />
              ))}
            </ul>

            <div className="mt-5 flex items-end justify-between border-t border-copper/30 pt-5">
              <span className="caption-label">Total</span>
              <span className="font-display text-3xl font-semibold tabular-nums tracking-display text-espresso">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="button"
              onClick={bookViaWhatsApp}
              className="btn-primary mt-6 w-full"
            >
              Book via WhatsApp
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center justify-between gap-4 bg-espresso px-6 py-4 font-body text-sm font-medium text-cream shadow-premium-lg transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper md:w-auto md:justify-center md:rounded-full md:px-6 md:py-3.5 ${cartPulse ? "ring-2 ring-copper/70" : ""}`}
          aria-expanded={open}
          aria-label={`Cart with ${cart.length} items, total ₹${total.toLocaleString("en-IN")}`}
        >
          <span className="flex items-center gap-3">
            <CartIcon />
            <span className="hidden sm:inline">
              {open ? "Hide selection" : "Your selection"}
            </span>
          </span>
          <span className="flex items-center gap-3">
            <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-copper px-2 text-xs font-medium tabular-nums">
              {cart.length}
            </span>
            <span className="font-display text-base tabular-nums">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
