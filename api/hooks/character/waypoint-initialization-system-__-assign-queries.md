---
title: WaypointInitializationSystem.__AssignQueries
description: Hook event for WaypointInitializationSystem.__AssignQueries
path: /api/hooks/character/waypoint-initialization-system-__-assign-queries
---

# WaypointInitializationSystem.__AssignQueries

> **Hook ID:** `greg.character.waypointinitializationsystem.__assignqueries`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.__AssignQueries()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void __AssignQueries(SystemState& state)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `state` | `SystemState&` | ... |


## Using this Hook

::: tip
Use this hook to react to `__AssignQueries` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.waypointinitializationsystem.__assignqueries", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.waypointinitializationsystem.__assignqueries", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.waypointinitializationsystem.__assignqueries")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.waypointinitializationsystem.__assignqueries", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.waypointinitializationsystem.__assignqueries", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.waypointinitializationsystem.__assignqueries", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
