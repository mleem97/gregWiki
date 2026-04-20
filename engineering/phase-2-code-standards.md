---
title: Phase 2 Code Standards
---

# Phase 2 — Code Standards Modernization
## 2026 Next.js Engineering Standards for gregFramework

## Purpose
This phase defines the modern coding standards for all applications in gregFramework, including gregWiki, gregModstore, internal dashboards, bot-facing interfaces, and future platform modules.

This standard is mandatory for all new modules and serves as the baseline for incremental refactoring of legacy code.

## Core Direction
All applications are **server-first**, **App Router-first**, and **type-safe by default**.

- Prefer Server Components for rendering, data access, auth checks, and business logic.
- Treat Client Components as narrow interactive islands.
- Keep browser-only logic isolated.

## Framework Baseline
- Next.js 16+ (App Router only for new work)
- TypeScript required (`strict` enabled)
- Centralized linting/formatting
- Shared environment validation
- Consistent folder conventions
- Shared packages for auth/db/ui/validation/permissions/storage/queue/shared

Legacy Pages Router patterns, ad-hoc fetch layers, duplicated auth helpers, and inconsistent API conventions are technical debt.

## Rendering Standards
Default decision rules:

- static or read-heavy UI → Server Component
- authenticated data view → Server Component
- form mutation workflow → Server Action + Server Component
- heavy browser interaction → Client Component
- browser-only third-party widget → isolated client wrapper

## Data Fetching Standards
- Fetch as close as possible to server boundaries.
- Prefer direct server-side execution over unnecessary internal API hops.
- Co-locate data access with owning route/domain.
- Avoid giant generic loaders that mix unrelated concerns.

## Caching Standards
Caching is explicit and documented, never assumed.

Every cached module must define:
- cache owner
- invalidation trigger
- user-safety implications
- expected freshness window

Use tag/path invalidation intentionally. Avoid accidental caching of sensitive user state.

## Mutation Standards
Every mutation path must include:
- runtime validation
- authentication
- authorization
- ownership/permission checks
- structured errors
- audit logging when relevant

Use Server Actions for UI-owned authenticated mutations. Use Route Handlers for external/public integration surfaces.

## Server Action Policy
Server Actions are treated like public POST endpoints.

Required per action:
- parse/validate input at runtime
- resolve session immediately
- enforce authorization immediately
- no trust in client-provided identifiers without ownership checks
- typed result contract
- no hidden side effects
- no sensitive secrets in action code

Keep actions thin; move business logic to reusable domain services.

## Route Handler Standards
Use Route Handlers for:
- bot callbacks
- webhooks
- mod manifest delivery
- download tracking
- desktop client endpoints
- scan callbacks
- signed URL issuance
- public resource APIs

All handlers must use consistent parsing, validation, auth/authz, error shape, and logging.

## Security Standards
Security is first-class and server-enforced.

Required:
- Zod validation on external input
- RBAC + ownership checks
- file upload MIME + extension checks
- hash verification for stored files
- signed URLs where applicable
- rate limiting on exposed endpoints
- deny-by-default access controls
- audit trail for high-risk actions

Never rely solely on middleware or hidden UI controls for authorization.

## Routing Standards
Use App Router conventions consistently:
- `page.tsx`
- `layout.tsx`
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- `default.tsx` for parallel route slot fallbacks

Use route groups for public/auth/dashboard/creator/admin/security separation.

## Component Architecture
Preferred hierarchy:
1. route components
2. feature components
3. shared UI primitives
4. domain actions/services
5. validation/schema layer
6. database/repository layer

UI primitives must not contain business-critical branching.

## State Management
State priority:
1. server data as source of truth
2. URL state for filters/pagination/tabs
3. local component state for UI-only behavior
4. form state
5. minimal client store only when justified

## Forms and Validation
- Prefer progressive enhancement.
- Use schemas as single source of truth across forms/actions/handlers/contracts.
- Avoid duplicate validation logic.

## Database and Data Access
- No DB access from Client Components.
- Use transactional writes where consistency matters.
- Prefer explicit `select`/`include`.
- Use indexed query paths for heavy filters.
- Use soft-delete where moderation/auditability requires it.

## Performance Standards
- Reduce client JavaScript.
- Keep expensive work on server.
- Use streaming/suspense/loading boundaries where useful.
- Use explicit caching only when it adds value.

## Dependency Policy
New dependencies must have:
- clear purpose
- active maintenance
- known upgrade path
- no redundant overlap with existing tooling

## Code Quality Rules
Required baseline:
- strict TypeScript
- no untyped `any` without explicit justification
- shared lint/format rules
- clear naming and ownership boundaries
- no god modules
- no hidden side effects
- no duplicate permission/validation logic

## Error Handling
- Typed server/domain errors
- safe user-facing messages
- structured internal logging
- route-local recovery where possible
- no sensitive leak in responses

## Observability
At minimum support:
- request logs
- mutation logs
- moderation logs
- scan pipeline logs
- bot event logs
- error/performance monitoring for critical flows

Security-critical actions must be traceable end-to-end.

## Definition of Done
A feature is complete only when:
- server/client boundary is intentional
- validation is implemented
- auth/authz is enforced in server execution path
- loading/error states are present
- cache behavior is explicit (or explicitly omitted)
- logging/audit implications are addressed
- types are complete
- file placement is maintainable
- security impact is reviewed

## Enforcement
These standards apply to gregWiki, gregModstore, internal backoffice tools, scanner interfaces, bot control surfaces, and future apps.

PRs are reviewed for both correctness and architectural compliance.

## References
- Next.js 16 announcement: https://nextjs.org/blog/next-16
- App Router caching model: https://nextjs.org/docs/app/getting-started/caching
- Server Action security context: https://www.pluralsight.com/labs/codeLabs/guided-securing-react-19-server-actions
