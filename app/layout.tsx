import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee Nirvana — Homestay on a Coffee Estate",
  description:
    "A quiet homestay inside a working coffee plantation in Chikkamagaluru, Karnataka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-cream text-forest antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <WhatsAppChatButton />
        </CartProvider>
      </body>
    </html>
  );
}
