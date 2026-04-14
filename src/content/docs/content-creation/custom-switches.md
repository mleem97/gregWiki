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
  "name": "Edge Backbone 24",
  "frontPorts": 24,
  "rearPorts": 2,
  "throughputGbps": 400,
  "isManaged": true,
  "supportedSfpProfiles": ["sfp-10g", "sfp-25g", "sfp-40g"],
  "powerUsageWatts": 220,
  "price": 18000.0,
  "modelOverridePath": "Models/Switches/EdgeBackboneSwitch.prefab"
}
```

## C# model

```csharp
namespace gregSdk.Definitions;

public class SwitchDefinition
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public int FrontPorts { get; set; }
    public int RearPorts { get; set; }
    public int ThroughputGbps { get; set; }
    public bool IsManaged { get; set; }
    public string[] SupportedSfpProfiles { get; set; } = System.Array.Empty<string>();
    public int PowerUsageWatts { get; set; }
    public float Price { get; set; }
    public string ModelOverridePath { get; set; }
}
```

## Integration and registration

Use `GregSwitchRegistry` to register your custom switches. The `SwitchValidator` ensures that the definition is valid before it's added to the registry.

```csharp
using gregSdk;
using gregSdk.Definitions;
using gregSdk.Registries;
using gregSdk.Validators;

namespace CustomContentPack.Runtime;

public static class SwitchContentLoader
{
    public static void Load(SwitchDefinition mySwitch)
    {
        var registry = new GregSwitchRegistry();
        // The registry automatically uses SwitchValidator
        registry.Register(mySwitch);
    }
}
```

## Telemetry and hooks

Use documented network hooks for runtime behavior:

- `greg.NETWORK.CreateNewCable`
- `greg.NETWORK.InsertSFP`
- `greg.NETWORK.ConnectionSpeedSet`
- `greg.SERVER.RegisterLink`

Example event observation:

```csharp
using gregSdk;

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
2. Register in `GregSwitchRegistry`.
3. Keep an internal compatibility index.
4. Apply custom checks during relevant `greg.*` hooks.
5. Track missing native registration API in local `MISSING.md`.

## Persistence & IL2CPP Compatibility

:::danger IL2CPP LIMITS
In *Data Center*, modified fields on IL2CPP objects (like colors or custom logic states) are **not automatically saved**. Additionally, you cannot simply use `AddComponent<MyCustomLogic>()` because the game's save system won't recognize your custom type upon reloading.
:::

To ensure your custom switches retain their state and logic after a game reload, use the **gregCore SDK Services**.

### 1. Persistent Data (GregSaveService)

If you change properties (like custom paint or status flags), use `GregSaveService` to mirror these changes in a persistent way.

```csharp
using greg.Sdk.Services;

public void OnSwitchPainted(int switchInstanceId, Color newColor)
{
    // Store the color in the persistent gregSave buffer
    GregSaveService.SetData("MyModID", $"switch_color_{switchInstanceId}", newColor);
}

public void RestoreSwitchColor(int switchInstanceId, GameObject switchGo)
{
    // Retrieve the color after reload
    var color = GregSaveService.GetData<Color>("MyModID", $"switch_color_{switchInstanceId}", Color.white);
    switchGo.GetComponent<Renderer>().material.color = color;
}
```

### 2. Custom Logic (GregIl2CppRegistry)

To attach custom `MonoBehaviour` logic that persists across the IL2CPP boundary, you must register your type during initialization.

```csharp
using greg.Sdk.Registries;

// In your OnInitializeMelon:
GregIl2CppRegistry.RegisterType<MyCustomSwitchLogic>();

// When spawning your switch:
var logic = GregIl2CppRegistry.AddCustomComponent<MyCustomSwitchLogic>(switchGameObject);
```

By using these services, you bypass the common "Paint didn't stick" and "Logic disappeared" issues common in IL2CPP modding.

Next: [Custom customers](/wiki/development/content-creation/custom-customers).
