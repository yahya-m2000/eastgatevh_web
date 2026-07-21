# EVH — Eastgate Venture Holdings

Marketing website for Eastgate Venture Holdings (EVH), a UK venture builder backing founders
in undercapitalised markets across Africa and Asia.

Built with **React 18**, **React Router**, and **Vite**. No backend — all copy lives in one
content file, and pages are thin compositions of shared, reusable section components.

## Quick start

Requires Node.js 20+ (see [`.nvmrc`](.nvmrc)).

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:5173
```

Other scripts:

| Command                | What it does                             |
| ---------------------- | ---------------------------------------- |
| `npm run build`        | Production build to `dist/`              |
| `npm run preview`      | Serve the production build locally       |
| `npm run lint`         | Check code with ESLint                   |
| `npm run lint:fix`     | Auto-fix lint issues where possible      |
| `npm run format`       | Format all files with Prettier           |
| `npm run format:check` | Check formatting without writing changes |

## Project structure

Everything under `src/` follows one rule: **pages compose components, components render
props, and all copy comes from `content/`.** No page or component hardcodes text — that
separation is what makes the site easy to re-skin or update without touching logic.

```
eastgatevh_web/
├── docs/
│   └── PROPOSITION.md       # Brand, IA, and product spec (business-facing, not dev docs)
├── public/
│   └── favicon.svg          # Static assets served as-is, referenced by absolute path (/favicon.svg)
├── src/
│   ├── main.jsx              # Entry point — mounts <App /> inside BrowserRouter
│   ├── App.jsx                # All route definitions live here, nowhere else
│   ├── components/            # Reusable, presentational building blocks (no page owns its own one-off markup)
│   │   ├── Layout.jsx           # Header, nav, footer, mobile menu — wraps every page via <Outlet />
│   │   ├── Seo.jsx               # Sets document.title + meta description per page
│   │   ├── PageHero.jsx          # Big hero banner (home page)
│   │   ├── ContentSection.jsx    # Titled section wrapper — the default container for page content
│   │   ├── SectionSplit.jsx      # Two-column text + bullet list + CTA block
│   │   ├── CardGrid.jsx          # Responsive grid of title/body cards
│   │   ├── StatStrip.jsx         # Row of headline stats
│   │   └── Timeline.jsx          # Numbered step list (e.g. founder journey)
│   ├── content/
│   │   └── siteContent.js     # SINGLE SOURCE OF TRUTH for all copy: nav, page meta, heroes, cards, contact details
│   ├── pages/                  # One file per route; each just wires siteContent data into components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── InvestmentModelPage.jsx
│   │   ├── FounderPartnershipsPage.jsx
│   │   ├── RegionsPage.jsx
│   │   ├── PortfolioPage.jsx     # Only page with real interactive state (region filter)
│   │   ├── TeamPage.jsx
│   │   ├── InsightsPage.jsx
│   │   └── ContactPage.jsx       # Only page with a form (client-side validation, no backend submit)
│   └── styles/
│       └── global.css          # One global stylesheet, plain CSS with custom properties for theme colors
├── index.html                # Vite entry HTML — favicon, meta description, and title live here
├── vite.config.js
├── eslint.config.js
├── .prettierrc.json
└── jsconfig.json             # Editor intellisense (path/JS awareness), not a TypeScript migration
```

### How to find things

- **Want to change site copy (headings, card text, contact details)?** Edit
  [`src/content/siteContent.js`](src/content/siteContent.js) only. Components and pages should
  never need to change for a copy update.
- **Want to add a new page?**
  1. Add copy + a `pageMeta.<page>` entry to `siteContent.js`.
  2. Create `src/pages/YourPage.jsx`, composing existing components from `src/components/`.
  3. Register the route in `src/App.jsx`.
  4. Add a `navLinks` entry in `siteContent.js` if it belongs in the main nav.
- **Want to change the look of every card / section at once?** Edit the shared component in
  `src/components/`, not an individual page — pages don't own their own styling.
- **Want to change colors, spacing, or the mobile breakpoint?** Everything is in
  [`src/styles/global.css`](src/styles/global.css); theme colors are CSS custom properties at
  the top of the file (`--brand`, `--bg`, `--text`, etc.).

## Code quality

- **ESLint** (flat config, `eslint.config.js`) enforces React Hooks rules and catches unused
  variables/imports. Run `npm run lint` before committing.
- **Prettier** (`.prettierrc.json`) formats consistently — single quotes, trailing commas,
  100-character lines. Run `npm run format` to apply.
- No TypeScript — `jsconfig.json` exists purely to give editors path/JS awareness, not as a
  migration step.

## Deployment

The site is a static Vite build (`npm run build` → `dist/`), deployed on Vercel. Web Analytics
is wired in via the official [`@vercel/analytics`](https://www.npmjs.com/package/@vercel/analytics)
React component (see `src/App.jsx`), which is a safe no-op when the site isn't running on Vercel.

## Known placeholders

This is a launch-ready shell with placeholder content, clearly called out in
[`docs/PROPOSITION.md`](docs/PROPOSITION.md):

- Team members (`A. Director`, `B. Operator`, `C. Investor`) and portfolio companies
  (`Company Alpha/Beta/Gamma/Delta`) are placeholders — swap them in `siteContent.js`.
- `contactDetails` in `siteContent.js` uses placeholder email/phone values.
- The contact form validates and displays a success message but does not submit anywhere —
  wire `ContactPage.jsx`'s `handleSubmit` up to a real backend or form service before launch.
