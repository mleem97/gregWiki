---
title: WaypointInitializationSystem.CleanUpSystem
description: Hook event for WaypointInitializationSystem.CleanUpSystem
path: /api/hooks/character/waypoint-initialization-system-clean-up-system
---

# WaypointInitializationSystem.CleanUpSystem

> **Hook ID:** `greg.character.waypointinitializationsystem.cleanupsystem`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.CleanUpSystem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CleanUpSystem()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CleanUpSystem` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.waypointinitializationsystem.cleanupsystem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.waypointinitializationsystem.cleanupsystem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.waypointinitializationsystem.cleanupsystem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.waypointinitializationsystem.cleanupsystem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.waypointinitializationsystem.cleanupsystem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.waypointinitializationsystem.cleanupsystem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
