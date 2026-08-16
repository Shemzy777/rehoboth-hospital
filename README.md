# Rehoboth Hospital — Website

A complete, responsive hospital website built with React, TypeScript, Tailwind CSS, and React Router.

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to dist/)
npm run preview    # preview the production build locally
```

## Project Structure

- `src/data/` — mock data for doctors, departments, services, articles, FAQs, jobs, facilities,
  and separate mock data for the Patient Portal and Admin Dashboard. Replace these with real
  API calls when a backend is available — every page already reads from these files only.
- `src/types/` — shared TypeScript interfaces for every data model.
- `src/components/ui/` — reusable primitives (Button, cards, accordion, image placeholder, etc).
- `src/components/layout/` — Navbar, Footer, EmergencyBar, global search, page layout shell.
- `src/components/sections/` — homepage section components, composed in `src/pages/Home.tsx`.
- `src/pages/` — one file per public route; `pages/portal/` and `pages/admin/` hold the
  Patient Portal and Admin Dashboard sub-apps, each with their own layout + sidebar.
- `src/App.tsx` — the full route tree.

## Notes for Production

- **Images**: every photo spot currently renders a branded gradient placeholder
  (`src/components/ui/ImageBlock.tsx`) instead of a real photograph, so the build has no
  dependency on external image hosts. Swap in real photography by editing that one component.
- **Auth**: Patient Portal and Admin Dashboard login are both mocked — submitting either form
  navigates straight through. Wire up real authentication before deploying either area publicly.
- **Placeholder content**: phone numbers (`+234 XXX XXX XXXX`), the hospital address, and email
  domain are placeholders — replace before launch. Testimonials are marked as demonstration
  content and should be replaced with real reviews or removed.
- **Data**: all mock data lives in `src/data/` with clean TypeScript interfaces, so swapping in
  real API calls means replacing the data source, not the UI.

## Photography

Real, verified photography (sourced from Unsplash, free license, individually
confirmed — not guessed URLs) has been wired in for:

- Homepage hero and About section
- Services: General Consultation, Surgery, Health Screening, Vaccination, Maternity Care
- The Service detail page hero now uses that service's own photo as a full-width
  background with a gradient overlay for text contrast — see `ServiceDetail.tsx`.

**Still using the documentary-style placeholder** (`ImageBlock.tsx`), pending real
sourcing: the remaining 11 services, departments, facilities, doctor portraits, and
health article thumbnails.

All photography is centralized in `src/lib/images.ts` — `servicePhotos` maps a
service slug to a verified Unsplash photo id + descriptive alt text. To add a real
photo for any remaining service, add one entry there; every page that shows that
service (listing hover panel, mobile thumbnail, detail hero) picks it up automatically
via `getServicePhoto()`. No component changes needed.

Doctor portraits are intentionally left as placeholders rather than filled with stock
photos of real strangers: each doctor in this demo has a fabricated name, bio, and
credentials, and attaching a real person's photo to that would be misleading. Swap
in actual staff photography when this goes into production instead.

Images use `srcSet`/`sizes` for responsive sizing, `loading="lazy"` (eager only for
the hero), and Unsplash's `auto=format` param so browsers get WebP/AVIF automatically.
