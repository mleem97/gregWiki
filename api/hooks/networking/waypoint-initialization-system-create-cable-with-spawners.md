---
title: WaypointInitializationSystem.CreateCableWithSpawners
description: Hook event for WaypointInitializationSystem.CreateCableWithSpawners
path: /api/hooks/networking/waypoint-initialization-system-create-cable-with-spawners
---

# WaypointInitializationSystem.CreateCableWithSpawners

> **Hook ID:** `greg.networking.waypointinitializationsystem.createcablewithspawners`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.CreateCableWithSpawners()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateCableWithSpawners(Int32 cableId, List`1 positions)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |
| `positions` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateCableWithSpawners` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.waypointinitializationsystem.createcablewithspawners", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.waypointinitializationsystem.createcablewithspawners", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.waypointinitializationsystem.createcablewithspawners")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.waypointinitializationsystem.createcablewithspawners", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.waypointinitializationsystem.createcablewithspawners", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.waypointinitializationsystem.createcablewithspawners", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
