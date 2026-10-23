import en from './en';
import it from './it';

export const locales = ['en', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** A value that differs per language. Use for prose that lives next to shared data. */
export type Localized<T = string> = Record<Locale, T>;

/** Native names, used by the language switcher. */
export const localeNames: Localized = { en: 'English', it: 'Italiano' };

const dictionaries = { en, it };

export const useTranslations = (locale: Locale) => dictionaries[locale];
