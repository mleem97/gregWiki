---
id: content-creation-project-structure
title: Project Structure for Custom Content Packs
sidebar_label: Project Structure
slug: /development/content-creation/project-structure
description: Reference structure for custom content packs, registration code, runtime behavior, and model override mapping.
---

**Layer ownership:** structure spans **Mod Layer** (`CustomContentPack`) and optional **Plugin Layer** (`FrameworkExtension` modules).

## Recommended folder layout

```text
CustomContentPack/
├── Content/
│   ├── Servers/
│   │   ├── EnterpriseRackServer.json
│   │   └── EdgeComputeNode.json
│   ├── Switches/
│   ├── Customers/
│   ├── SfpModules/
│   ├── Cables/
│   ├── ServerTypes/
│   ├── Employees/
│   ├── Furniture/
│   └── Items/
├── Models/
│   ├── Servers/
│   ├── Switches/
│   ├── Furniture/
│   └── Shared/
├── Scripts/
│   ├── CustomContentPack.cs
│   ├── Registries/
│   ├── Runtime/
│   └── Overrides/
├── Docs/
│   └── MISSING.md   ← local only, never committed
└── README.md
```

## Responsibility split

| Path | Purpose | Status |
| --- | --- | --- |
| `Content/*` | Data models and balancing values | Already possible |
| `Scripts/Runtime` | Hook/event integration (`greg.*`) | Already possible |
| `Scripts/Registries` | Category registration orchestration | Needs FrameworkExtension for full first-class registries |
| `Scripts/Overrides` | Model/prefab/mesh mapping + fallback | Needs FrameworkExtension for stable official override service |
| `Docs/MISSING.md` | Track missing framework capability | Already possible (local dev artifact only) |

## Example bootstrap class

Create `Scripts/CustomContentPack.cs`:

```csharp
using MelonLoader;

namespace CustomContentPack;

public sealed class CustomContentPackMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        MelonLogger.Msg("[CustomContentPack] Init");

        ContentDefinitionLoader.LoadAll("Mods/CustomContentPack/Content");
        RuntimeIntegration.InstallHooks();

        // Placeholder only: not documented in current wiki.
        // GregContentRegistry.RegisterAll(ContentDefinitionLoader.CurrentSet);

        // Placeholder only: not documented in current wiki.
        // GregModelOverrideService.ApplyOverrides("Mods/CustomContentPack/Models");
    }
}
```

Create `Scripts/Registries/ContentDefinitionLoader.cs`:

```csharp
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace CustomContentPack;

public static class ContentDefinitionLoader
{
    public static IReadOnlyDictionary<string, object> CurrentSet { get; private set; } =
        new Dictionary<string, object>();

    public static void LoadAll(string contentRoot)
    {
        var map = new Dictionary<string, object>();

        if (!Directory.Exists(contentRoot))
        {
            CurrentSet = map;
            return;
        }

        foreach (var file in Directory.GetFiles(contentRoot, "*.json", SearchOption.AllDirectories))
        {
            var json = File.ReadAllText(file);
            var node = JsonSerializer.Deserialize<object>(json);
            map[file] = node ?? new object();
        }

        CurrentSet = map;
    }
}
```

## Contributor-only framework work

Use framework contributions when you need:

- Typed registries per content category (`IServerRegistry`, `ISwitchRegistry`, ...)
- Central validation pipeline for content schemas
- Stable override lifecycle (`before-load`, `after-load`, fallback policy)

## Local `MISSING.md` template

```markdown
# Missing capability: typed server registry

## What is missing
- No documented `gregCore` registry API for custom server definitions.

## Why it is missing
- Current wiki documents hooks/events, not a first-class content registry layer.

## Framework layer to extend
- GregFramework Core SDK layer (`gregCore/framework`).

## Proposed signature (placeholder)
- `GregContentRegistry.RegisterServerType(ServerDefinition definition)`

## Impact
- Modders can load JSON but cannot register data into a supported runtime pipeline.
```

Next: [Custom servers](/wiki/development/content-creation/custom-servers).
