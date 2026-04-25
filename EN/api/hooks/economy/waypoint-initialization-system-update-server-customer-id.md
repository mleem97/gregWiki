---
title: WaypointInitializationSystem.UpdateServerCustomerID
description: Hook event for WaypointInitializationSystem.UpdateServerCustomerID
path: /api/hooks/economy/waypoint-initialization-system-update-server-customer-id
---

# WaypointInitializationSystem.UpdateServerCustomerID

> **Hook ID:** `greg.economy.waypointinitializationsystem.updateservercustomerid`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.UpdateServerCustomerID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateServerCustomerID(String serverID, Int32 customerID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `serverID` | `String` | ... |
| `customerID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateServerCustomerID` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.waypointinitializationsystem.updateservercustomerid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.waypointinitializationsystem.updateservercustomerid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.waypointinitializationsystem.updateservercustomerid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.waypointinitializationsystem.updateservercustomerid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.waypointinitializationsystem.updateservercustomerid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.waypointinitializationsystem.updateservercustomerid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
