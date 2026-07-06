"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type CartItem = { id: string; name: string; price: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  bookViaWhatsApp: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => setCart((prev) => [...prev, item]);

  const removeFromCart = (index: number) =>
    setCart((prev) => prev.filter((_, i) => i !== index));

  const bookViaWhatsApp = () => {
    const phone = "918660816216";
    if (cart.length === 0) return;
    const lines = cart
      .map((item) => `- ${item.name} (₹${item.price})`)
      .join("\n");
    const total = cart.reduce((sum, i) => sum + i.price, 0);
    const message = `Hi! I'd like to book the following at Coffee Nirvana:\n\n${lines}\n\nTotal: ₹${total}\n\nPlease confirm availability.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, bookViaWhatsApp }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
