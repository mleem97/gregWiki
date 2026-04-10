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

Content is edited directly under [`docs/`](./docs/). **Canonical architecture & doc rules:** [`docs/meta/system-architecture-principles.md`](./docs/meta/system-architecture-principles.md) (ModManager → Framework → Plugins → Mods). The old GitHub Wiki bulk-import scripts (`wiki:sync`, `wiki:normalize-i18n`) are no-ops; see [`docs/getting-started/documentation-layout.md`](./docs/getting-started/documentation-layout.md).

## Deployment (Coolify / CI)

- **Default branch:** `main` — use this for new work and PRs.
- **`master`:** kept in sync with `main` for hosts that still clone `master` (e.g. older Coolify defaults). Prefer setting the deployment **branch to `main`** in Coolify → Application → **Git** → Branch.

### Coolify (Dockerfile) — avoid `/app/package.json` missing

The image expects **`package.json` at the image root `/app`**. That only happens if the **Docker build context** is this repo (gregWiki), not a parent monorepo folder.

| Setting                             | Value                                                                                                                                                                              |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dockerfile location**             | `Dockerfile` (or `gregWiki/Dockerfile` if the Git repo is the parent workspace)                                                                                                    |
| **Base directory / Root directory** | **`gregWiki`** when the cloned repo contains `gregCore/`, `gregWiki/`, … next to each other. If Coolify only clones **`mleem97/gregWiki`**, base directory is **`.`** (repo root). |
| **Do not**                          | Set build context to the parent `gregFramework` folder unless Dockerfile uses `COPY gregWiki/…` (this Dockerfile does not).                                                        |
| **Volumes**                         | Do **not** bind-mount an empty host path over `/app` — that hides `package.json` from the image.                                                                                   |

Symptom: `docker-entrypoint: ERROR: /app/package.json not found` → wrong build context or a bad volume on `/app`.

## Docker

Build context **must** be this repository root (the folder that contains `package.json`):

```bash
cd path/to/gregWiki   # directory that contains package.json
docker compose up --build
# or
docker build -t gregwiki-docs .
docker run --rm -p 3000:3000 gregwiki-docs
```

If the wiki lives inside a **gregFramework** workspace, run Compose from the parent folder:

```bash
cd path/to/gregFramework
docker compose -f docker-compose.gregwiki.yml up --build
```

(`docker-compose.gregwiki.yml` sets `build.context: ./gregWiki` and mounts `./gregWiki` to `/app` for dev.)

## Related repositories

The [`gregFramework`](https://github.com/mleem97/gregFramework) workspace groups **gregCore**, **gregMods**, **gregExtensions**, **gregWiki**, and related tools. Source-of-truth code paths for hooks and builds live in those repos, not only in this documentation tree.
