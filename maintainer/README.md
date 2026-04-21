# Engineering Policies

Verbindliche Standards für `WebApps/modstore`:

- [`phase-2-code-standards.md`](./phase-2-code-standards.md)
- [`phase-3-repository-policy.md`](./phase-3-repository-policy.md)
- [`phase-4-monorepo-deployment-architecture.md`](./phase-4-monorepo-deployment-architecture.md)
- [`phase-5-central-env-go-live.md`](./phase-5-central-env-go-live.md)
- [`review-checklist.md`](./review-checklist.md)
- PR-Template: [`.github/PULL_REQUEST_TEMPLATE.md`](../../.github/PULL_REQUEST_TEMPLATE.md)

## Rollout-Empfehlung
1. Neue Features ausschließlich nach Phase-2 bis Phase-5 umsetzen.
2. Legacy-Bereiche bei Änderungen inkrementell modernisieren.
3. PR-Reviews konsequent mit der Review-Checklist durchführen.
4. Wiederkehrende Abweichungen in Shared-Packages oder Lint-Regeln zentral beheben.
5. ENV-Werte nur zentral pflegen (eine ENV-Datei pro Umgebung).
