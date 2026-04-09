import { de } from './de';
import { en } from './en';
import type { HomepageContent, LocaleKey } from './types';

const homepageByLocale: Record<LocaleKey, HomepageContent> = {
  en,
  de,
};

export type { HomepageContent, LocaleKey } from './types';

export function getHomepageContent(locale: string): HomepageContent {
  const normalizedLocale = (locale || 'en').toLowerCase();
  const languageOnly = normalizedLocale.split('-')[0] as LocaleKey;

  if (normalizedLocale in homepageByLocale) {
    return homepageByLocale[normalizedLocale as LocaleKey];
  }

  if (languageOnly in homepageByLocale) {
    return homepageByLocale[languageOnly];
  }

  return homepageByLocale.en;
}
