# EASTGATE Website Proposition (v5)

## Brand Direction
- Secondary brand mark: minimal institutional monogram `E│G` (favicon + optional footer use).
- **Name treatment:** EASTGATE as the public-facing brand, with Eastgate Venture Holdings Ltd retained for legal references only.
- **Tone:** Corporate and investment-grade with a human, ethical, founder-supportive voice.
- **Visual style:** Professional sans-serif typography, restrained palette, high readability, modular card-based layout.

## Information Architecture (Launch)
- Home
- About
- Founder Partnerships
- Investment Model
- Regions
- Portfolio
- Team
- Insights
- Contact

## UX Priorities
1. Attract founders in Africa/Asia undercapitalised markets
2. Showcase portfolio credibility and EASTGATE operating model
3. Build confidence with co-investors and strategic partners

## CTA Strategy
- Primary CTA across navigation and hero: **Contact Us**
- Secondary conversion point: enquiry form on Contact page

## Build Progress (Current)
- Home now follows a narrative-first order: Hero, What EASTGATE does, Investment model overview, Founder journey timeline, Regions focus, Portfolio preview, Key statistics, and Contact CTA.
- Portfolio includes region filtering for quicker discovery.
- Investment Model details practical EASTGATE operating capabilities.
- Founder Partnerships page explains the founder-operating partnership model, support pillars, and journey timeline.
- Team and Insights include structured placeholder card layouts.
- Contact includes lightweight client-side validation and form feedback.
- All pages now set page-level metadata (title + description) through a reusable SEO component.
- Navigation now supports a mobile menu flow.

## Content Strategy
- A central `src/content/` layer powers navigation, page blocks, metadata, cards, and placeholders.
- Placeholders are structured to be swapped with production content without touching component logic.

## Technical Implementation Notes
- React + Vite with modular, reusable components.
- Shared section primitives (`ContentSection`, `CardGrid`, `Timeline`, `StatStrip`, `SectionSplit`) keep implementation DRY.
- Reusable SEO component updates page title and meta description.
- Vercel Web Analytics script included (`/_vercel/insights/script.js`).
