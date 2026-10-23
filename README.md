# dragos-vasiliu-portfolio

Source of my personal developer portfolio: a static, bilingual (English / Italian) site built with Astro and deployed to GitHub Pages.

- English: `/` (default, `x-default`)
- Italian: `/it/`

Both languages are generated from the same components and typed content. The pages ship no client-side JavaScript.

## Stack

Astro · TypeScript · Tailwind CSS v4 · Lucide icons · GitHub Actions · GitHub Pages

## Local development

Requires Node 22+.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type check (incl. translation parity) + static build to dist/
npm run preview   # serve dist/
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repository settings, set **Pages → Source** to **GitHub Actions**. The site URL and base path come from
the Pages configuration, so a custom domain only needs to be set in the Pages settings.

## Structure

```
src/
  pages/[...locale]/   one route file renders every language
  layouts/             document head: metadata, hreflang, structured data
  sections/            page sections
  components/          reusable components
  data/                profile, experience, projects, stack
  i18n/                en.ts, it.ts and locale helpers
  styles/              design tokens and base styles
public/cv/             CV PDFs, one per language
```

## Localization

- UI strings live in `src/i18n/en.ts` and `src/i18n/it.ts`. The Italian dictionary is typed against the English
  one, so a missing translation fails the build.
- Content tied to data (project descriptions, role details) is stored as `{ en, it }` fields next to the shared
  metadata in `src/data/`.
- To add a language, add it to `locales` in `src/i18n/index.ts` and `astro.config.mjs`, then add its dictionary and `Localized` values.
