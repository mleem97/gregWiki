import {en} from './en';
import type {HomepageContent, LocaleKey} from './types';

const homepageByLocale: Record<LocaleKey, HomepageContent> = {
  en,
};

export type {HomepageContent, LocaleKey} from './types';

export function getHomepageContent(locale: string): HomepageContent {
  void locale;
  return homepageByLocale.en;
}
