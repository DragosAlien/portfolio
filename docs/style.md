# Portfolio style

A technical personal portfolio for Dragos Vasiliu, Full Stack Developer (a generalist: web apps, integrations, Linux, Docker, AI tooling).
Readers: recruiters, engineering teams, developers arriving from GitHub. It should read like the site of someone who
builds and operates software, not a marketing page.

## Language parity

- English (default, `/`) and Italian (`/it/`) are equal. Never add, remove or change visible text in one language only.
  This covers headings, body, buttons, aria-labels, sr-only text, meta title/description, alt text.
- Write each language natively. English: concise, international, factual. Italian: naturale, tecnico, diretto.
  Same meaning and level of detail; neither version more impressive or longer than needed.
- Company names, product names and technology names stay untranslated. Descriptive names (e.g. "Third-party integrations") are translated.
- Reusable components receive localized strings as props; they never import a dictionary or hard-code copy.
- Keep the architecture: `src/i18n/{en,it}.ts` for UI strings, `Localized` fields next to data in `src/data/`.
  Don't introduce an i18n library or per-language component copies.

## Writing

- Facts only, from the CV/profile data. No invented achievements, metrics, clients, testimonials or repo stats.
- Private professional work: describe scope, responsibilities and technologies; never imply it is open source.
- Avoid: "passionate", "crafting", "digital experiences", "innovative", LinkedIn tone, emojis.
- First person ("I build…", "Sviluppo…"); experience bullets stay subjectless like a CV. The mascot is the exception: it talks about Dragos in the third person.
- Sentence case. Plain verbs. Buttons say what happens ("Download CV", "Scarica CV").

## Visual system

- Dark, calm, dense like a developer tool. Restraint at the level of Linear / Raycast / Apple developer pages.
- Use existing tokens only (`global.css` @theme): graphite `bg`/`surface`, hairline `line`, `fg`, `muted`, and one
  muted amber `accent` reserved for *state* (active language, focus ring, current role, highlighted tech) and the mascot's
  details. `alien` green is the mascot's body colour and nothing else.
- Dark and light themes share every token name; never style for one theme only or hard-code a colour. Check both themes before finishing.
- Type: IBM Plex Sans for everything; IBM Plex Mono only for technical metadata (dates, tech lists, small labels).
  `text-display` (the hero name) is the only display size.
- Layout: left-aligned, `wrap` container, `Section` component with heading in a left gutter on desktop.
  Prefer lists with hairline dividers over cards. The Stack section's blocks are the one signature element; don't replicate it elsewhere.
- Reuse existing patterns (Section, TechList, ExternalLink) before adding new ones.

## Never

Purple/AI gradients, glowing blobs, glassmorphism, cards around everything, giant centered full-viewport hero,
logo clouds, skill percentage or progress bars, fake terminals, fake metrics/logos/testimonials, scroll-jacking,
parallax, custom cursors (the mascot's eyes follow the pointer; nothing replaces it), country flags for languages.

## Personality layer

The content stays calm; personality lives in a few deliberate places. Keep it to these, don't add more of the same:

- **Alien mascot** (`components/Alien.astro`): decorative SVG that hops between perches as you scroll: `data-perch="sit"`
  stands on an element's top edge, `"peek"` hides behind it with only the head showing, `"ride"` floats down the
  Experience timeline under an umbrella, tied to the scroll position so it goes back up when you scroll up. In Stack (≥ lg) a sticky mini tower of
  the layers sits under the heading: the layer being read is pulled out Jenga-style and the alien (`"build"`) hammers it back in.
  Content never fades or moves for the effect. Floats, blinks, eyes follow the mouse,
  changes accessory per section (`data-section`: top/contact wave, about glasses, work laptop, experience umbrella,
  stack helmet and hammer). Click: says the next localized line. Konami code: UFO abduction. A new section needs a pose and a perch.
  Perches go where the right side of the element is empty, so the alien never covers text.
- **Header**: full-width sticky bar on the `wrap` grid; a CSS scroll timeline fades in its bottom hairline, a scroll spy slides an accent bar along it under the current section.
  Links carry their section number (`02 Work`), the current one in accent. On mobile the links give way to the current section (`DV / 03 Experience`), which opens the command menu.
- **Command palette** (`components/CommandPalette.astro`): ⌘K / Ctrl+K or the header button. `<dialog>` + combobox/listbox.
  Doubles as the mobile menu. New sections and actions go in its `groups`.
- **Micro-interactions**: tech highlight across the page (`data-tech`), Work row hover surface, square stops on the Experience line (the current one filled in accent),
  circular View Transition on theme change.

## Motion

Hero page-load reveal (`.reveal`); scroll reveals (`.scroll-reveal`) and the Experience timeline draw use CSS
scroll-driven animations inside `@supports (animation-timeline: view())`; the mascot's loops. Everything must respect
`prefers-reduced-motion` (no loops, no reveals, no View Transition, easter egg shows only its line) and the page must be
complete with motion off or in browsers without view timelines.

## Before finishing

Both languages render; switcher keeps the user on the equivalent page; `lang`, title, description, canonical,
hreflang correct on both; layout holds with the longer Italian copy at 390px; `npm run build` passes.
