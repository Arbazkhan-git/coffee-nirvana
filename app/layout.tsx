import { Fraunces, Inter } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
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
