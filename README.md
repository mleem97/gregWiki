# gregWiki — Frika Mod Framework documentation

This repository contains the **Docusaurus site** (`docusaurus.config.js`, `src/`, `sidebars.js`) and all **Markdown/MDX content** under [`docs/`](./docs/). Published docs use the route base path **`/wiki`**.

## Local development

```bash
npm install
npm run start
```

Production build:

```bash
npm run build
```

Optional: refresh the legacy GitHub Wiki mirror from a sibling `../.wiki/` clone under `gregFramework/` — see [`docs/README.md`](./docs/README.md) and `npm run wiki:sync` / `wiki:normalize-i18n`.

## Docker

Build context is this repository root:

```bash
docker build -t gregwiki-docs .
docker run --rm -p 3000:3000 gregwiki-docs
```

## Related repositories

The [`gregFramework`](https://github.com/mleem97/gregFramework) workspace groups **gregCore**, **gregMods**, **gregExtensions**, **gregWiki**, and related tools. Source-of-truth code paths for hooks and builds live in those repos, not only in this documentation tree.
