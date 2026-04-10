import type {HomepageContent, HomepageDocLink} from './types';

/** Player-facing wiki entry points */
export const sharedKnowledgeLinksEn: HomepageDocLink[] = [
  {
    title: 'Wiki home',
    description: 'Overview: players, authors, and where each topic lives.',
    link: '/wiki',
  },
  {
    title: 'Player guides',
    description: 'Install mods, updates, troubleshooting, and FAQs.',
    link: '/wiki/guides/players/overview',
  },
  {
    title: 'Greg Mod Manager',
    description: 'Desktop app for the Workshop: browse, install, and manage mods.',
    link: '/wiki/guides/players/enduser-workshop',
  },
  {
    title: 'Release channels',
    description: 'Where builds come from: Steam Workshop and GitHub.',
    link: '/wiki/reference/release-channels',
  },
  {
    title: 'Mod catalog',
    description: 'Listings with docs, versions, and download links.',
    link: '/mods',
  },
];

/** Authors and repo contributors */
export const sharedWorkflowLinksEn: HomepageDocLink[] = [
  {
    title: 'Developers hub',
    description: 'Framework, hooks, plugins, reference material, and roadmap.',
    link: '/wiki/developers',
  },
  {
    title: 'Mod developer guide',
    description: 'MelonLoader setup, gregCore hooks, and workflow.',
    link: '/wiki/guides/mod-developers/overview',
  },
  {
    title: 'Contributor workflow',
    description: 'How this docs site and the repos are maintained.',
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
  | 'codeSnippetCaption'
  | 'codeSnippetLoading'
  | 'codeSectionBullets'
  | 'ctaDiscordTitle'
  | 'ctaDiscordLead'
  | 'ctaDiscordButton'
  | 'knowledgeLinks'
  | 'workflowLinks'
> = {
  heroBadge: 'Documentation · Data Center modding',
  heroBrandLine1: 'greg',
  heroBrandLine2Gradient: 'Framework',
  knowledgeSectionTitle: 'Start here',
  workflowSectionTitle: 'For authors and contributors',
  codeSectionTitle: 'How mods connect to the game',
  codeSectionLead:
    'Mods use MelonLoader and Harmony. gregCore turns game methods into stable greg.* events your code can subscribe to—details are under Developers.',
  codeSnippetCaption: 'Random excerpt from gregCore',
  codeSnippetLoading: 'Loading code sample…',
  codeSectionBullets: [
    'gregCore patches the game and emits typed greg.* hook names (see greg_hooks.json).',
    'The wiki and catalog list each mod with releases and dependencies.',
    'Source is split across repos (for example gregCore, gregMods, gregExtensions, gregWiki).',
  ],
  ctaDiscordTitle: 'Questions?',
  ctaDiscordLead:
    'Ask in Discord for install issues, mod compatibility, or help building on gregFramework.',
  ctaDiscordButton: 'Open Discord',
  knowledgeLinks: sharedKnowledgeLinksEn,
  workflowLinks: sharedWorkflowLinksEn,
};
