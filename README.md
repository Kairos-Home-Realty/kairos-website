# Kairos Home Realty

Premium multi-page corporate website for Kairos Home Realty — a Property & Financial Advisory startup — built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Pages

- `/` — Home (hero, trust bar, about preview, services, why choose us, process, builders, banks, testimonials, FAQ, final CTA)
- `/about` — Story, vision, mission, values, timeline, founder message
- `/services` — All 6 services in detail
- `/projects` — Builder partner cards
- `/home-loans` — EMI calculator, eligibility checker, process, documents, partner banks
- `/why-kairos` — Reasons + Kairos vs. traditional broker comparison table
- `/contact` — Split layout with form (React Hook Form + Zod), map embed, WhatsApp/Call
- `/privacy-policy`
- `/terms-conditions`

## Notes

- All content (company name, services, builders, banks, testimonials, FAQs) lives in `constants/site.ts` — edit this single file to update copy across the whole site.
- Brand colors, fonts and gradients are defined in `tailwind.config.ts` and `app/globals.css`.
- The hero and builder-card imagery currently use CSS/SVG-built visuals (skyline silhouette, gradient panels) instead of stock photography, since no real licensed images were supplied. Swap in real photography via `next/image` wherever you see a gradient placeholder (Hero background, service icons panels, builder card headers) for the final production look.
- Google Fonts (Playfair Display + Inter) are loaded via `next/font/google` in `app/layout.tsx` — this requires internet access at build time, which is standard for any real hosting environment (Vercel, Netlify, your own server).
- Update `SITE.phone`, `SITE.email`, `SITE.whatsapp`, and `SITE.address` in `constants/site.ts` with your real contact details before launch.
- The Google Maps embed in `/contact` currently points to a generic Hyderabad query string — replace with your exact business address/place ID.
