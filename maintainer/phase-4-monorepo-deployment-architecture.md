# Phase 4 — Monorepo Setup & Go-Live Planning
## gregFramework Deployment Architecture for Docker on Debian

## Purpose
Diese Phase definiert die operative Grundlage für den `gregFramework` Monorepo in `WebApps/modstore`: Layout, Workspace-Strategie, Container-Modell und Go-Live auf Debian mit Docker.

Sie gilt für `store`, `bot`, `scanner` und alle zukünftigen Apps/Packages.

## Platform Goal
Ein Monorepo mit mehreren deploybaren Services und gemeinsam genutzten Paketen.

Mindestens unterstützt:
- `apps/store` (Next.js Plattformoberfläche + API)
- `apps/bot` (Discord Worker)
- `apps/scanner` (gregScan Worker)
- `packages/auth`, `db`, `ui`, `permissions`, `validation`, `storage`, `queue`, `shared`, `config`

## Monorepo Standard
- `pnpm` Workspaces
- `turborepo` Task-Orchestrierung
- Shared TS/ESLint/Prettier Baselines
- zentrale ENV-Validierung

Empfohlene Struktur:

```txt
WebApps/modstore/
├── apps/
│   ├── store/
│   ├── bot/
│   └── scanner/
├── packages/
│   ├── auth/
│   ├── db/
│   ├── ui/
│   ├── permissions/
│   ├── validation/
│   ├── storage/
│   ├── queue/
│   ├── shared/
│   └── config/
├── infra/
│   ├── compose/
│   ├── proxy/
│   ├── scripts/
│   └── runbooks/
└── docs/
```

## Deployment Target
- Debian Stable
- Docker Engine + Compose Plugin
- Reverse Proxy (`Traefik` bevorzugt)
- isolierte Container-Netzwerke (`edge` / `internal`)

## Runtime Topology
```txt
Internet
  -> reverse proxy (traefik)
  -> edge network: store
                   optional webhook ingress
  -> internal network: bot, scanner, postgres, redis
```

Regeln:
- nur Proxy exponiert `80/443`
- `postgres`/`redis` bleiben intern
- Bot/Scanner nur intern, außer explizit benötigte Ingress-Endpunkte

## Container Policy
Alle Runtime-Images:
- Multi-Stage Build
- non-root user
- `.dockerignore`
- minimale Runtime-Abhängigkeiten
- Healthchecks (wo möglich)

## Compose Standard
Produktive Datei: `infra/compose/docker-compose.prod.yml`

Muss enthalten:
- Restart Policies
- Healthchecks
- Service-Dependency über Health
- getrennte Netzwerke
- persistente Volumes
- keine Source Bind-Mounts in Prod
- immutable `IMAGE_TAG` Deploy-Pattern

Dev-Datei: `infra/compose/docker-compose.dev.yml`

Muss enthalten:
- reproduzierbarer lokaler Stack
- `postgres`, `redis`
- optionale Dev-Profile (z. B. `clamav`, `minio`)

## Storage Strategy
- Primär: PostgreSQL
- Queue/Cache: Redis
- Objekte: S3/R2 (optional MinIO)
- Kategorien: `quarantine`, `live`, `archive`

## Migration Policy
Produktive Reihenfolge:
1. DB Backup
2. Stage-Verifikation
3. neue Images pullen
4. `prisma migrate deploy`
5. Services aktualisieren
6. Smoke Tests

## Backup & Recovery Baseline
- Nightly PostgreSQL Dumps
- Pre-Deploy Snapshot/Dump
- Restore-Test als Pflicht
- dokumentierte RTO/RPO-Ziele

## Observability Baseline
Mindestens:
- strukturierte Logs (web, bot, scanner)
- Fehlerereignisse für Auth, Upload, Queue, Scan, Bot Dispatch
- Health-Endpunkte (`/api/health/live`, `/api/health/ready`)

## Security Hardening
Host:
- SSH Key-Only
- Passwortlogin aus
- Firewall minimal offen
- Docker Socket nicht öffentlich

Container:
- non-root
- keine privileged container
- minimale Capabilities

## Rollout Sequence
- **4A**: Workspace + Shared Packages + Task-Pipeline
- **4B**: Dockerfiles + Compose dev/prod + Proxy Config
- **4C**: Debian Staging mit End-to-End-Verifikation
- **4D**: Debian Production Go-Live + DNS + Monitoring

## Definition of Done
Phase 4 ist abgeschlossen, wenn:
- Monorepo-Struktur stabil ist
- Shared Packages scaffolded sind
- lokaler Dev-Compose läuft
- Stage auf Debian lauffähig ist
- Prod-Compose/Proxy/Runbook vorhanden ist
- Secrets-, Backup-, Migration-Strategie dokumentiert ist
