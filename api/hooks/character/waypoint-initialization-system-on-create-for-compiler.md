---
title: WaypointInitializationSystem.OnCreateForCompiler
description: Hook event for WaypointInitializationSystem.OnCreateForCompiler
path: /api/hooks/character/waypoint-initialization-system-on-create-for-compiler
---

# WaypointInitializationSystem.OnCreateForCompiler

> **Hook ID:** `greg.character.waypointinitializationsystem.oncreateforcompiler`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.OnCreateForCompiler()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnCreateForCompiler()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnCreateForCompiler` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.waypointinitializationsystem.oncreateforcompiler", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.waypointinitializationsystem.oncreateforcompiler", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.waypointinitializationsystem.oncreateforcompiler")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.waypointinitializationsystem.oncreateforcompiler", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.waypointinitializationsystem.oncreateforcompiler", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.waypointinitializationsystem.oncreateforcompiler", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
