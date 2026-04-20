---
id: content-creation-introduction
title: Creating Custom Content and Model Overrides in gregCore
sidebar_label: Introduction
description: Official overview for data-driven custom content in Data Center with gregCore + MelonLoader, including model override strategy and framework gaps.
---

**Layer ownership:** this tutorial spans the **Mod Layer** (content packs), **GregFramework Core SDK layer** (events/hooks/runtime contracts), and optional **Plugin Layer** (framework extensions for missing registries).

## Scope

This guide documents how to build an extensible content workflow for Data Center:

- Custom servers
- Custom switches
- Custom customers
- Custom SFP modules
- Custom cables
- Custom server types
- Custom employees
- Custom furniture / usable items
- Other placeable/usable items
- Model assignment for new content
- Model overrides for existing content

## What “custom content” means here

In this ecosystem, custom content is treated as **data first**:

1. **Definition (data model):** JSON or structured metadata describing gameplay properties.
2. **Registration:** loading definitions and binding them into runtime registries.
3. **Runtime behavior:** hooks/events and logic that make content usable in-game.
4. **Visual mapping:** model/prefab/mesh assignment separate from gameplay values.

This separation keeps balance patches independent from art updates.

## Content Mod vs Plugin vs FrameworkExtension

| Type | Layer | Purpose | Typical output |
| --- | --- | --- | --- |
| Content Mod | Mod Layer | Add/replace content data and basic runtime integration | `*.dll` + `Content/*.json` + optional models |
| Plugin | Plugin Layer | Shared framework behavior across multiple mods | reusable extension DLL |
| FrameworkExtension | Core SDK / Plugin Layer | Adds missing registries/services to make content categories first-class | new registry interfaces + implementation |

## Source-of-truth and anti-hallucination policy

This wiki is the source of truth. If a concrete API is not documented, this tutorial uses **explicit placeholders** (for example `GregContentRegistry.RegisterServerType(...)`) and marks them as placeholders.

## Capability status model used in this tutorial

Every page distinguishes:

- **Already possible:** can be implemented now with documented `greg.*` hooks/events and mod bootstrap.
- **Needs FrameworkExtension:** possible architecture, but requires adding registry/service APIs.
- **Currently missing:** no documented API path in current wiki; capture via local `MISSING.md`.

## Local-only `MISSING.md` rule

If a required API does not exist, create local files only (do not commit):

```text
**/MISSING.md
**/MISSING*.md
```

Each local `MISSING.md` should include:

- Missing capability
- Why it blocks content work
- Which framework layer owns the fix
- Expected hook/registry/interface signature
- Impact on modders and contributors

## Next

Continue with [Project structure](/content-creation/project-structure).
