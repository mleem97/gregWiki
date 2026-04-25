---
title: WaypointInitializationSystem.DoesCableServeMultipleCustomers
description: Hook event for WaypointInitializationSystem.DoesCableServeMultipleCustomers
path: /api/hooks/economy/waypoint-initialization-system-does-cable-serve-multiple-customers
---

# WaypointInitializationSystem.DoesCableServeMultipleCustomers

> **Hook ID:** `greg.economy.waypointinitializationsystem.doescableservemultiplecustomers`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.DoesCableServeMultipleCustomers()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean DoesCableServeMultipleCustomers(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `DoesCableServeMultipleCustomers` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.waypointinitializationsystem.doescableservemultiplecustomers", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.waypointinitializationsystem.doescableservemultiplecustomers", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.waypointinitializationsystem.doescableservemultiplecustomers")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.waypointinitializationsystem.doescableservemultiplecustomers", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.waypointinitializationsystem.doescableservemultiplecustomers", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.waypointinitializationsystem.doescableservemultiplecustomers", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
