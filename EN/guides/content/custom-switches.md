Title: Building Custom Switches
Path: /guides/content/custom-switches
Type: How-to
Audience: mod developer, framework developer
Summary: Learn how to implement new network hardware, manage port logic, and ensure IL2CPP persistence for custom switches.
Suggested Tags: networking, switches, hardware, content-creation, il2cpp, persistence
Related Pages: /guides/content/custom-servers, /api/index
Split Recommendation: Keep as one page

# 🔌 Building Custom Switches

Custom switches in *Data Center* allow you to introduce new networking technologies, higher port densities, and advanced traffic management features. Unlike a standard server, a Switch also manages **Port Logic** and **Cable Links**.

**Layer ownership:** Switch content is defined in the **Mod Layer**; network and runtime compatibility are handled by the **Core SDK Layer**.

## Capability Status

- **Definition Loading**: Load custom switch definitions via JSON and react to network-related `greg.*` events.
- **Persistence**: Managed through the `GregSaveService` to handle IL2CPP stripping and metadata regeneration.
- **API**: The `GregSwitchRegistry` and `SwitchValidator` provide the foundation for registration and validation.

## 1. Defining the Switch

A Switch is defined by its **Port Map**. Each port has a specific speed (e.g., 1Gbps, 10Gbps, 100Gbps) and a status (connected, link-up, traffic-activity).

### JSON Definition (`Content/Switches/EdgeBackboneSwitch.json`):

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

### The Physical-Logical Split
- **Physical**: The number of SFP/RJ45 slots on the 3D model.
- **Logical**: The `SwitchInstance` class that manages the IP assignment and packet routing.

## 2. Registration Flow

To add a switch to the market, use the `GregAPI.Hardware.RegisterCustomSwitch()` method or the `GregSwitchRegistry` directly.

### C# Registration

```csharp
using gregSdk.Definitions;
using gregSdk.Registries;

public static class SwitchRegistrar
{
    public static void Load(SwitchDefinition mySwitch)
    {
        // Option 1: Using the high-level API
        GregAPI.Hardware.RegisterCustomSwitch(mySwitch);

        // Option 2: Using the registry directly (includes validation)
        var registry = new GregSwitchRegistry();
        registry.Register(mySwitch);
    }
}
```

## 3. Managing Port Connections

Connectivity is managed through **Hooks**. Every time the player connects or disconnects a cable, `gregCore` fires a network event.

### 🔗 Link Established
Fires when the physical cable is inserted and the protocols match (e.g., SFP+ to SFP+).

```csharp
GregAPI.Events.Subscribe("greg.network.LinkEstablished", (payload) => {
    string switchId = payload.GetString("TargetId");
    int portIndex = payload.GetInt("PortIndex");
    
    if (switchId == "ccp.switch.edge_backbone_24") {
        GregLogger.Info($"High-speed link active on port {portIndex}!");
    }
});
```

### 📉 Traffic Drop Event
You can simulate network failure or congestion by listening to traffic hooks.

```lua
greg.on("greg.network.TrafficDropped", function(payload)
    if payload.Reason == "Overload" then
        greg.show_notification("Packet loss on " .. payload.TargetId)
    end
end)
```

## 4. Visual Feedback (LEDs)

You can control the emission colors of your prefab's materials directly through the hardware service to provide visual feedback for network activity.

```csharp
// Set port LED to "Activity" blink
GregAPI.Hardware.SetLEDState(switchUid, portIndex, LEDState.BlinkingGreen);

// Set port LED to "Error"
GregAPI.Hardware.SetLEDState(switchUid, portIndex, LEDState.SolidRed);
```

## 5. Persistence & IL2CPP Compatibility

:::danger IL2CPP LIMITS
In *Data Center*, modified fields on IL2CPP objects (like colors or custom logic states) are **not automatically saved**. You cannot simply use `AddComponent<MyCustomLogic>()` because the game's save system won't recognize your custom type upon reloading.
:::

### Persistent Data (GregSaveService)

Use `GregSaveService` to mirror property changes in a persistent way.

```csharp
using greg.Sdk.Services;

public void OnSwitchPainted(int switchInstanceId, Color newColor)
{
    // Store the color in the persistent gregSave buffer
    GregSaveService.SetData("MyModID", $"switch_color_{switchInstanceId}", newColor);
}
```

### Custom Logic (GregIl2CppRegistry)

To attach custom `MonoBehaviour` logic that persists across the IL2CPP boundary, you must register your type during initialization.

```csharp
using greg.Sdk.Registries;

// In your OnInitializeMelon:
GregIl2CppRegistry.RegisterType<MyCustomSwitchLogic>();

// When spawning your switch:
var logic = GregIl2CppRegistry.AddCustomComponent<MyCustomSwitchLogic>(switchGameObject);
```

## Common Mistakes ⚠️

- **Port Misalignment**: Ensure the logical `PortIndex` in your code matches the physical transform index on your Unity Prefab.
- **Throughput Caps**: If you set `ThroughputGbps` too low, connected servers will report "Network Bottleneck" and performance will drop.
- **Assembly Cache**: After updating your mod, you **MUST** delete the `[GamePath]/MelonLoader/Il2CppAssemblies/` folder to force metadata regeneration.

---

## 📖 Related Links
*   [**Building Custom Servers**](/guides/content/custom-servers)
*   [**Network Logic API**](/api/services/network)
*   [**All Network Hooks**](/api/hooks/index)
