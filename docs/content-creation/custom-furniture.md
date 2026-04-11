---
id: content-creation-custom-furniture
title: Custom Furniture and Usable Objects
sidebar_label: Custom Furniture
slug: /development/content-creation/custom-furniture
description: Create placeable furniture and usable gameplay objects with interaction rules, categories, and model mapping.
---

**Layer ownership:** placeable object definitions in **Mod Layer**; interaction effects in **Core SDK layer**.

## Capability split

- **Already possible:** data model + mod-side interaction policy.
- **Needs FrameworkExtension:** documented placement registry API for custom placeable categories.
- **Currently missing:** official injection API for custom placeables in native build/placement UI.

## Furniture definition

Create `Content/Furniture/DiagnosticWorkbench.json`:

```json
{
  "id": "ccp.furniture.diagnostic_workbench",
  "displayName": "Diagnostic Workbench",
  "category": "Utility",
  "interactionType": "RepairBoost",
  "placeable": true,
  "price": 8800,
  "gameplayEffect": {
    "effectType": "RepairTimeMultiplier",
    "value": 0.85
  },
  "model": "Models/Furniture/DiagnosticWorkbench.prefab"
}
```

## Usable item definition

Create `Content/Items/PortableAnalyzer.json`:

```json
{
  "id": "ccp.item.portable_analyzer",
  "displayName": "Portable Analyzer",
  "category": "Tool",
  "interactionType": "NetworkScan",
  "placeable": false,
  "price": 2600,
  "cooldownSeconds": 30,
  "model": "Models/Shared/PortableAnalyzer.prefab"
}
```

## Runtime effect resolver

```csharp
namespace CustomContentPack.Runtime;

public static class FurnitureEffectResolver
{
    public static float ResolveRepairTimeMultiplier(string furnitureId)
    {
        if (furnitureId == "ccp.furniture.diagnostic_workbench")
        {
            return 0.85f;
        }

        return 1.0f;
    }
}
```

## Placement integration (placeholder)

```csharp
// Placeholder only: API not documented in current wiki.
// GregPlacementRegistry.RegisterPlaceable(FurnitureDefinition definition);
```

Next: [Model overrides](/wiki/development/content-creation/model-overrides).
