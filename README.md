# gregWiki

Docusaurus site for **gregFramework** / Data Center modding: configuration (`docusaurus.config.js`, `sidebars.js`), React under `src/`, content under [`docs/`](./docs/). Published route base path: **`/wiki`**.

---

## Part of gregFramework

This directory is part of the **[gregFramework](https://github.com/mleem97/gregFramework)** workspace. Clone sibling repositories side by side so each project lives at `gregFramework/<RepoName>/`. See the workspace [README](https://github.com/mleem97/gregFramework/blob/master/README.md) for the full layout and migration notes.

**Remote:** [`mleem97/gregWiki`](https://github.com/mleem97/gregWiki) — on-disk path: `gregFramework/gregWiki/`.

---

## Local development

```bash
npm install
npm run start
```

Production build:

```bash
npm run build
```

Optional: mirror the legacy GitHub Wiki — see [`docs/getting-started/documentation-layout.md`](./docs/getting-started/documentation-layout.md) and scripts `wiki:sync` / `wiki:normalize-i18n`.

---

## Deployment (Coolify / CI)

- **Default branch:** `main` — use this for new work and PRs.
- **`master`:** may still exist for older deployments; in Coolify, set the branch to **`main`** when possible.

### Coolify (Dockerfile) — missing `/app/package.json`

The image expects **`package.json` at the image root `/app`**. That only works if the **Docker build context** is this repository (gregWiki), not a parent monorepo folder without adjustments.

| Setting | Value |
|---------|--------|
| **Dockerfile** | `Dockerfile` at the gregWiki root |
| **Base directory** | **`.`** when only `gregWiki` is cloned. If gregWiki sits **next to** gregCore in the same clone, often set **`gregWiki`** as the subdirectory. |
| **Volumes** | Do not use an empty host mount over `/app` that hides `package.json`. |

Symptom: `docker-entrypoint: ERROR: /app/package.json not found` → wrong context or volume.

---

## Docker (local)

Build context = **this** repository (folder that contains `package.json`):

```bash
cd path/to/gregWiki
docker compose up --build
```

If gregWiki lives inside **gregFramework**, from the workspace root:

```bash
cd path/to/gregFramework
docker compose -f docker-compose.gregwiki.yml up --build
```

(`docker-compose.gregwiki.yml` sets `build.context: ./gregWiki`.)

---

## See also

- [gregFramework README](../README.md) — flat layout `gregFramework/{RepoName}/`
- Source code and builds: **gregCore**, **gregMod.*** , **gregExt.*** as separate repositories (not only this documentation)
