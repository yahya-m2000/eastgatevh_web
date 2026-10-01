# EastGate Venture Holdings

React 18 / Vite website for EastGate, a partner-led holdings firm with a global mandate and a current focus on Africa and Asia. The site keeps its existing nine routes and Vercel Analytics integration.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Vite prints the local preview address, normally http://localhost:5173.

| Command                | Purpose                      |
| ---------------------- | ---------------------------- |
| `npm run build`        | Production build in `dist/`  |
| `npm run preview`      | Preview the production build |
| `npm run lint`         | ESLint checks                |
| `npm run format:check` | Prettier checks              |
| `npm run format`       | Format the repository        |

## Design and content

- **Sora** for titles and headings. The favicon is an outlined **Sora ExtraBold / 800** capital E, so it does not depend on browser font loading.
- **DM Sans** for body text and navigation.
- Ink, teal, and white shared theme tokens live in [global.css](src/styles/global.css).
- Navigation, page metadata, hero text, portfolio data, and shared design copy live in [siteContent.js](src/content/siteContent.js). New shared copy belongs there.
- Pages compose reusable components. All routes are declared in [App.jsx](src/App.jsx).

The homepage includes a brief first-visit brand introduction, animated headings, image parallax, Build–Operate–Transfer tabs, a sticky founder journey, regional photography, and an A&A case-study preview. The compact footer groups the brand, company links, investment links, and contact details above a slim legal row.

The homepage introduction uses a small, centred logo revealed in horizontal slices, a brief pause, and a soft fade into the page. Headings and navigation enter as the intro fades. It runs on a fresh homepage load (including a reload), never on internal navigation, and is bypassed for reduced motion. It can be skipped with **Enter site**, Escape, Enter, or Space. Font/image readiness has a timeout fallback so the intro cannot hold the page indefinitely.

Motion uses Framer Motion and Lenis. Touch scrolling remains native. The site respects `prefers-reduced-motion`, bypasses the introduction for that preference, and includes focus styles, a skip link, and a keyboard-accessible Radix navigation dialog.

## Key files

| File                                                               | Responsibility                                |
| ------------------------------------------------------------------ | --------------------------------------------- |
| `src/components/BrandIntro.jsx`                                    | First-visit brand introduction                |
| `src/components/Header.jsx`, `MenuOverlay.jsx`                     | Desktop navigation and full menu              |
| `src/components/home/HomeHero.jsx`, `HomeStory.jsx`                | Homepage composition                          |
| `src/components/editorial/InteriorHero.jsx`, `InteriorSection.jsx` | Shared interior-page layouts                  |
| `src/components/PortfolioDirectory.jsx`                            | Portfolio region filters                      |
| `src/components/ContactForm.jsx`                                   | Enquiry form and email draft                  |
| `src/lib/contactForm.js`                                           | Validation and mailto encoding                |
| `src/components/Footer.jsx`                                        | Compact footer and grouped navigation         |
| `src/components/motion/SplitHeading.jsx`                           | Heading animation with preserved word spacing |
| `src/components/motion/ParallaxImage.jsx`                          | Scroll-linked photography                     |
| `public/favicon.svg`                                               | Outlined Sora ExtraBold E on ink              |

Earlier design components and the `figma/` reference project remain available in the checkout.

## Contact form

There is no backend or form delivery service. **Prepare email** validates the enquiry and opens a draft in the visitor's email app. The visitor must send it from that app. A readable draft, copy action, and edit action remain available if no email app opens. No message is represented as sent by the website.

Set the real receiving address in `contactDetails.email` before launch.

## Images

The existing garden photograph and supplied logo assets are retained. Regional photography is served locally from `public/images/`. Sources and license references are recorded in [ASSETS.md](docs/ASSETS.md).

## Deployment

The existing deployment target is Vercel. Build with `npm run build` and serve `dist/` with SPA fallback to `index.html` for client-side routes. This redesign does not change hosting or publish a deployment.

Business copy reflects the owner’s brief and subsequent corrections. EastGate is the brand shorthand. A&A Trade Solutions is the first BOT case study, with links to its website. Noah’s profile covers establishing operations in Africa and training the founders; Yahya is credited with building A&A Store, available on Google Play. HOYBNB is briefly identified as an earlier project that did not gain traction. Ridwan’s experience remains an explicit placeholder. Source notes are in [CONTENT_NOTES.md](docs/CONTENT_NOTES.md).
