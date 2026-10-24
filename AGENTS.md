# Dragos Vasiliu — portfolio

Personal developer portfolio, online CV and GitHub landing page. Static Astro site on GitHub Pages, bilingual English/Italian.

**Before changing visual design, user-facing copy, localization or site structure, read `docs/style.md`.**

## Hard rules

- **Whenever visible content is added or changed, update both English and Italian** unless a documented reason says otherwise. This includes aria-labels, meta tags and alt text. Translate naturally, not word for word.
- Never invent achievements, metrics, client names, repo stats or usage numbers. Unknown facts stay `null`/`TODO` and are not rendered.
- No phone number, CV GDPR notice, internal hosts/IPs or proprietary details on the site.
- No client JS unless interactivity requires it. Today: inline theme scripts (no-flash init + toggle with a View Transition),
  and bundled `<script>`s in `CommandPalette` (⌘K), `Alien` (mascot), `TechList` (tech highlight),
  `Header` (scroll spy), `Hero` (local time) and `Stack` (active layer). No React islands without a reason.

## Commands

```sh
npm run dev       # http://localhost:4321  (/ and /it/)
npm run build     # astro check (types + i18n parity) then static build to dist/
npm run preview
```

## Localization

- English is the default at `/`; Italian at `/it/`. Astro `i18n` with `prefixDefaultLocale: false`.
  Kept Astro's built-in routing over an i18n library: static routes, no runtime cost.
- One page file per route under `src/pages/[...locale]/`; `getStaticPaths` emits every locale. New pages follow the
  same pattern (e.g. `src/pages/[...locale]/projects/[slug].astro` → `/projects/x/` and `/it/projects/x/`).
- UI strings: `src/i18n/en.ts` and `it.ts`. `it` is typed as `Dictionary` (the shape of `en`), so a missing key fails `npm run build`.
- Prose attached to data (project descriptions, role bullets, stack notes) lives next to that data as `Localized` (`{ en, it }`) fields.
  Technical metadata (dates, tech names, URLs) is stored once.
- Build URLs with `getRelativeLocaleUrl` / `getAbsoluteLocaleUrl` from `astro:i18n` so base path and locale prefix stay correct.
- Pass a locale-independent `path` to `BaseLayout` and `LanguageSwitcher`; they build canonical, hreflang and the switcher links from it.

## Structure

```
src/
  pages/[...locale]/index.astro   page composition for every locale
  pages/404.astro                  one bilingual page: Pages serves it for every missing URL
  pages/robots.txt.ts
  layouts/BaseLayout.astro         <html lang>, meta, OG, hreflang, JSON-LD
  sections/                        page sections (receive `locale`)
  components/                      reusable pieces (receive already-localized strings)
  data/                            profile, experience, projects, stack (single source of truth)
  i18n/                            en.ts, it.ts, index.ts (Locale, Localized, useTranslations)
  styles/global.css                Tailwind v4 @theme tokens, base styles, the one motion keyframe
docs/style.md                      design, copy and localization rules
public/cv/                         CV PDFs (links are hidden until the files exist)
public/og.png                      1200×630 link preview; apple-touch-icon.png 180×180 (both rendered from the tokens and favicon)
```

## Content

- Contact/social URLs and CV paths: `src/data/profile.ts`. `null` = hidden everywhere.
- Projects: `src/data/projects.ts`. `placeholder: true` entries are kept for planning but never rendered.
  `professional` = private work (describe scope and role only); `open-source` = public repo.
- CV PDFs (`public/cv/`): web copies without phone number or privacy notice, built from the CV repo with
  `generate_cv_ats.py --stem --public --github github.com/DragosAlien --source cv-en.md|cv.md --output …`.
- Activity (Work section): `src/data/activity.json` is a snapshot of commit counts from local clones, never live.
  Refresh with `node scripts/activity.mjs --author 'Dragos|dralien' --github <gh accounts> ~/Projects/*/ ~/Projects/*/*/ ~/Personal/*/`
  and commit the JSON. `--github` adds every repo those logged-in `gh` accounts can see; commits and repos are deduped.
  It writes counts only: no repo names, paths or emails.

## Conventions

- Tailwind utilities with the tokens in `global.css` (`bg`, `surface`, `line`, `line-strong`, `fg`, `muted`, `accent`, `alien`; `text-meta`, `text-display`). No raw hex in components.
  `alien` is for the mascot only.
- Themes: dark is the default and no-JS fallback; light overrides the same tokens under `:root[data-theme='light']` in `global.css`.
  Any new token needs both values, checked for WCAG AA contrast.
- Page width via the `wrap` utility; sections via `components/Section.astro`.
- Small components, no abstractions until a second use exists. Path alias `~/` → `src/`.

## Deployment

`.github/workflows/deploy.yml` builds on push to `main` and deploys to Pages. `actions/configure-pages` supplies
`SITE_URL`/`BASE_PATH`, so a project page, user page or custom domain all work without code changes
(for a custom domain, set it in the repo's Pages settings). Repo setting required: Pages → Source → GitHub Actions.

## Testing

`npm run build` is the gate: it runs `astro check`, which enforces the EN/IT dictionary shape. Before finishing a
change, verify `/` and `/it/` render, the switcher links to the equivalent page, and both pages have the right `lang`,
title, description, canonical and hreflang. Add unit tests only for real logic.
