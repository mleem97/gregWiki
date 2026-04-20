---
title: WaypointInitializationSystem.OnUpdate
description: Hook event for WaypointInitializationSystem.OnUpdate
path: /api/hooks/character/waypoint-initialization-system-on-update
---

# WaypointInitializationSystem.OnUpdate

> **Hook ID:** `greg.character.waypointinitializationsystem.onupdate`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.OnUpdate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnUpdate()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnUpdate` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.waypointinitializationsystem.onupdate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.waypointinitializationsystem.onupdate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.waypointinitializationsystem.onupdate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.waypointinitializationsystem.onupdate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.waypointinitializationsystem.onupdate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.waypointinitializationsystem.onupdate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
