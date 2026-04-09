# gregWiki — gregFramework documentation

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

Optional: refresh the legacy GitHub Wiki mirror from a sibling `../.wiki/` clone under `gregFramework/` — see [`docs/getting-started/documentation-layout.md`](./docs/getting-started/documentation-layout.md) and `npm run wiki:sync` / `wiki:normalize-i18n`.

## Deployment (Coolify / CI)

- **Default branch:** `main` — use this for new work and PRs.
- **`master`:** kept in sync with `main` for hosts that still clone `master` (e.g. older Coolify defaults). Prefer setting the deployment **branch to `main`** in Coolify → Application → **Git** → Branch.

## Docker

Build context **must** be this repository root (the folder that contains `package.json`):

```bash
docker compose up --build
# or
docker build -t gregwiki-docs .
docker run --rm -p 3000:3000 gregwiki-docs
```

## Related repositories

The [`gregFramework`](https://github.com/mleem97/gregFramework) workspace groups **gregCore**, **gregMods**, **gregExtensions**, **gregWiki**, and related tools. Source-of-truth code paths for hooks and builds live in those repos, not only in this documentation tree.
