---
title: WaypointInitializationSystem.GetCustomerRoutes
description: Hook event for WaypointInitializationSystem.GetCustomerRoutes
path: /api/hooks/economy/waypoint-initialization-system-get-customer-routes
---

# WaypointInitializationSystem.GetCustomerRoutes

> **Hook ID:** `greg.economy.waypointinitializationsystem.getcustomerroutes`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.GetCustomerRoutes()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Dictionary`2 GetCustomerRoutes()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetCustomerRoutes` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.waypointinitializationsystem.getcustomerroutes", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.waypointinitializationsystem.getcustomerroutes", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.waypointinitializationsystem.getcustomerroutes")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.waypointinitializationsystem.getcustomerroutes", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.waypointinitializationsystem.getcustomerroutes", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.waypointinitializationsystem.getcustomerroutes", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Dictionary`2`
- **Safe to block?**: Yes
