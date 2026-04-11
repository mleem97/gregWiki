// @ts-check

const config = {
  title: 'gregFramework',
  tagline: 'Mod-author documentation for Data Center; players use /players and the mod catalog.',
  favicon: 'img/greg_dc.png',
  url: 'https://frikadellental.de',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  scripts: ['/js/canonical-host.js'],
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
      },
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-GB'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/wiki',
          /** Player help lives on /players; keep sources in repo but do not publish duplicate routes. */
          exclude: ['**/guides/players/**'],
          editUrl: 'https://github.com/mleem97/gregWiki/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    '@docusaurus/plugin-css-cascade-layers',
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          const redirectsToHere = {
            '/wiki/framework/architecture': ['/wiki/architecture'],
            '/wiki/framework/fmf-hooks': ['/wiki/fmf-hooks'],
            '/wiki/framework/hexmod': ['/wiki/hexmod'],
            '/wiki/tools/workshop-uploader': ['/wiki/workshop-uploader'],
            '/wiki/getting-started/documentation-layout': ['/wiki/README'],
            '/wiki/getting-started/quickstart': ['/wiki/getting-started', '/wiki/getting-started/documentation-layout'],
            '/wiki/development/concepts/hooks-and-events': [
              '/wiki/framework/architecture',
              '/wiki/framework/greg-hooks-and-events',
              '/wiki/framework/fmf-hooks',
              '/wiki/framework/hexmod',
              '/wiki/topics/ffi-and-hooks/overview',
            ],
            '/wiki/reference/greg-hooks-catalog': ['/wiki/reference/greg-hook-naming'],
            '/wiki/reference/fmf-hook-naming': ['/wiki/reference/fmf-hooks-catalog'],
            '/wiki/legal/sponsors': ['/wiki/SPONSORS'],
            '/wiki/developers': [
              '/wiki/meta/system-architecture-principles',
              '/wiki/guides/mod-developers/overview',
              '/wiki/guides/mod-developers/greg-hooks-showcase',
              '/wiki/guides/contributors/topics-overview',
              '/wiki/guides/contributors/contributor-workshop',
              '/wiki/guides/contributors/release',
              '/wiki/guides/sponsors/overview',
              '/wiki/meta/Steam-Workshop-and-Tooling',
              '/wiki/meta/devserver-betas',
              '/wiki/meta/IDEA_BACKLOG',
              '/wiki/reference/wiki-mapping',
              '/wiki/reference/mod-store-vision',
              '/wiki/reference/mcp-server',
              '/wiki/reference/release-channels',
              '/wiki/reference/reference-data-files',
              '/wiki/reference/modding-language-requirement',
              '/wiki/topics/',
            ],
            '/mods': [
              '/wiki/plugins/',
              '/wiki/mods/',
              '/wiki/mods/framework',
              '/wiki/plugins/ffm-plugin-asset-exporter',
              '/wiki/releases/plugins/ffm-plugin-asset-exporter-release',
              '/wiki/plugins/ffm-plugin-multiplayer',
              '/wiki/releases/plugins/ffm-plugin-multiplayer-release',
              '/wiki/plugins/ffm-plugin-player-models',
              '/wiki/releases/plugins/ffm-plugin-player-models-release',
              '/wiki/plugins/ffm-plugin-sysadmin',
              '/wiki/releases/plugins/ffm-plugin-sysadmin-release',
              '/wiki/plugins/ffm-plugin-web-ui-bridge',
              '/wiki/releases/plugins/ffm-plugin-web-ui-bridge-release',
              '/wiki/releases/plugins/fmf-modpathredirector-release',
              '/wiki/mods/fmf-console-input-guard',
              '/wiki/releases/mods/fmf-console-input-guard-release',
              '/wiki/mods/fmf-gregify-employees',
              '/wiki/releases/mods/fmf-gregify-employees-release',
              '/wiki/mods/fmf-hex-label-mod',
              '/wiki/releases/mods/fmf-hex-label-mod-release',
              '/wiki/mods/fmf-lang-compat-bridge',
              '/wiki/releases/mods/fmf-lang-compat-bridge-release',
              '/wiki/mods/fmf-ui-replacement-mod',
              '/wiki/releases/mods/fmf-ui-replacement-mod-release',
            ],
            '/wiki/guides/mod-developers/overview': ['/wiki/topics/mod-developers/overview'],
            '/wiki/guides/sponsors/overview': ['/wiki/topics/sponsors/overview'],
            '/wiki/guides/contributors/contributor-workshop': ['/wiki/guides/contributor-workshop'],
            '/wiki/guides/contributors/release': ['/wiki/guides/release'],
            '/wiki/guides/contributors/topics-overview': ['/wiki/topics/contributors/overview'],
            '/wiki/mods/index': ['/wiki/mods/mods', '/wiki/mods/mods/index'],
          };
          if (redirectsToHere[existingPath]) {
            return redirectsToHere[existingPath];
          }

          if (existingPath.startsWith('/wiki/mods/') && existingPath.match(/fmf-(console-input-guard|gregify-employees|hex-label-mod|lang-compat-bridge|ui-replacement-mod)\/?$/)) {
            const slug = existingPath.replace('/wiki/mods/', '').replace(/\/$/, '');
            return [`/wiki/mods/extensions/${slug}`, `/wiki/mods/mods/${slug}`];
          }

          if (existingPath.startsWith('/wiki')) {
            const legacyPath = existingPath.slice('/wiki'.length) || '/';
            // Never map site root (/) onto /wiki — that would override the homepage.
            if (legacyPath === '/' || legacyPath === '') {
              return undefined;
            }
            // Avoid shadowing static pages and explicit redirects in `redirects` below
            if (
              legacyPath === '/mods' ||
              legacyPath.startsWith('/mods/') ||
              legacyPath === '/plugins' ||
              legacyPath.startsWith('/plugins/')
            ) {
              return undefined;
            }
            return [legacyPath];
          }

          return undefined;
        },
        redirects: [
          {
            to: '/wiki',
            from: [
              '/wiki/docs',
              '/wiki/legacy/wiki-import/Home',
              '/wiki/wiki-import/Home',
              '/wiki/legacy/wiki-import',
              '/wiki/wiki-import',
              '/docs',
            ],
          },
          {
            to: '/players',
            from: [
              '/wiki/legacy/wiki-import/EndUser/',
              '/wiki/wiki-import/EndUser/',
              '/wiki/guides/players/overview',
              '/wiki/guides/players/enduser-workshop',
              '/wiki/guides/players/audiences-overview',
              '/wiki/guides/players/newbies',
              '/wiki/guides/players/intermediates',
              '/wiki/guides/players/professionals',
              '/wiki/guides/enduser-workshop',
              '/wiki/topics/end-user/overview',
              '/wiki/audiences/newbies',
              '/wiki/audiences/intermediates',
              '/wiki/audiences/professionals',
            ],
          },
          {
            to: '/wiki/developers',
            from: ['/wiki/legacy/wiki-import/ModDevs/', '/wiki/wiki-import/ModDevs/'],
          },
          {
            to: '/wiki/contributors/docusaurus-workflow',
            from: ['/wiki/legacy/wiki-import/Contributors/', '/wiki/wiki-import/Contributors/'],
          },
          {
            to: '/wiki/community/mod-index',
            from: ['/framework'],
          },
          {
            to: '/mods',
            from: ['/plugins', '/standalone-mods', '/wiki/mods/plugins', '/wiki/mods/extensions'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FFM.Plugin.AssetExporter.dll',
            from: ['/plugin/FFM.Plugin.AssetExporter.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FFM.Plugin.Multiplayer.dll',
            from: ['/plugin/FFM.Plugin.Multiplayer.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FFM.Plugin.PlayerModels.dll',
            from: ['/plugin/FFM.Plugin.PlayerModels.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FFM.Plugin.Sysadmin.dll',
            from: ['/plugin/FFM.Plugin.Sysadmin.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FFM.Plugin.WebUIBridge.dll',
            from: ['/plugin/FFM.Plugin.WebUIBridge.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FMF.ModPathRedirector.dll',
            from: ['/plugin/FMF.ModPathRedirector.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FMF.ConsoleInputGuard.dll',
            from: ['/mod/FMF.ConsoleInputGuard.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FMF.GregifyEmployees.dll',
            from: ['/mod/FMF.GregifyEmployees.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregModHexLabelMod/releases/latest/download/FMF.HexLabelMod.dll',
            from: ['/mod/FMF.HexLabelMod.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FMF.JoniMLCompatMod.dll',
            from: ['/mod/FMF.JoniMLCompatMod.dll', '/mod/FMF.LangCompatBridge.dll'],
          },
          {
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FMF.UIReplacementMod.dll',
            from: ['/mod/FMF.UIReplacementMod.dll'],
          },
        ],
      },
    ],
    function tailwindPlugin() {
      return {
        name: 'tailwindcss-integration',
        /** @param {{plugins: Array<unknown>}} postcssOptions */
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'gregFramework',
      hideOnScroll: false,
      style: 'dark',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/players', label: 'For players', position: 'left'},
        {
          label: 'Mod wiki',
          position: 'left',
          items: [
            {to: '/wiki', label: 'Wiki home'},
            {to: '/wiki/getting-started/quickstart', label: 'Getting started'},
            {to: '/wiki/developers', label: 'Documentation hub'},
            {to: '/mods', label: 'Mod catalog'},
          ],
        },
        {to: '/mods', label: 'Mods', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-mods', 'aria-label': 'Mods'},
        {href: 'https://git.datacentermods.com/teamGreg', label: 'teamGreg Git', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-github', 'aria-label': 'teamGreg Git'},
        {href: 'https://discord.gg/greg', label: 'Discord', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-discord', 'aria-label': 'Discord'},
        {href: 'https://github.com/mleem97/gregFramework/issues', label: 'Support', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-support', 'aria-label': 'Support'},
        {href: 'https://github.com/mleem97/gregFramework', label: 'GitHub', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-github', 'aria-label': 'GitHub'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community Project',
          items: [
            {label: 'Catalog', to: '/mods'},
            {label: 'frikadellental.de', href: 'https://frikadellental.de'},
            {
              label: 'GitHub',
              href: 'https://github.com/mleem97/gregFramework',
              className: 'footer-link-icon footer-link-github',
            },
            {
              label: 'teamGreg Git',
              href: 'https://git.datacentermods.com/teamGreg',
              className: 'footer-link-icon footer-link-github',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/greg',
              className: 'footer-link-icon footer-link-discord',
            },
          ],
        },
      ],
      copyright:
        'COPYRIGHT 2026 MEYER MEDIA. This is a community-run project, not affiliated with the official Data Center developers.',
    },
  },
};

module.exports = config;

