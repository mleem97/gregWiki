import type { HomepageContent, HomepageDocLink } from './types';

/** English link hub — reused for locales without dedicated translations. */
export const sharedKnowledgeLinksEn: HomepageDocLink[] = [
  { title: 'Wiki Overview', description: 'Canonical docs entry under /wiki.', link: '/wiki' },
  {
    title: 'Framework Core',
    description: 'Runtime hooks, bridge, events, and architecture.',
    link: '/wiki/mods/framework',
  },
  {
    title: 'Plugins (FFM)',
    description: 'FFM.Plugin.* docs and release pages.',
    link: '/wiki/plugins/',
  },
  { title: 'Mods (FMF)', description: 'Gameplay mods, releases, and module docs.', link: '/wiki/mods/' },
  {
    title: 'FMF Hooks Catalog',
    description: 'Hook strings and event IDs generated from core sources.',
    link: '/wiki/reference/fmf-hooks-catalog',
  },
  {
    title: 'Release Channels',
    description: 'Steam Workshop vs GitHub for discovery and betas.',
    link: '/wiki/reference/release-channels',
  },
  {
    title: 'Unified Roadmap',
    description: 'Consolidated planning with duplicate tracks removed.',
    link: '/wiki/roadmap/unified-roadmap',
  },
  { title: 'Mods Catalog', description: 'Dynamic /mods page with wiki and download links.', link: '/mods' },
];

export const sharedWorkflowLinksEn: HomepageDocLink[] = [
  {
    title: 'End-user docs',
    description: 'Install, update, and troubleshooting paths.',
    link: '/wiki/legacy/wiki-import/EndUser/End-User-Release',
  },
  {
    title: 'Mod developer docs',
    description: 'Setup, debugging, and hook integration.',
    link: '/wiki/legacy/wiki-import/ModDevs/Mod-Developer-Debug',
  },
  {
    title: 'Repo inventory',
    description: 'Split-repo layout and drift notes for contributors.',
    link: '/wiki/contributors/repo-inventory',
  },
  {
    title: 'Contributor workflow',
    description: 'Standards, CI, and documentation workflow.',
    link: '/wiki/contributors/docusaurus-workflow',
  },
  {
    title: 'Plugin security audit',
    description: 'Submission and malicious-code review process.',
    link: '/wiki/contributors/plugin-submission-audit',
  },
];

export const sharedKnowledgeLinksDe: HomepageDocLink[] = [
  { title: 'Wiki-Übersicht', description: 'Einstieg unter /wiki.', link: '/wiki' },
  {
    title: 'Framework-Core',
    description: 'Runtime-Hooks, Bridge, Events und Architektur.',
    link: '/wiki/mods/framework',
  },
  {
    title: 'Plugins (FFM)',
    description: 'FFM.Plugin.*-Doku und Release-Seiten.',
    link: '/wiki/plugins/',
  },
  { title: 'Mods (FMF)', description: 'Gameplay-Mods, Releases und Modul-Doku.', link: '/wiki/mods/' },
  {
    title: 'FMF-Hooks-Katalog',
    description: 'Hook-Strings und Event-IDs aus den Core-Quellen.',
    link: '/wiki/reference/fmf-hooks-catalog',
  },
  {
    title: 'Release-Kanäle',
    description: 'Steam Workshop vs GitHub für Discovery und Betas.',
    link: '/wiki/reference/release-channels',
  },
  {
    title: 'Einheitliche Roadmap',
    description: 'Zusammengeführte Planung ohne doppelte Tracks.',
    link: '/wiki/roadmap/unified-roadmap',
  },
  { title: 'Mods-Katalog', description: 'Dynamische /mods-Seite mit Wiki- und Download-Links.', link: '/mods' },
];

export const sharedWorkflowLinksDe: HomepageDocLink[] = [
  {
    title: 'Endnutzer-Doku',
    description: 'Installation, Updates und Fehlerbehebung.',
    link: '/wiki/legacy/wiki-import/EndUser/End-User-Release',
  },
  {
    title: 'Mod-Entwickler-Doku',
    description: 'Setup, Debugging und Hook-Integration.',
    link: '/wiki/legacy/wiki-import/ModDevs/Mod-Developer-Debug',
  },
  {
    title: 'Repo-Inventar',
    description: 'Split-Repo-Layout und Drift-Hinweise.',
    link: '/wiki/contributors/repo-inventory',
  },
  {
    title: 'Contributor-Workflow',
    description: 'Standards, CI und Doku-Workflow.',
    link: '/wiki/contributors/docusaurus-workflow',
  },
  {
    title: 'Plugin-Security-Audit',
    description: 'Einreichung und Review auf Schadcode.',
    link: '/wiki/contributors/plugin-submission-audit',
  },
];

export const homepageShellEn: Pick<
  HomepageContent,
  | 'heroBadge'
  | 'heroBrandLine1'
  | 'heroBrandLine2Gradient'
  | 'knowledgeSectionTitle'
  | 'workflowSectionTitle'
  | 'codeSectionTitle'
  | 'codeSectionLead'
  | 'ctaDiscordTitle'
  | 'ctaDiscordLead'
  | 'ctaDiscordButton'
  | 'knowledgeLinks'
  | 'workflowLinks'
> = {
  heroBadge: 'gregFramework · docs live',
  heroBrandLine1: 'greg',
  heroBrandLine2Gradient: 'Framework',
  knowledgeSectionTitle: 'Knowledge architecture',
  workflowSectionTitle: 'Workflows',
  codeSectionTitle: 'Engineered for mod authors',
  codeSectionLead:
    'C# mods on MelonLoader, FMF plugins, and optional Rust FFI bridges — one documentation hub, versioned with the split repos.',
  ctaDiscordTitle: 'Build with the community',
  ctaDiscordLead: 'Ask questions, share mods, and follow framework releases alongside core development.',
  ctaDiscordButton: 'Join Discord',
  knowledgeLinks: sharedKnowledgeLinksEn,
  workflowLinks: sharedWorkflowLinksEn,
};

export const homepageShellDe: Pick<
  HomepageContent,
  | 'heroBadge'
  | 'heroBrandLine1'
  | 'heroBrandLine2Gradient'
  | 'knowledgeSectionTitle'
  | 'workflowSectionTitle'
  | 'codeSectionTitle'
  | 'codeSectionLead'
  | 'ctaDiscordTitle'
  | 'ctaDiscordLead'
  | 'ctaDiscordButton'
  | 'knowledgeLinks'
  | 'workflowLinks'
> = {
  heroBadge: 'gregFramework · Live-Dokumentation',
  heroBrandLine1: 'greg',
  heroBrandLine2Gradient: 'Framework',
  knowledgeSectionTitle: 'Wissensarchitektur',
  workflowSectionTitle: 'Arbeitsabläufe',
  codeSectionTitle: 'Für Mod-Autoren gebaut',
  codeSectionLead:
    'C#-Mods auf MelonLoader, FMF-Plugins und optionale Rust-FFI-Brücken — ein Dokumentations-Hub, versioniert mit den Split-Repos.',
  ctaDiscordTitle: 'Mit der Community bauen',
  ctaDiscordLead: 'Fragen stellen, Mods teilen und Releases parallel zur Core-Entwicklung verfolgen.',
  ctaDiscordButton: 'Discord beitreten',
  knowledgeLinks: sharedKnowledgeLinksDe,
  workflowLinks: sharedWorkflowLinksDe,
};
