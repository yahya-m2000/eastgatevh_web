# Contributing

## Setup

```bash
npm install
npm run dev
```

## Before opening a PR

```bash
npm run lint
npm run format:check
npm run build
```

All three must pass. Run `npm run lint:fix` and `npm run format` to auto-fix most issues.

## Conventions

- **Copy belongs in `src/content/siteContent.js`.** Don't hardcode text inside a component or
  page — add it to `siteContent.js` and import it. This keeps every page a thin composition of
  shared components, and means content updates never require touching component logic.
- **New UI patterns belong in `src/components/`, not inline in a page.** If two pages need the
  same layout shape, extract it as a shared component instead of duplicating markup.
- **One route per file in `src/pages/`.** Register new routes in `src/App.jsx`, and add a
  `navLinks` entry in `siteContent.js` if the page belongs in the main navigation.
- **Styling is plain CSS in `src/styles/global.css`**, using the existing custom properties for
  color (`--brand`, `--bg`, `--text`, `--muted`, `--border`, `--error`). No CSS-in-JS, no
  component-scoped stylesheets — keep it in the one file.
- Follow the existing file naming: `PascalCase.jsx` for components/pages, `camelCase.js` for
  content/config.
