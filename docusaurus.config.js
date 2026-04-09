// @ts-check

const config = {
  title: 'gregFramework',
  tagline: 'Community docs for gregFramework — Data Center mods, FMF plugins, hooks, and split-repo layout',
  favicon: 'img/logo.svg',
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
    locales: ['en', 'de', 'fr', 'es', 'ru', 'ja'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-GB'},
      de: {label: 'Deutsch', htmlLang: 'de-DE'},
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
          if (existingPath === '/wiki/docs') {
            return ['/docs'];
          }

          // GitHub wiki mirror moved under /wiki/legacy/wiki-import/
          if (existingPath.startsWith('/wiki/legacy/wiki-import')) {
            return [existingPath.replace('/wiki/legacy/wiki-import', '/wiki/wiki-import')];
          }

          const redirectsToHere = {
            '/wiki/framework/architecture': ['/wiki/architecture'],
            '/wiki/framework/fmf-hooks': ['/wiki/fmf-hooks'],
            '/wiki/framework/hexmod': ['/wiki/hexmod'],
            '/wiki/tools/workshop-uploader': ['/wiki/workshop-uploader'],
            '/wiki/getting-started/documentation-layout': ['/wiki/README'],
            '/wiki/guides/players/newbies': ['/wiki/audiences/newbies'],
            '/wiki/guides/players/intermediates': ['/wiki/audiences/intermediates'],
            '/wiki/guides/players/professionals': ['/wiki/audiences/professionals'],
            '/wiki/guides/players/audiences-overview': ['/wiki/topics/audiences/overview'],
            '/wiki/guides/players/overview': ['/wiki/topics/end-user/overview'],
            '/wiki/guides/mod-developers/overview': ['/wiki/topics/mod-developers/overview'],
            '/wiki/guides/sponsors/overview': ['/wiki/topics/sponsors/overview'],
            '/wiki/guides/players/enduser-workshop': ['/wiki/guides/enduser-workshop'],
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

          if (existingPath.startsWith('/wiki/')) {
            const legacyPath = existingPath.replace('/wiki', '');
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
            to: '/wiki/mods/framework',
            from: ['/framework'],
          },
          {
            to: '/wiki/plugins/',
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
            to: 'https://github.com/mleem97/gregFramework/releases/latest/download/FMF.HexLabelMod.dll',
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
        {
          label: 'Docs Hub',
          position: 'left',
          items: [
            {to: '/wiki', label: 'Overview'},
            {to: '/wiki/mods/framework', label: 'Framework'},
            {to: '/wiki/plugins/', label: 'Plugins'},
            {to: '/wiki/mods/', label: 'Mods'},
            {to: '/wiki/roadmap/unified-roadmap', label: 'Roadmap'},
          ],
        },
        {
          type: 'localeDropdown',
          className: 'nav-locale nav-right-icon nav-icon-only',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [],
        },
        {to: '/mods', label: 'Mods', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-mods', 'aria-label': 'Mods'},
        {href: 'https://discord.gg/greg', label: 'Discord', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-discord', 'aria-label': 'Discord'},
        {href: 'https://github.com/mleem97/gregFramework/issues', label: 'Support', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-support', 'aria-label': 'Support'},
        {href: 'https://github.com/mleem97/gregFramework', label: 'GitHub', position: 'right', className: 'nav-right-icon nav-icon-only nav-link-github', 'aria-label': 'GitHub'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mleem97/gregFramework',
              className: 'footer-link-icon footer-link-github',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/greg',
              className: 'footer-link-icon footer-link-discord',
            },
            {
              label: 'Support',
              href: 'https://github.com/mleem97/gregFramework/issues',
              className: 'footer-link-icon footer-link-support',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} <a href="https://meyermedia.eu" target="_blank" rel="noopener noreferrer">Meyer Media</a><br/>Dieses Wiki ist ein Community-Projekt und steht in keiner Verbindung zu WASEKU oder dem Spiel selbst.`,
    },
  },
};

module.exports = config;

