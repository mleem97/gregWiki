---
id: content-creation-model-overrides
title: Model Overrides
sidebar_label: Model Overrides
slug: /development/content-creation/model-overrides
description: Replace existing visuals or assign custom models to new content while keeping gameplay data independent.
---

**Layer ownership:** override declaration is **Mod Layer** data; stable override execution should be in **Plugin/Core SDK layer**.

## Goals

- Replace visuals of existing items without changing gameplay IDs.
- Assign custom models to new content definitions.
- Provide fallback behavior if model assets are missing.

## Data-to-visual separation

Keep gameplay IDs stable:

- Gameplay identity: `ccp.server.enterprise_rack_v1`
- Visual assignment: `Models/Servers/EnterpriseRackServer.prefab`

This allows balancing changes without rebuilding art assets.

## Override map

Create `Content/Items/ModelOverrides.json`:

```json
{
  "overrides": [
    {
      "targetContentId": "base.server.standard_rack",
      "replacementModel": "Models/Servers/StandardRack_Override.prefab",
      "fallbackModel": "Models/Servers/Fallback/StandardRackFallback.prefab"
    },
    {
      "targetContentId": "ccp.furniture.diagnostic_workbench",
      "replacementModel": "Models/Furniture/DiagnosticWorkbench.prefab",
      "fallbackModel": "Models/Shared/FallbackCube.prefab"
    }
  ]
}
```

## Override service boundary

```csharp
namespace CustomContentPack.Overrides;

public interface IModelOverrideApplier
{
    void ApplyOverride(string targetContentId, string replacementModelPath, string fallbackModelPath);
}
```

```csharp
using MelonLoader;

namespace CustomContentPack.Overrides;

public sealed class LoggingOnlyModelOverrideApplier : IModelOverrideApplier
{
    public void ApplyOverride(string targetContentId, string replacementModelPath, string fallbackModelPath)
    {
        // Placeholder behavior: logs intent until official framework API exists.
        MelonLogger.Msg($"[ModelOverride] {targetContentId} -> {replacementModelPath} (fallback {fallbackModelPath})");
    }
}
```

## Missing framework capability

A documented official service is currently not proven in this wiki for full runtime model replacement.

Use **local only** `Docs/MISSING.md` with this baseline:

```markdown
# Missing capability: official model override service

## What is missing
- A documented API to replace prefab/mesh bindings for existing content IDs at runtime.

## Why it is missing
- Current docs describe hooks/events but not a first-class model override registry/service.

## Framework layer to extend
- Plugin Layer + Core SDK bridge integration.

## Proposed signature (placeholder)
- `GregModelOverrideService.ReplaceModel(string contentId, string modelPath, string fallbackPath)`

## Impact
- Modders can define override data but cannot guarantee consistent runtime application.
```

## Required `.gitignore` rules

```gitignore
**/MISSING.md
**/MISSING*.md
```

Next: [Integration](/wiki/development/content-creation/integration).
