# Phase 24 — Platform Governance, Global Configuration Review and Fine-Grained Access Control

## Purpose
Diese Phase etabliert eine zentrale Governance-Schicht für `WebApps/modstore`, inklusive:
- vollständigem Review aller konfigurierbaren Bereiche
- zentralem Configuration Registry
- feingranularem RBAC/Capability-Modell
- Discord-Rollen als Identitätsquelle, interne Plattformrechte als Autorität
- Least-Privilege-by-default

---

## Cursor/Claude Implementation Prompt (copy/paste)

```md
You are implementing Phase 24 in an existing monorepo (`WebApps/modstore`) with Next.js app(s), Prisma, and admin modules.

## Mission
Build a platform governance layer with centralized configuration and fine-grained RBAC/capability enforcement.

Core principle:
Discord roles are identity/grouping signals.
Internal platform groups and capabilities are the final authority for product permissions.

Do NOT implement broad `isAdmin` access checks for sensitive actions.
Use: Discord Role -> Internal Group -> Bundle -> Capability -> Scope.

## Repository context
- Store app: `apps/store`
- DB package: `packages/db`
- Shared package(s): `packages/shared`, `packages/auth`
- Existing maintenance/admin/security/reviewer/recruiting features already exist and must be reviewed.

## Hard requirements
1. Perform a full platform review inventory and produce a machine-readable and human-readable governance inventory.
2. Introduce centralized configuration registry with ownership, risk level, and required capabilities.
3. Introduce RBAC data model with capabilities, bundles, groups, Discord mappings, and effective access snapshots.
4. Enforce permissions in BOTH UI and backend APIs.
5. Add effective access preview/simulation in admin panel.
6. Add full audit trail for permission/config changes.
7. Support scoped permissions (`global`, `guild`, `module`, `resource-type`, `record`).
8. Keep defaults secure (least privilege).

## Deliverables (must be created)
- `docs/engineering/phase-24-governance-inventory.md`
- `docs/engineering/phase-24-capability-catalog.md`
- `docs/engineering/phase-24-panel-permission-matrix.md`
- `docs/engineering/phase-24-discord-mapping-policy.md`
- Prisma schema changes + migration in `packages/db/prisma`
- Capability enforcement middleware/helpers in store backend
- Admin UI pages for:
  - groups
  - capability catalog
  - bundles
  - discord role mapping
  - effective access preview
  - audit log
- Tests (unit + integration) for permission resolution and enforcement

## Required data model
Add Prisma models (or equivalent) with relations and indexes:
- `InternalGroup`
- `Capability`
- `GroupCapability`
- `CapabilityBundle`
- `BundleCapability`
- `GroupBundle`
- `DiscordRoleMapping`
- `UserGroupOverride` (optional but recommended)
- `UserAccessSnapshot`
- `AccessAuditLog`
- `ConfigRegistryItem`
- `ConfigChangeAudit`

Ensure:
- uniqueness constraints for keys (`group.key`, `capability.key`, `bundle.key`)
- indexed filters for audit and mapping lookups
- timestamp fields on all governance records

## Capability design rules
- Use namespaced keys like:
  - `panel.view.dashboard`
  - `panel.view.security`
  - `action.review.submissions`
  - `action.manage.settings`
  - `action.override.scan_decision`
- Separate `view` from `edit/approve/execute`.
- Mark capabilities with risk (`low`, `medium`, `high`, `critical`).
- High-risk capabilities must require explicit grant (never inherited implicitly by generic staff group).

## Discord mapping rules
- Multiple Discord roles may map to one internal group.
- One Discord role may contribute to multiple groups via enabled mappings.
- Use mapping `priority` and deterministic conflict resolution.
- Add “effective result preview” before applying mapping changes.

## Enforcement rules
- UI: hide/disable inaccessible panels/actions.
- Backend: reject unauthorized actions with structured error code.
- No sensitive API can rely on UI-only checks.

## Configuration governance
Create a central configuration registry entry for each major subsystem:
- maintenance mode
- beta access
- recruiting settings
- scanner/quarantine policy
- moderation/starboard rules
- onboarding and trust/reputation thresholds
- bot automations
- language/content settings

For every config entry store:
- owner group
- required capability for read
- required capability for write
- risk classification
- audit retention policy

## Effective access preview
Provide an admin tool that outputs, for a target user/group:
- detected Discord roles
- resolved internal groups
- resolved bundles
- final capabilities (granted/denied)
- scoped limits
- last sync time
- explanation chain (“why this access exists”)

## Security and operations
- Least privilege by default.
- No hidden super-admin bypass outside audited break-glass path.
- Add break-glass flow with reason + audit entry + expiry.
- Add periodic access recertification checklist output.

## Testing requirements
- Unit tests for resolution algorithm:
  - mapping priority
  - conflicting allow/deny
  - scope inheritance
- Integration tests for representative protected endpoints.
- Snapshot tests for effective access preview JSON output.

## Migration strategy
- Introduce schema first.
- Seed minimal default capability catalog and baseline bundles.
- Backfill existing admin/reviewer roles to internal groups.
- Roll out enforcement in monitor mode (log-only) for one phase if needed.
- Then switch to hard-enforcement.

## Definition of done
Done when:
- all major modules are inventory-mapped
- capability matrix is complete and wired
- backend enforces all sensitive operations
- admin can simulate effective access
- all changes are audited
- no broad `isAdmin` gate remains for sensitive actions

Use incremental PRs with clear scope and migration notes.
```

---

## Recommended Capability Baseline (initial seed)

### Panel View
- `panel.view.dashboard`
- `panel.view.recruiting`
- `panel.view.security`
- `panel.view.bot`
- `panel.view.reputation`
- `panel.view.moderation`
- `panel.view.configuration`
- `panel.view.audit`
- `panel.view.access-control`

### Actions
- `action.edit.settings`
- `action.review.submissions`
- `action.approve.submissions`
- `action.reject.submissions`
- `action.approve.dryrun`
- `action.execute.bot_automation`
- `action.manage.reputation`
- `action.manage.beta`
- `action.manage.maintenance`
- `action.override.scan_decision`
- `action.manage.role-mapping`
- `action.manage.groups`
- `action.manage.bundles`
- `action.view.audit_logs`
- `action.export.audit_logs`

### Critical Controls
- `action.breakglass.activate`
- `action.breakglass.resolve`
- `action.manage.global-security-policy`

---

## Recommended Internal Groups
- `platform.super_admin`
- `platform.ops`
- `platform.reviewer`
- `platform.security_reviewer`
- `platform.content_admin`
- `platform.community_admin`
- `platform.recruiting_manager`
- `platform.trust_manager`
- `platform.beta_manager`
- `platform.docs_manager`

---

## Panel/Function Matrix Pattern
Für jedes Modul mindestens diese Rechte trennen:
- `view`
- `create`
- `edit`
- `delete`
- `approve`
- `publish`
- `override`
- `export`
- `manage_access`
- `manage_settings`

---

## Implementation Order (recommended)
1. **Schema + migration + seed**
2. **Resolver engine** (Discord->Groups->Bundles->Capabilities->Scope)
3. **Backend enforcement middleware/helpers**
4. **Admin access-control pages**
5. **Effective access preview**
6. **Audit logging wiring**
7. **Module-by-module hardening pass**
8. **Tests + governance docs finalization**

---

## Notes for this repository
- Keep DB source of truth in `packages/db/prisma/schema.prisma`.
- If `apps/store/prisma/schema.prisma` is still required by local tooling, keep both aligned in the same PR.
- Use explicit migration names, e.g. `phase24_governance_rbac_foundation`.
- Prefer additive migrations first (avoid destructive changes until backfill is complete).
