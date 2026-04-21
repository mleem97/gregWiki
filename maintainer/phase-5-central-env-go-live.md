# Phase 5 — Monorepo Blueprint, Central ENV Strategy, and Debian Docker Go-Live

## Purpose
Diese Phase setzt eine nicht verhandelbare Regel: **eine ENV-Quelle pro Umgebung**.

- Local: eine zentrale Root-`.env`
- Staging: eine zentrale Stage-ENV-Datei
- Production: eine zentrale Server-ENV-Datei

Apps validieren Werte über `packages/config`, nicht über verteilte `process.env`-Zugriffe.

## Central ENV Standard
### Single Source of Truth
Im Repo:
- `.env.example` (committed)
- `.env` (lokale Wahrheit)

Auf Debian Production:
- `/opt/gregframework/.env` (serverseitige Wahrheit)

Nicht erlaubt als primäre Quelle:
- `apps/store/.env*`
- `apps/bot/.env*`
- `apps/scanner/.env*`

## Public vs Private
- Nur `NEXT_PUBLIC_*` darf in den Browser.
- Secrets bleiben server-only.
- Keine Secrets über `next.config.* env` exponieren.

## Validation Contract
Alle Apps importieren aus `@greg-modstore/config`:
- `env.server.ts` für serverseitige Secrets
- `env.public.ts` für browserfähige Werte
- `env.shared.ts` für geteilte, nicht sensitive Runtime-Werte

Startup muss bei invaliden oder fehlenden Variablen hart fehlschlagen.

## Key Strategy
Prefix-Konvention:
- `NEXT_PUBLIC_` → client safe
- `DISCORD_` → Discord Integration
- `S3_` → Object Storage
- `SCAN_` → Scanner Regeln
- `APP_` → Plattform Metadaten

## Compose Integration
Beide Compose-Flows nutzen **eine** ENV-Datei:

```bash
docker compose --env-file .env -f infra/compose/docker-compose.dev.yml up -d
docker compose --env-file /opt/gregframework/.env -f infra/compose/docker-compose.prod.yml up -d
```

## Non-Negotiable Rules
- one env source per environment
- kein ENV-Sprawl pro App
- keine unvalidierten `process.env` Zugriffe im Code
- jede Variable in `.env.example` dokumentiert
- `packages/config` ist einzige zentrale ENV-Schnittstelle

## Debian Go-Live Paths
```txt
/opt/gregframework/
├── .env
├── compose/
│   └── docker-compose.prod.yml
├── backups/
├── logs/
└── releases/
```

## Definition of Done
Phase 5 ist abgeschlossen, wenn:
- zentrale ENV-Strategie umgesetzt ist
- `packages/config` existiert und validiert
- Apps ENV nur über shared config laden
- Dev/Prod Compose jeweils eine zentrale ENV-Datei nutzen
- `.env.example` vollständig und aktuell ist
- Debian Deploy-Kommandos dokumentiert sind
