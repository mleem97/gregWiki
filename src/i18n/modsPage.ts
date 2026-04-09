import type { LocaleKey } from './homepage/types';

export type ModsPageStrings = {
  title: string;
  description: string;
  pluginsHeading: string;
  modsHeading: string;
  wiki: string;
  release: string;
  download: string;
  notReleased: string;
};

const byLocale: Record<LocaleKey, ModsPageStrings> = {
  en: {
    title: 'Mods & plugins catalog',
    description:
      'Generated from the module catalog. Each entry links to its wiki article, release page, and download route.',
    pluginsHeading: 'Plugins',
    modsHeading: 'Mods',
    wiki: 'Wiki',
    release: 'Release',
    download: 'Download DLL',
    notReleased: 'Not released yet',
  },
  de: {
    title: 'Mods- & Plugin-Katalog',
    description:
      'Aus dem Modul-Katalog erzeugt. Jeder Eintrag verweist auf Wiki, Release-Seite und Download-Route.',
    pluginsHeading: 'Plugins',
    modsHeading: 'Mods',
    wiki: 'Wiki',
    release: 'Release',
    download: 'DLL laden',
    notReleased: 'Noch nicht veröffentlicht',
  },
};

export function getModsPageStrings(locale: string): ModsPageStrings {
  const languageOnly = (locale || 'en').toLowerCase().split('-')[0] as LocaleKey;
  return byLocale[languageOnly] ?? byLocale.en;
}
