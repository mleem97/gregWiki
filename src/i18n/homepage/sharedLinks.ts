import type {HomepageContent, HomepageDocLink} from './types';

/** Player-first links — technical docs live under /wiki/developers */
export const sharedKnowledgeLinksEn: HomepageDocLink[] = [
  {title: 'Wiki home', description: 'Short entry — players vs developers.', link: '/wiki'},
  {
    title: 'For players',
    description: 'Install, update, troubleshooting.',
    link: '/wiki/guides/players/overview',
  },
  {
    title: 'WorkshopManager',
    description: 'Browse and install Workshop mods.',
    link: '/wiki/guides/players/enduser-workshop',
  },
  {
    title: 'Release channels',
    description: 'Steam Workshop vs GitHub for builds.',
    link: '/wiki/reference/release-channels',
  },
  {title: 'Mod catalog', description: 'Modules with docs and download links.', link: '/mods'},
];

/** Authors & contributors — one hop to the full technical tree */
export const sharedWorkflowLinksEn: HomepageDocLink[] = [
  {
    title: 'Developers (hub)',
    description: 'Framework, mods, plugins, reference, roadmap — all technical links.',
    link: '/wiki/developers',
  },
  {
    title: 'Mod developer guide',
    description: 'Hooks, setup, and workflow entry.',
    link: '/wiki/guides/mod-developers/overview',
  },
  {
    title: 'Contributor workflow',
    description: 'Docs site and repo conventions.',
    link: '/wiki/contributors/docusaurus-workflow',
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
  knowledgeSectionTitle: 'Players — start here',
  workflowSectionTitle: 'Authors & contributors',
  codeSectionTitle: 'Building on gregFramework',
  codeSectionLead:
    'C# mods on MelonLoader, FFM plugins, and optional Rust bridges — details for authors are under Developers.',
  ctaDiscordTitle: 'Community',
  ctaDiscordLead: 'Questions about playing or building — ask in Discord.',
  ctaDiscordButton: 'Join Discord',
  knowledgeLinks: sharedKnowledgeLinksEn,
  workflowLinks: sharedWorkflowLinksEn,
};
