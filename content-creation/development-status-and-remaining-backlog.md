---
id: content-creation-development-status-and-remaining-backlog
title: Development Status and Remaining Backlog
sidebar_label: Development Status
description: Evidence-based snapshot of completed work and remaining implementation tasks for custom content and model override support.
---

## Scope and intent

This page is the current consolidated status for custom content implementation in **gregCore** and tracks only what is still open.

Layer ownership follows the fixed architecture:

- **GregFramework Core SDK layer:** canonical contracts, registries, lifecycle, deterministic behavior
- **Plugin layer:** adapters, compatibility helpers, operational tooling
- **Mod layer:** content packs, samples, contributor-facing usage patterns

## Current development status (consolidated)

### Confirmed complete

Based on checked items in `docs/content-creation/implementation-backlog.md`:

- Unity-to-`greg.*` normalization baseline is established (30+ hooks and signal payload contract).
- Core category definitions and initial registries are implemented in `gregSdk.Registries`.
- Model override service exists with priority-based conflict handling and diagnostics.
- Language bridge progress includes:
  - Lua dynamic `on_update` / `on_gui`
  - TypeScript C# bridge surface for events/payload/HUD/targeting
  - Rust v8 API table verification for string event subscription and HUD

### In progress

- Testing standard is still not complete (unit, integration, and QA matrix remains open).
- Language bridge completion is partial due to unresolved TS runtime engine and Rust developer-consumption packaging.

### Status inconsistencies detected

The source backlog contains DONE claims that overlap with still-unchecked architecture and quality tasks.

Interpretation used here:

- Items marked complete are treated as **baseline implemented**.
- Unchecked items are treated as **production-hardening and contract-completeness gaps**.

## Remaining backlog (open items only)

### Priority 0 — contract and runtime correctness

**GregFramework Core SDK layer**

- Define and lock shared interfaces (`IContentRegistry<T>`, `IContentValidator<T>`, `IContentMigration`).
- Add registration lifecycle events and deterministic ordering guarantees.
- Standardize diagnostics/log channels for content load failures.
- Define canonical content load timing and registration/override event order.
- Add unload/cleanup behavior for hot-reload scenarios (if supported).

### Priority 1 — schema and validation hardening

**GregFramework Core SDK layer**

- Standardize JSON schema files per content category.
- Validate required fields, ranges, enum values.
- Validate cross-file references (`serverTypeId`, `customerId`, compatibility tags).
- Enforce fail-fast on critical violations and warnings for optional fields.

### Priority 2 — bridge completion and pack interoperability

**Plugin layer + bridge implementations**

- TypeScript: wire a JavaScript engine (for example Jint or ClearScript) to the existing bridge surface.
- Rust: publish helper crate/header to consume the v8 API table safely.
- Add adapter services for model override execution where still plugin-scoped.
- Add optional legacy-ID compatibility module.
- Add extension points for third-party content packs.

### Priority 3 — testing and quality gate

**Core SDK + Plugin + Mod layer**

- Unit tests: schema, registry operations, compatibility resolution, model override fallback.
- Integration tests: end-to-end content load, runtime `greg.*` behavior, persistence, multi-mod conflict behavior.
- Manual QA: buy/place/use/remove flows, customer assignment/SLA behavior, performance under larger packs.

### Priority 4 — contributor operations and release readiness

**Plugin layer + Mod layer**

- Define packaging standard for content packs (DLL + Content + Models).
- Add contributor release checklist template.
- Add troubleshooting matrix for frequent load failures.
- Add telemetry/logging recommendations for support.
- Publish schema examples and starter templates for `CustomContentPack`.
- Add one complete sample pack covering all primary content categories.

### Priority 5 — signal snapshot completion

**GregFramework Core SDK layer + Plugin layer**

- Import diagnostics from `gregCore/Diagnostics` into hook-candidate processing.
- Deduplicate by source signature and map each family to canonical `greg.*` constants.
- Register missing constants in `GregNativeEventHooks`.
- Emit through harmony/bridge and verify through integration tests.
- Publish generated runtime-trigger to `greg.*` catalog deltas into wiki reference pages.

## MISSING-file status

Current workspace check (`**/MISSING*.md`): **no files found**.

This indicates there are currently no tracked local blocker files in-repo. If new blockers appear, use local-only `MISSING.md` files and keep ignore rules aligned with:

```text
**/MISSING.md
**/MISSING*.md
```

## Definition of done (consolidated)

This initiative is complete when all of the following are true:

- Typed and documented official registry APIs exist for all targeted content categories.
- Model override behavior is deterministic with clear conflict and fallback policy.
- End-to-end content pack workflow is reproducible from docs without undocumented APIs.
- Automated tests cover schema, runtime integration, compatibility, persistence, and overrides.
- Contributor workflow, packaging, and release guidance are published and stable.
