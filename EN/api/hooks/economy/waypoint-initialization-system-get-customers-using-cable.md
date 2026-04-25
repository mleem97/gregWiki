---
title: WaypointInitializationSystem.GetCustomersUsingCable
description: Hook event for WaypointInitializationSystem.GetCustomersUsingCable
path: /api/hooks/economy/waypoint-initialization-system-get-customers-using-cable
---

# WaypointInitializationSystem.GetCustomersUsingCable

> **Hook ID:** `greg.economy.waypointinitializationsystem.getcustomersusingcable`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.GetCustomersUsingCable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
HashSet`1 GetCustomersUsingCable(CableInfo cable)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cable` | `CableInfo` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCustomersUsingCable` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.waypointinitializationsystem.getcustomersusingcable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.waypointinitializationsystem.getcustomersusingcable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.waypointinitializationsystem.getcustomersusingcable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.waypointinitializationsystem.getcustomersusingcable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.waypointinitializationsystem.getcustomersusingcable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.waypointinitializationsystem.getcustomersusingcable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `HashSet`1`
- **Safe to block?**: Yes
