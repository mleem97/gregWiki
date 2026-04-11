---
id: content-creation-integration
title: Integration
sidebar_label: Integration
slug: /development/content-creation/integration
description: Registration order, load timing, runtime discovery, and contributor workflow for custom content systems.
---

**Layer ownership:** startup orchestration in **Mod Layer**; lifecycle contracts and shared registries in **Core SDK / Plugin Layer**.

## Registration order

1. Load all JSON content definitions.
2. Validate schemas and cross-category references.
3. Build in-memory indexes (`servers`, `switches`, `customers`, ...).
4. Install `greg.*` hooks/events.
5. Apply model overrides.
6. Expose runtime diagnostics.

## Bootstrap sequence (copy-paste skeleton)

```csharp
using MelonLoader;
using GregFramework.Hooks;
using gregFramework.Core;

namespace CustomContentPack;

public static class RuntimeBootstrap
{
    public static void Initialize()
    {
        ContentDefinitionLoader.LoadAll("Mods/CustomContentPack/Content");
        ContentValidationPipeline.Run();

        HookBinder.OnAfter("greg.SYSTEM.GameLoaded", _ =>
        {
            RuntimeRegistration.Attach();
        });

        GregEventDispatcher.On("greg.SYSTEM.GameSaved", _ =>
        {
            RuntimeDiagnostics.LogSummary();
        }, "CustomContentPack");
    }
}
```

## Runtime discovery

A content-pack can be discovered by convention:

- Root folder exists under `Mods/CustomContentPack`
- `Content/` contains known category folders
- `Scripts/CustomContentPack.cs` bootstraps loading/registration

## Contributor Workflow

### Add new content categories to framework

- Introduce a typed registry contract per category in Core SDK (`IContentCategoryRegistry<TDefinition>` pattern).
- Add schema validation extension points.
- Add deterministic load-order guarantees.

### Naming guidance for new registries

Use canonical naming aligned with `greg.*` domains:

- `GregServerContentRegistry`
- `GregSwitchContentRegistry`
- `GregCustomerContentRegistry`
- `GregModelOverrideRegistry`

### Versioning for model-override systems

- Include version marker in override manifest (`schemaVersion`).
- Keep backward-compatible parser for old manifests.
- Add fallback mode on unsupported versions.

### Backward compatibility strategy

- Keep stable content IDs.
- Allow alias mapping in data migration layer.
- Never hard-remove old IDs without mapping.

### Minimum required tests for new content types

- Schema validation tests
- Reference resolution tests (cross-category IDs)
- Runtime hook integration tests
- Fallback behavior tests for missing models
- Save/load compatibility tests

Next: [Deployment](/wiki/development/content-creation/deployment).
