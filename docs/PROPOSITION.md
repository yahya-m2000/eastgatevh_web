# EVH Website Proposition (v4)

## Brand Direction
- **Name treatment:** Eastgate Venture Holdings (EVH) with EVH as primary brand mark.
- **Tone:** Corporate and investment-grade with a human, ethical, founder-supportive voice.
- **Visual style:** Professional sans-serif typography, restrained palette, high readability, modular card-based layout.

## Information Architecture (Launch)
- Home
- About
- Investment Model
- Regions
- Portfolio
- Team
- Insights
- Contact

## UX Priorities
1. Attract founders in Africa/Asia undercapitalised markets
2. Showcase portfolio credibility and EVH operating model
3. Build confidence with co-investors and strategic partners

## CTA Strategy
- Primary CTA across navigation and hero: **Contact Us**
- Secondary conversion point: enquiry form on Contact page

## Build Progress (Current)
- Home includes key metrics, founder journey timeline, and founder-specific CTA block.
- Portfolio includes region filtering for quicker discovery.
- Investment Model details practical EVH operating capabilities.
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
