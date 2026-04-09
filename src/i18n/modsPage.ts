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
  fr: {
    title: 'Catalogue mods & plugins',
    description:
      'Généré depuis le catalogue des modules. Chaque entrée renvoie vers le wiki, la page release et le téléchargement.',
    pluginsHeading: 'Plugins',
    modsHeading: 'Mods',
    wiki: 'Wiki',
    release: 'Release',
    download: 'Télécharger DLL',
    notReleased: 'Pas encore publié',
  },
  es: {
    title: 'Catálogo de mods y plugins',
    description:
      'Generado desde el catálogo de módulos. Cada entrada enlaza al wiki, la página de release y la descarga.',
    pluginsHeading: 'Plugins',
    modsHeading: 'Mods',
    wiki: 'Wiki',
    release: 'Release',
    download: 'Descargar DLL',
    notReleased: 'Aún no publicado',
  },
  ru: {
    title: 'Каталог модов и плагинов',
    description:
      'Собрано из каталога модулей. Каждая запись ведёт на wiki, страницу релиза и маршрут загрузки.',
    pluginsHeading: 'Плагины',
    modsHeading: 'Моды',
    wiki: 'Wiki',
    release: 'Релиз',
    download: 'Скачать DLL',
    notReleased: 'Ещё не выпущено',
  },
  ja: {
    title: 'Mods & プラグインカタログ',
    description: 'モジュールカタログから生成。各エントリは Wiki・リリースページ・ダウンロードへリンクします。',
    pluginsHeading: 'プラグイン',
    modsHeading: 'Mods',
    wiki: 'Wiki',
    release: 'リリース',
    download: 'DLL を取得',
    notReleased: '未リリース',
  },
};

export function getModsPageStrings(locale: string): ModsPageStrings {
  const languageOnly = (locale || 'en').toLowerCase().split('-')[0] as LocaleKey;
  return byLocale[languageOnly] ?? byLocale.en;
}
