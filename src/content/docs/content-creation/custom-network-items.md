---
id: content-creation-custom-network-items
title: Custom Network Items (SFP, Cables, Related Objects)
sidebar_label: Custom Network Items
description: Build data-driven SFP modules and cable types with compatibility and balancing rules.
---

**Layer ownership:** definitions in **Mod Layer**; compatibility enforcement in **Core SDK layer**.

## Capability split

- **Already possible:** data definitions + runtime checks through network/server `greg.*` hooks.
- **Needs FrameworkExtension:** official compatibility registry integrating switch/server/network categories.
- **Currently missing:** documented first-class registration API for custom cable/SFP catalogs.

## SFP definition

Create `Content/SfpModules/Sfp25GPro.json`:

```json
{
  "id": "ccp.sfp.25g_pro",
  "displayName": "SFP 25G Pro",
  "category": "SFP",
  "speedGbps": 25,
  "powerWatts": 6,
  "price": 1100,
  "compatibilityTags": ["sfp-25g", "switch-edge", "server-enterprise"],
  "model": "Models/Shared/Sfp25GPro.prefab"
}
```

## Cable definition

Create `Content/Cables/CableOm4Purple15m.json`:

```json
{
  "id": "ccp.cable.om4_purple_15m",
  "displayName": "OM4 Purple 15m",
  "category": "Fiber",
  "lengthMeters": 15,
  "maxThroughputGbps": 100,
  "latencyPenaltyMs": 0,
  "durability": 95,
  "price": 420,
  "colorHex": "#8E44AD",
  "compatibilityTags": ["fiber", "sfp-25g", "sfp-40g"],
  "model": "Models/Shared/CableOm4Purple15m.prefab"
}
```

## Compatibility resolver (mod-local)

```csharp
using System.Collections.Generic;

namespace CustomContentPack.Runtime;

public static class NetworkCompatibilityResolver
{
    public static bool CanConnect(
        IReadOnlyCollection<string> switchTags,
        IReadOnlyCollection<string> sfpTags,
        IReadOnlyCollection<string> cableTags)
    {
        foreach (var tag in sfpTags)
        {
            if (switchTags.Contains(tag) || cableTags.Contains(tag))
            {
                return true;
            }
        }

        return false;
    }
}
```

## Runtime hook integration

```csharp
using gregSdk;

namespace CustomContentPack.Runtime;

public static class NetworkRuntimeHooks
{
    public static void Install()
    {
        HookBinder.OnAfter("greg.NETWORK.InsertSFP", _ =>
        {
            // Validate custom SFP against selected switch profile.
        });

        HookBinder.OnAfter("greg.NETWORK.CreateNewCable", _ =>
        {
            // Validate cable category and throughput constraints.
        });
    }
}
```

Next: [Custom employees](/wiki/development/content-creation/custom-employees).
