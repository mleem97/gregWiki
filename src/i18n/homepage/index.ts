import {en} from './en';
import type {HomepageContent} from './types';

export type {HomepageContent, LocaleKey} from './types';

export function getHomepageContent(_locale: string): HomepageContent {
  return en;
}
