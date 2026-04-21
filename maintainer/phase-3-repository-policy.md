# Phase 3 — Repository Standards, Architecture Rules, and Review Checklist

## Purpose
This policy defines mandatory engineering rules for gregFramework repositories and apps: gregWiki, gregModstore, dashboards, bot control, moderation, scanner interfaces, and future modules.

This document is implementation baseline, not optional guidance.

## 1) Repository Structure

### 1.1 Monorepo Standard
Recommended structure:

```txt
/apps
  /store
  /bot
  /scanner
/packages
  /auth
  /db
  /ui
  /permissions
  /validation
  /storage
  /queue
  /shared
/config
/scripts
```

### 1.2 App Layout (`apps/store`)

```txt
app/
components/
features/
lib/
server/
config/
styles/
public/
tests/
```

### 1.3 Folder Ownership
- `app/`: route entries, layouts, loading/error/not-found, route handlers
- `components/`: app-level reusable UI
- `features/`: domain modules (mods, uploads, moderation, auth, analytics)
- `lib/`: app-local generic utilities
- `server/`: server-only services, authz checks, orchestration
- `config/`: validated runtime config
- `styles/`: tokens/themes/global styles

### 1.4 Private Route Folders
Use `_components`, `_lib`, `_actions`, `_schemas` for route-local details without URL segments.

## 2) Naming Conventions

### Files
- `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- `actions.ts` for route-local action exports only
- `*.schema.ts`, `*.service.ts`, `*.repo.ts`, `*.types.ts`, `*.constants.ts`, `*.permissions.ts`

### Components
- PascalCase component names (e.g. `ModCard.tsx`)
- domain-oriented folder naming

### Functions
Use verb-based names (e.g. `createMod`, `publishVersion`, `approveScanReport`).

## 3) Route Architecture
- App Router only for new work
- Use route groups: `(public)`, `(auth)`, `(dashboard)`, `(creator)`, `(admin)`, `(security)`
- Each route owns its loading/error/not-found behavior and local implementation
- Parallel routes require explicit `default.tsx` fallback when needed

## 4) Server vs Client Rules
- Server Components by default
- `use client` only when browser-only needs are real
- minimize client boundary size
- keep sensitive logic in server-only modules

Forbidden in client files:
- DB access
- auth resolution
- permission checks
- storage signing
- webhook verification
- queue publishing
- secret-bearing integrations

## 5) Server Actions Policy
Use for UI-owned authenticated mutations only.

Required per action:
- zod validation
- immediate session verification
- immediate authorization checks
- delegate to service layer
- typed result
- deliberate revalidation

Recommended result shape:

```ts
type ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string; fieldErrors?: Record<string, string[]> };
```

## 6) Route Handlers Policy
Use for integration/API surfaces (`/api/auth/*`, `/api/webhooks/*`, `/api/discord/*`, `/api/scan/*`, `/api/client/*`, `/api/mods/*`).

Handler order:
1. parse request
2. validate input
3. verify auth
4. verify authorization
5. call domain service
6. return structured response
7. emit logs
8. avoid sensitive error leakage

Middleware is never sole authorization layer.

## 7) Validation Standards
- Zod required for all external input
- schemas shared across forms/actions/handlers where possible
- route-local schemas in `_schemas`; reusable contracts in shared package

## 8) Database Access Policy
- Centralize through repo/service modules
- explicit `select`/`include`
- pagination for large lists
- indexed filter paths
- transactions where consistency matters

Disallowed:
- direct Prisma calls in Client Components
- scattered duplicate query logic
- UI-only permission enforcement

## 9) Permissions and Auth
- central permission helpers
- enforce identity + resource-level rights
- no UI-only security assumptions

## 10) Logging and Audit
Structured logs required for:
- auth failures
- uploads
- scan transitions
- moderation actions
- role/permission changes
- kill-switch usage
- bot dispatch failures

Immutable audit entries required for high-risk admin/security actions.

## 11) Caching and Revalidation
- caching is explicit and documented
- cache public/stable content intentionally
- avoid blind caching for role-sensitive/personal/security views
- define invalidation strategy (`revalidateTag`/`revalidatePath`/explicit refresh)

## 12) Error Handling
- typed errors/results
- safe user messages
- no secret/internal leakage
- route-local recovery boundaries

## 13) UI and Component Rules
- cross-app primitives belong in `packages/ui`
- app-specific behavior stays in app/features
- no business logic in UI primitives
- accessibility baseline: keyboard, focus, labels, roles, disabled/loading states

## 14) CSS and Styling Rules
- token-driven styling only
- avoid random hardcoded visual values
- shared semantic surface states for cards/forms/dialogs/tables

## 15) Environment and Config
- validate env at startup
- split config by concern (app/auth/db/storage/queue/bot/scanner)
- avoid raw `process.env` spread; use typed config modules

## 16) Testing Expectations
Minimum coverage for:
- permissions
- validation
- critical mutations
- upload/scan flow transitions
- role mapping
- bot notification rules
- manifest generation

Use unit + integration + e2e for critical journeys.

## 17) PR Review Checklist
Review for architecture, security, data access, quality, and cross-product consistency. Use the dedicated checklist document and PR template in this repository.

## 18) Definition of Ready
Before implementation, task must define:
- route ownership
- server/client boundary
- data source
- auth/authz requirement
- validation schema
- caching decision
- audit/logging impact
- UI placement

## 19) Definition of Done
Complete only when:
- structure and boundaries are correct
- validation + authz are enforced
- loading/error states exist
- cache behavior is explicit
- logging/audit implications covered
- no legacy anti-pattern introduced

## 20) Disallowed Anti-Patterns
- oversized client-rendered pages without technical need
- direct DB in UI/client
- duplicate auth helpers and validation logic
- middleware-only authorization
- hardcoded role IDs scattered across files
- giant mixed-responsibility utils
- untyped server responses

## 21) Enforcement
These rules apply to all gregFramework applications/packages. Non-compliant changes are considered incomplete until revised.
