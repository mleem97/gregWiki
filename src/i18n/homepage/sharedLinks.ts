import type {HomepageContent, HomepageDocLink} from './types';

/** Primary entry points from the homepage */
export const sharedKnowledgeLinksEn: HomepageDocLink[] = [
  {
    title: 'For players',
    description: 'MelonLoader, Greg Mod Manager, Workshop, troubleshooting — separate from the author wiki.',
    link: '/players',
  },
  {
    title: 'Mod author wiki',
    description: 'Getting started, hooks, plugins, mods, and reference (this is /wiki).',
    link: '/wiki',
  },
  {
    title: 'Release channels',
    description: 'Where builds ship: Steam Workshop and GitHub Releases.',
    link: '/wiki/developers',
  },
  {
    title: 'Mod catalog',
    description: 'Modules with docs, versions, and download links.',
    link: '/mods',
  },
];

/** Authors and repo contributors */
export const sharedWorkflowLinksEn: HomepageDocLink[] = [
  {
    title: 'Getting started',
    description: 'Workspace layout, build gregCore, hooks and registries.',
      link: '/wiki/getting-started/quickstart',
  },
  {
    title: 'Documentation hub',
    description: 'Full index: framework, plugins, mods, releases, roadmap.',
    link: '/wiki/developers',
  },
  {
    title: 'Mod developer guide',
    description: 'MelonLoader setup, gregCore hooks, and workflow.',
      link: '/wiki/developers',
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
  heroBadge: 'MODDING FOR DATA CENTER',
  heroBrandLine1: 'greg',
  heroBrandLine2Gradient: 'Framework',
  knowledgeSectionTitle: 'Start here',
  workflowSectionTitle: 'For authors and contributors',
  codeSectionTitle: 'How mods connect to the game',
  codeSectionLead:
    'Mods use MelonLoader and Harmony. gregCore turns game methods into stable greg.* events your code can subscribe to — see the mod author wiki and Documentation hub.',
  codeSnippetCaption: 'Random excerpt from gregCore',
  codeSnippetLoading: 'Loading code sample…',
  codeSectionBullets: [
    'gregCore patches the game and emits typed greg.* hook names (see greg_hooks.json).',
    'The wiki and catalog list each mod with releases and dependencies.',
    'Source is split across repos (for example gregCore, gregMods, gregExtensions, gregWiki).',
  ],
  ctaDiscordTitle: 'Questions?',
  ctaDiscordLead:
    'Need help with installs, compatibility, or setup? Ask the community and get practical answers.',
  ctaDiscordButton: 'Open Discord',
  knowledgeLinks: sharedKnowledgeLinksEn,
  workflowLinks: sharedWorkflowLinksEn,
};
