/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      items: ['getting-started', 'getting-started/documentation-layout'],
    },
    {
      type: 'category',
      label: 'Workspace',
      items: ['workspace/index'],
    },
    {
      type: 'category',
      label: 'Framework',
      items: ['framework/architecture', 'framework/fmf-hooks', 'framework/hexmod'],
    },
    {
      type: 'category',
      label: 'Plugins (FFM)',
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
      items: [
        {
          type: 'category',
          label: 'Players',
          key: 'guides-players',
          items: [
            'guides/players/overview',
            'guides/players/audiences-overview',
            'guides/players/newbies',
            'guides/players/intermediates',
            'guides/players/professionals',
            'guides/players/enduser-workshop',
          ],
        },
        {
          type: 'category',
          label: 'Mod developers',
          key: 'guides-mod-developers',
          items: ['guides/mod-developers/overview'],
        },
        {
          type: 'category',
          label: 'Contributors',
          key: 'guides-contributors',
          items: [
            'guides/contributors/topics-overview',
            'guides/contributors/contributor-workshop',
            'guides/contributors/release',
          ],
        },
        {
          type: 'category',
          label: 'Sponsors',
          key: 'guides-sponsors',
          items: ['guides/sponsors/overview'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      link: {type: 'doc', id: 'releases/index'},
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
      items: [
        'reference/wiki-mapping',
        'reference/mod-store-vision',
        'reference/fmf-hook-naming',
        'reference/fmf-hooks-catalog',
        'reference/mcp-server',
        'reference/release-channels',
        'reference/reference-data-files',
      ],
    },
    {
      type: 'category',
      label: 'Contributors (workflow)',
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
      items: ['roadmap/unified-roadmap', 'roadmap/mod-store-stages'],
    },
    {
      type: 'category',
      label: 'Topics hub',
      link: {type: 'doc', id: 'topics/index'},
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
    {
      type: 'category',
      label: 'Legacy',
      link: {type: 'doc', id: 'legacy/index'},
      items: [
        'legacy/index',
        'topics/wiki-import/overview',
        {
          type: 'autogenerated',
          dirName: 'legacy/wiki-import',
        },
      ],
    },
    'SPONSORS',
  ],
};

module.exports = sidebars;
