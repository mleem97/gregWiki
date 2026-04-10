/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
/** Mod-author wiki only — player help lives at /players */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: ['getting-started', 'getting-started/documentation-layout', 'workspace/index'],
    },
    'developers',
    'meta/system-architecture-principles',
    {
      type: 'category',
      label: 'Framework',
      collapsed: true,
      items: [
        'framework/architecture',
        'framework/greg-hooks-and-events',
        'framework/fmf-hooks',
        'framework/hexmod',
      ],
    },
    {
      type: 'category',
      label: 'Plugins (FFM)',
      collapsed: true,
      items: [
        'plugins/index',
        'plugins/ffm-plugin-asset-exporter',
        'plugins/ffm-plugin-multiplayer',
        'plugins/ffm-plugin-player-models',
        'plugins/ffm-plugin-sysadmin',
        'plugins/ffm-plugin-web-ui-bridge',
      ],
    },
    {
      type: 'category',
      label: 'Mods (FMF)',
      link: {type: 'doc', id: 'mods/index'},
      collapsed: true,
      items: [
        'mods/index',
        'mods/framework',
        'mods/fmf-console-input-guard',
        'mods/fmf-gregify-employees',
        'mods/fmf-hex-label-mod',
        'mods/fmf-lang-compat-bridge',
        'mods/fmf-ui-replacement-mod',
      ],
    },
    {
      type: 'category',
      label: 'Tools & operations',
      collapsed: true,
      items: [
        'tools/workshop-uploader',
        'meta/Steam-Workshop-and-Tooling',
        'meta/devserver-betas',
        'meta/IDEA_BACKLOG',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Mod developers',
          items: ['guides/mod-developers/overview', 'guides/mod-developers/greg-hooks-showcase'],
        },
        {
          type: 'category',
          label: 'Contributors',
          items: [
            'guides/contributors/topics-overview',
            'guides/contributors/contributor-workshop',
            'guides/contributors/release',
          ],
        },
        {
          type: 'category',
          label: 'Sponsors',
          items: ['guides/sponsors/overview'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      link: {type: 'doc', id: 'releases/index'},
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Plugin releases',
          items: [
            'releases/plugins/ffm-plugin-asset-exporter-release',
            'releases/plugins/ffm-plugin-multiplayer-release',
            'releases/plugins/ffm-plugin-player-models-release',
            'releases/plugins/ffm-plugin-sysadmin-release',
            'releases/plugins/ffm-plugin-web-ui-bridge-release',
            'releases/plugins/fmf-modpathredirector-release',
          ],
        },
        {
          type: 'category',
          label: 'Tool releases',
          items: ['releases/tools/gregtools-modmanager-1.0-release'],
        },
        {
          type: 'category',
          label: 'Mod releases',
          items: [
            'releases/mods/fmf-console-input-guard-release',
            'releases/mods/fmf-gregify-employees-release',
            'releases/mods/fmf-hex-label-mod-release',
            'releases/mods/fmf-lang-compat-bridge-release',
            'releases/mods/fmf-ui-replacement-mod-release',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/release-channels',
        'reference/wiki-mapping',
        'reference/mod-store-vision',
        'reference/fmf-hook-naming',
        'reference/fmf-hooks-catalog',
        'reference/greg-hooks-catalog',
        'reference/greg-hooks-registry',
        'reference/mcp-server',
        'reference/reference-data-files',
        'reference/modding-language-requirement',
      ],
    },
    {
      type: 'category',
      label: 'Contributors (workflow)',
      collapsed: true,
      items: [
        'contributors/repo-inventory',
        'contributors/monorepo-target-layout',
        'contributors/luminescent-design-system',
        'contributors/docusaurus-workflow',
        'contributors/plugin-submission-audit',
        'contributors/sponsorship-automation',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      collapsed: true,
      items: ['roadmap/unified-roadmap', 'roadmap/mod-store-stages'],
    },
    {
      type: 'category',
      label: 'Topics hub',
      link: {type: 'doc', id: 'topics/index'},
      collapsed: true,
      items: [
        'topics/index',
        {
          type: 'category',
          label: 'Cross-cutting topics',
          items: [
            'topics/assets-and-export/overview',
            'topics/multiplayer-and-networking/overview',
            'topics/ffi-and-hooks/overview',
            'topics/security-legal/overview',
            'topics/reference/overview',
            'topics/roadmap/overview',
            'topics/meta/overview',
            'topics/meta/game-folder-layout',
          ],
        },
      ],
    },
    'SPONSORS',
  ],
};

module.exports = sidebars;
