/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
/** Mod-author wiki only — player help lives at /players */
const sidebars = {
  docs: [
    'getting-started/intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: ['getting-started/architecture', 'getting-started/quickstart'],
    },
    {
      type: 'category',
      label: 'Development',
      collapsed: true,
      items: [
        'development/concepts/developers',
        'development/concepts/hooks-and-events',
        {
          type: 'category',
          label: 'API reference',
          items: [
            'development/api-reference/fmf-hook-naming',
            'development/api-reference/greg-hooks-catalog',
          ],
        },
        {
          type: 'category',
          label: 'Hooks library',
          items: [
            'development/hooks-library/customer-hooks',
            'development/hooks-library/employee-hooks',
            'development/hooks-library/gameplay-hooks',
            'development/hooks-library/network-hooks',
            'development/hooks-library/player-hooks',
            'development/hooks-library/rack-hooks',
            'development/hooks-library/server-hooks',
            'development/hooks-library/system-hooks',
            'development/hooks-library/ui-hooks',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Design system',
      collapsed: true,
      items: ['design-system/visual-philosophy'],
    },
    {
      type: 'category',
      label: 'Community',
      collapsed: true,
      items: ['community/mod-index', 'community/docusaurus-workflow'],
    },
    {
      type: 'category',
      label: 'Legal',
      collapsed: true,
      items: ['legal/sponsors'],
    },
  ],
};

module.exports = sidebars;
