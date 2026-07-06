# Coffee Nirvana

A single-page homestay website for a working coffee estate in Chikkamagaluru, India.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Client-side cart with WhatsApp booking

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero config required.

## Images

Photos live in `public/images/`. The gallery uses `gallery-01.jpg` through `gallery-22.jpg`. Room and package cards use `room-*.jpg` and `package-*.jpg`. The hero uses `exterior-01.jpg`.

## Customize

- **WhatsApp number:** `lib/cart-context.tsx` (currently `918660816216`)
- **Google Maps embed:** `components/Amenities.tsx` — replace the iframe `src`
- **Rooms & packages:** `lib/data.ts`
- **Instagram handle:** `components/Footer.tsx`
