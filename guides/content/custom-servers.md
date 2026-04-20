---
title: Building Custom Servers
description: Learn how to inject custom hardware and servers into Data Center
path: /guides/content/custom-servers
---

# Building Custom Servers

*Data Center* allows players to buy, rack, and manage servers. Under the hood, servers are `UsableObject` components combined with specific configurations. This guide explains how to define a custom server, register it with `gregCore`, hook into its lifecycle, and manage its state persistence.

---

## 1. The Anatomy of a Server

In the native game source, a "Server" is built from several pieces of data:
1. **The 3D Asset**: A Unity `GameObject` containing `MeshRenderer` and `BoxCollider`. 
2. **The Shop Config**: A `ShopItemConfig` defining the price, name, and size (e.g. 1U, 2U, 4U).
3. **The Logical Script**: A `ServerInstance` script attached to the Prefab that holds RAM, CPU, and Power states.

When you bring a custom server via your mod, you **cannot** just dump a `.obj` model in a folder. You must bridge the model with the game's logic.

## 2. Using gregCore API to Register a Server

`gregCore` abstracts away the Unity IL2CPP AssetBundle loading. You just point it to your textures and define the logic.

### Step 1: Define the Config
```csharp
var myServerConfig = new gregCore.Models.CustomServerDef {
    InternalId = "myMod.super_server_1",
    DisplayName = "GregTech Quantum Blade",
    Cost = 15500.0f,
    RackUnits = 1,
    PowerDrawWatts = 450,
    HeatGeneration = 120,
    PrefabPath = "myMod/assets/quantum_blade.bundle"
};
```

### Step 2: Register it in OnInitializeMelon
```csharp
GregAPI.Hardware.RegisterCustomServer(myServerConfig);
```

## 3. Hooking into the Server Lifecycle

Adding the item to the shop is only half the battle. You need to know when the player places it, turns it on, or assigns an IP address. This is exactly what the `gregCore` Hooks are for.

### 🔌 Server Placed (Racked)
Triggered when the player successfully clicks onto an empty rack slot with your server in hand.

#Tabset
#Tab: C#
```csharp
GregAPI.Subscribe("greg.hardware.ServerMounted", (payload) => {
    // Check if the mounted server is OUR server
    if (payload.GetString("InternalId") == "myMod.super_server_1") {
        GregLogger.Info($"Player racked our Quantum Blade at slot {payload.GetInt("SlotIndex")}!");
    }
});
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.ServerMounted", function(payload)
    if payload.InternalId == "myMod.super_server_1" then
        print("Quantum Blade racked at " .. payload.SlotIndex)
    end
end)
```
#EndTabset

### ⚡ Server Powered Event
Fires when the player presses the power button `InteractOnClick()`.

#Tabset
#Tab: C#
```csharp
GregAPI.Subscribe("greg.hardware.ServerPoweredOn", (payload) => {
    if (payload.GetString("InternalId") == "myMod.super_server_1") {
        // Apply custom logic: Quantum blades spin up extra fans!
        GregAPI.Audio.Play3DSound(payload.GetVector3("Position"), "quantum_spinup.wav");
    }
});
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.ServerPoweredOn", function(payload)
    if payload.InternalId == "myMod.super_server_1" then
        greg.audio.play3d(payload.Position, "quantum_spinup.wav")
    end
end)
```
#EndTabset

## 4. Persisting Custom State (Savegames)

If your custom server has internal modded state (e.g. "OverclockLevel = 3"), that data requires saving. 
Because IL2CPP native serialization ignores C# injected fields, you must use the `gregCore` Persistence API.

```csharp
// When power is modified
int myOverclockLevel = 3;

// Save the state explicitly tied to the Unique Game Instance ID (UID) of the spawned server
GregAPI.Persistence.SaveCustomData(payload.GetString("GameUID"), "overclock", myOverclockLevel);
```

On load, you retrieve that state via `greg.system.GameLoaded`.

## Common Mistakes ⚠️

- **Collision Overlaps**: If your 1U `Prefab` bounds actually measure 1.2U in Unity, the game will refuse to let the player rack it, but it will not throw an error. Double-check your model bounds!
- **Missing Ghost Objects**: `gregCore` generates placement-ghosts automatically based on your colliders. Do not manually attach `GhostObject` logic to your uploaded Prefabs.
