# ENV Matrix (modstore)

Diese Matrix teilt Variablen in 5 Gruppen ein:

- `generated`: beim Setup automatisch erzeugen
- `external`: von Drittanbietern bereitstellen
- `derived`: aus Basis-Config ableiten
- `manual`: bewusst manuell konfigurieren
- `runtime/ci`: vom Laufzeitsystem/CI injizieren

## Generated

- `POSTGRES_PASSWORD`
- `MINIO_ROOT_PASSWORD`
- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`
- `BETTER_AUTH_SECRET`
- `DEEP_LINK_HMAC_SECRET`
- `MANIFEST_SIGNING_SECRET`
- `API_TOKEN`
- `SERVICE_PASSWORD_BOT`
- `OAUTH_LINK_SESSION_SECRET`
- `DASHBOARD_SESSION_SECRET`
- `GREG_BOT_API_TOKEN`
- `GITEA_WEBHOOK_SECRET`
- `CODECHECK_WEBHOOK_SECRET`

## Derived

- `DATABASE_URL` aus `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_DB`
- `NEXT_PUBLIC_APP_URL` aus `APP_BASE_URL`
- `BETTER_AUTH_URL` aus `APP_BASE_URL`
- `NEXTAUTH_URL` aus `APP_BASE_URL`
- `OAUTH_UI_RETURN_BASE` aus `APP_BASE_URL`

## External

- OAuth Provider Secrets/IDs (`DISCORD_*`, `GITHUB_*`, `CODEBERG_*`, `GITLAB_*`)
- Discord Bot/App Credentials (`DISCORD_TOKEN`, `DISCORD_BOT_TOKEN`, `DISCORD_PUBLIC_KEY`, `DISCORD_APPLICATION_ID`)
- Scanner/Integrations (`VIRUSTOTAL_API_KEY`, `CODECHECK_GITHUB_PRIVATE_KEY`, `CODECHECK_GITHUB_APP_ID`)
- Webhook URLs (`DISCORD_WEBHOOK_MOD_RELEASES`, `DISCORD_WEBHOOK_SECURITY_ALERTS`, `STATUS_WEBHOOK_URL`)

## Runtime/CI

- `SERVER_ENV_FILE`
- `GITHUB_WORKSPACE`
- Optional: image tags, wenn im Pipeline-Run gesetzt

## Manual

Alle übrigen Infrastruktur-/Domain-/Feature-/Limit-/ID-Werte (Ports, Hostnames, Bucket-Namen, Role IDs, Flags, Timeouts, Limits).

---

## Implementierungsstatus

- `scripts/env-first-time-setup.sh`: erzeugt `generated`-Secrets automatisch beim Enter auf Default/Placeholder.
- `scripts/env-update-missing.sh`: erzeugt `generated`-Secrets automatisch für fehlende/placeholder/default-Werte.
- `DATABASE_URL` wird in beiden Skripten aus `POSTGRES_*` abgeleitet.
