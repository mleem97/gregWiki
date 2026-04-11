---
id: content-creation-custom-switches
title: Custom Switches
sidebar_label: Custom Switches
slug: /development/content-creation/custom-switches
description: Define custom switch hardware including ports, throughput, supported SFP profiles, and placement/shop integration.
---

**Layer ownership:** switch content is defined in the **Mod Layer**; network/runtime compatibility sits in the **Core SDK layer**.

## Capability split

- **Already possible:** load custom switch definitions and react to network-related `greg.*` events.
- **Needs FrameworkExtension:** typed runtime switch registry and compatibility resolver.
- **Currently missing:** documented official API to insert switch definitions into native placement/shop lists.

## Switch definition

Create `Content/Switches/EdgeBackboneSwitch.json`:

```json
{
  "id": "ccp.switch.edge_backbone_24",
  "displayName": "Edge Backbone 24",
  "ports": 24,
  "throughputGbps": 400,
  "supportedSfpProfiles": ["sfp-10g", "sfp-25g", "sfp-40g"],
  "powerWatts": 220,
  "price": 18000,
  "model": "Models/Switches/EdgeBackboneSwitch.prefab",
  "shopCategory": "Networking"
}
```

## C# model

```csharp
namespace CustomContentPack.Runtime;

public sealed class SwitchDefinition
{
    public string Id { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public int Ports { get; set; }
    public int ThroughputGbps { get; set; }
    public string[] SupportedSfpProfiles { get; set; } = System.Array.Empty<string>();
    public int PowerWatts { get; set; }
    public int Price { get; set; }
    public string Model { get; set; } = string.Empty;
    public string ShopCategory { get; set; } = string.Empty;
}
```

## Integration points

Use documented network hooks for runtime behavior:

- `greg.NETWORK.CreateNewCable`
- `greg.NETWORK.InsertSFP`
- `greg.NETWORK.ConnectionSpeedSet`
- `greg.SERVER.RegisterLink`

Example event observation:

```csharp
using gregFramework.Core;

namespace CustomContentPack.Runtime;

public static class SwitchTelemetry
{
    public static void Install()
    {
        GregEventDispatcher.On("greg.NETWORK.InsertSFP", payload =>
        {
            // Validate SFP profile against custom switch constraints.
            // Keep logic data-driven; avoid hard-coded type checks.
        }, "CustomContentPack");
    }
}
```

## Shop/placement strategy

Without a documented registry API:

1. Load switch definitions.
2. Keep an internal compatibility index.
3. Apply custom checks during relevant `greg.*` hooks.
4. Track missing native registration API in local `MISSING.md`.

Next: [Custom customers](/wiki/development/content-creation/custom-customers).
