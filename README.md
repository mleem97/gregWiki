# gregWiki

Docusaurus-Site für **gregFramework** / Data-Center-Modding: `docusaurus.config.js`, `sidebars.js`, React unter `src/`, Inhalte unter [`docs/`](./docs/). Öffentliche Route-Basis: **`/wiki`**.

| | |
|:---|:---|
| **Im Workspace** | Pfad `gregFramework/gregWiki/`. Überblick: [gregFramework README](../README.md). |
| **Remote** | [`mleem97/gregWiki`](https://github.com/mleem97/gregWiki) |

## Lokale Entwicklung

```bash
npm install
npm run start
```

Produktions-Build:

```bash
npm run build
```

Optional: Legacy-GitHub-Wiki spiegeln — siehe [`docs/getting-started/documentation-layout.md`](./docs/getting-started/documentation-layout.md) und Skripte `wiki:sync` / `wiki:normalize-i18n`.

## Deployment (Coolify / CI)

- **Standard-Branch:** `main` — für neue Arbeit und PRs.
- **`master`:** kann für ältere Deployments parallel existieren; in Coolify den Branch auf **`main`** stellen, wenn möglich.

### Coolify (Dockerfile) — `/app/package.json` fehlt

Das Image erwartet **`package.json` im Image-Root `/app`**. Das passt nur, wenn der **Docker-Build-Kontext** dieses Repo (gregWiki) ist — nicht ein übergeordneter Monorepo-Ordner ohne Anpassung.

| Einstellung | Wert |
|-------------|------|
| **Dockerfile** | `Dockerfile` im gregWiki-Root |
| **Base directory** | **`.`**, wenn nur `gregWiki` geklont wird. Liegt gregWiki **neben** gregCore im gleichen Clone, oft **`gregWiki`** als Unterverzeichnis setzen. |
| **Volumina** | Kein leerer Host-Mount über `/app`, der `package.json` verdeckt. |

Symptom: `docker-entrypoint: ERROR: /app/package.json not found` → falscher Kontext oder Volume.

## Docker (lokal)

Build-Kontext = **dieses** Repository (Ordner mit `package.json`):

```bash
cd path/to/gregWiki
docker compose up --build
```

Liegt gregWiki in **gregFramework**, alternativ vom Workspace aus:

```bash
cd path/to/gregFramework
docker compose -f docker-compose.gregwiki.yml up --build
```

(`docker-compose.gregwiki.yml` setzt `build.context: ./gregWiki`.)

## Siehe auch

- [gregFramework README](../README.md) — flaches Layout `gregFramework/{RepoName}/`
- Quellcode und Builds: **gregCore**, `gregMod.*`, `gregExt.*` als eigene Repos (nicht nur diese Doku)
