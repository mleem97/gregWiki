export type ModsPageStrings = {
  title: string;
  description: string;
  namespaceBadge: string;
  namespaceLabel: string;
  pluginsHeading: string;
  modsHeading: string;
  wiki: string;
  release: string;
  download: string;
  notReleased: string;
  repoFolder: string;
  legacyNoSplitRepo: string;
};

export const modsPageEn: ModsPageStrings = {
  title: 'Mods & plugins catalog',
  description:
    'Generated from the module catalog. Each entry links to its wiki article, release page, and download route.',
  namespaceBadge: 'Namespace: greg*',
  namespaceLabel: 'Namespace',
  pluginsHeading: 'Plugins',
  modsHeading: 'Mods',
  wiki: 'Wiki',
  release: 'Release',
  download: 'Download DLL',
  notReleased: 'Not released yet',
  repoFolder: 'gregFramework folder',
  legacyNoSplitRepo: 'Legacy — no split repo in workspace',
};

export function getModsPageStrings(_locale: string): ModsPageStrings {
  return modsPageEn;
}
