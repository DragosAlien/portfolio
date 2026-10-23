import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Localized } from '~/i18n';

/**
 * Single source of truth for personal and contact data.
 * Links set to `null` are not rendered anywhere (header, contact, footer, JSON-LD).
 * Never add a phone number or anything from the CV's GDPR notice here.
 */
export const profile = {
  name: 'Dragos Vasiliu',
  jobTitle: 'Full Stack Developer',
  location: {
    city: 'Monferrato',
    region: { en: 'Piedmont', it: 'Piemonte' } as Localized,
    country: { en: 'Italy', it: 'Italia' } as Localized,
    countryCode: 'IT',
  },
  current: { role: 'Software Developer', company: 'PARENTESIKUADRA' },

  email: 'vasiliu.petru.dragos@gmail.com' as string | null,
  github: 'https://github.com/DragosAlien' as string | null,
  linkedin: 'https://www.linkedin.com/in/dragos-vasiliu-332b57272/' as string | null,

  // Files live in /public. A missing file hides its link instead of shipping a 404.
  cv: { en: '/cv/dragos-vasiliu-cv-en.pdf', it: '/cv/dragos-vasiliu-cv-it.pdf' } as Localized,

  languages: [
    { name: { en: 'Italian', it: 'Italiano' }, level: { en: 'Native', it: 'Madrelingua' } },
    { name: { en: 'Romanian', it: 'Rumeno' }, level: { en: 'C2', it: 'C2' } },
    { name: { en: 'English', it: 'Inglese' }, level: { en: 'B2', it: 'B2' } },
  ] satisfies { name: Localized; level: Localized }[],

  education: {
    title: { en: 'Diploma in Computer Science', it: 'Diploma in Informatica' } as Localized,
    school: 'ITIS Ascanio Sobrero, Casale Monferrato',
    years: '2014–2019',
  },
};

/** This site's repository. */
export const repository: string | null = 'https://github.com/DragosAlien/portfolio';

/** Configured social profiles only. `handle` is the URL without protocol, shown where space allows. */
export const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
]
  .filter((s): s is { label: string; href: string } => Boolean(s.href))
  .map((s) => ({ ...s, handle: s.href.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '') }));

/** Public URL of a file in /public, or null when it has not been added yet. */
export function publicFile(path: string): string | null {
  if (!existsSync(join(process.cwd(), 'public', path))) return null;
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
