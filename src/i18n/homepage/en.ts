import type {HomepageContent} from './types';
import {homepageShellEn} from './sharedLinks';

export const en: HomepageContent = {
  ...homepageShellEn,
  heroLine1: 'Play with mods.',
  heroLine2: 'Ship with confidence.',
  heroSub1:
    'Player guides cover install, Workshop, and common fixes—without engine deep dives.',
  heroSub2: 'Authors get hooks, APIs, and repo layout under Developers in the wiki.',
  ctaStart: 'Player guides',
  ctaMods: 'Mod catalog',
  ctaModManager: 'Download Greg Mod Manager',
  modManagerSectionTitle: 'Greg Mod Manager',
  modManagerSectionBody:
    'Desktop app from the Gregtools project: Workshop browsing, installs, dependency checks, and project metadata. The download button opens GitHub’s latest release (the URL always points at the newest build).',
  modManagerDownloadLabel: 'Download latest release',
  modManagerLatestHint: 'Uses GitHub’s /releases/latest redirect so you always get current assets.',
  docsPaths: 'Documentation',
  featureTitles: [
    'Player-first guides',
    'Workshop and updates',
    'Structured wiki',
    'Community',
  ],
  featureDescriptions: [
    'Step-by-step install and troubleshooting. No repository jargon on day one.',
    'Greg Mod Manager and the release-channels page explain where mods are published.',
    'Short paths for players; technical depth lives under Developers.',
    'Discord and GitHub for support—dig into gregCore only when you need to.',
  ],
  comingSoon: 'Coming soon',
  comingSoonText:
    'datacentermods.com is in preparation. Until it launches, use the player guides in the wiki and the mod catalog on this site.',
  communityTitle: 'Community',
  communityText:
    'This site documents gregFramework, community mods, and plugins for Data Center Simulator.',
  docsEndUserTitle: 'Players',
  docsEndUserDescription: 'Install, update, FAQ, troubleshooting.',
  docsModDevsTitle: 'Mod developers',
  docsModDevsDescription: 'Setup, debugging, hooks, and references.',
  docsContributorsTitle: 'Contributors',
  docsContributorsDescription: 'Conventions, CI, and docs workflow.',
  docsCapabilityTitle: 'Capability matrix',
  docsCapabilityDescription: 'Feature map and implementation notes.',
  ecosystemTitle: 'Ecosystem',
  ecosystemCoreTitle: 'gregFramework core',
  ecosystemCoreDescription: 'Hooks, events, optional FFI bridge, and runtime architecture.',
  ecosystemCoreCta: 'Open core docs',
  ecosystemRustTitle: 'Rust and FFI',
  ecosystemRustDescription: 'Guides for external and standalone runtimes.',
  ecosystemRustCta: 'Open Rust / FFI docs',
  ecosystemMultiplayerTitle: 'Multiplayer and plugins',
  ecosystemMultiplayerDescription: 'Roadmap, plugin docs, and related modules.',
  ecosystemMultiplayerCta: 'Open multiplayer docs',
  gregTitle: 'Greg',
  gregText1:
    'Greg is the project’s mascot: the technician who shows up when a rack misbehaves or a build breaks. Calm, practical, slightly tired.',
  gregText2:
    'The framework tries to be the same—clear docs, predictable hooks, less guesswork when you mod or maintain.',
  gregQuote: 'Be smart. Be like Greg.',
  supportTitle: 'Issues and feedback',
  supportText: 'Report bugs, suggest doc improvements, and follow work on GitHub.',
  supportCta: 'GitHub issues',
  availableModsLabel: 'Mod catalog',
  repositoryLabel: 'gregFramework on GitHub',
  joinLabel: 'Discord',
};
