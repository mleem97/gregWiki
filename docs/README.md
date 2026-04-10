# Documentation layout (`docs/`)

This folder is the **single source of truth** for the public Docusaurus site. The app lives in the **gregWiki** repository root next to `docs/`; built pages are served under the **`/wiki`** base path.

## How content is organized

| Area | Path | Purpose |
|------|------|--------|
| **Landing** | [`intro` → `/wiki`](/wiki) | Mod author wiki home. |
| **Topics hub** | [`topics/`](./topics/index.md) | Cross-cutting overviews (security, FFI, multiplayer, assets, meta). |
| **Mods & plugins** | [`mods/`](./mods/), [`plugins/`](./plugins/) | Gameplay mods (`FMF.*`) and framework plugins (`FFM.Plugin.*`). |
| **Releases** | [`releases/`](./releases/) | Per-artifact release notes. |
| **Reference** | [`reference/`](./reference/) | Hooks, naming, MCP, generated catalogs. |
| **Contributors** | [`contributors/`](./contributors/) | Repo layout, Docusaurus workflow, design system. |
| **Guides** | [`guides/`](./guides/mod-developers/overview.md) | **Players:** `/players`. Authors: mod developers, contributors, sponsors. |
| **Roadmap** | [`roadmap/`](./roadmap/) | Planning docs. |
| **Meta** | [`meta/`](./meta/) | Workshop, devserver, backlog; [architecture principles](./meta/system-architecture-principles.md) (ModManager → Framework → Plugins → Mods). |

## URLs

- Doc id `intro` → `/wiki` (see `intro.md`, `slug: /`).
- Most docs → `/wiki/<doc-path>` (e.g. `mods/framework` → `/wiki/mods/framework`).

## Scripts (repository root)

| Script | Role |
|--------|------|
| `wiki:sync` | **No-op** (legacy GitHub Wiki mirror removed). |
| `wiki:normalize-i18n` | **No-op** (same). |
| `wiki:refresh` | Runs both no-ops; safe for old CI hooks. |

Author new pages under `docs/`; use **git history** if you need text from the former bulk import.

## Language

- **English only** — all files under `docs/`.
