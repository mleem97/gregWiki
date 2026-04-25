---
title: WaypointInitializationSystem.MapDirectionToSibling
description: Hook event for WaypointInitializationSystem.MapDirectionToSibling
path: /api/hooks/settings/waypoint-initialization-system-map-direction-to-sibling
---

# WaypointInitializationSystem.MapDirectionToSibling

> **Hook ID:** `greg.settings.waypointinitializationsystem.mapdirectiontosibling`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.MapDirectionToSibling()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String MapDirectionToSibling(CableInfo primary, CableInfo sibling, String direction)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `primary` | `CableInfo` | ... |
| `sibling` | `CableInfo` | ... |
| `direction` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `MapDirectionToSibling` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.waypointinitializationsystem.mapdirectiontosibling", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.waypointinitializationsystem.mapdirectiontosibling", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.waypointinitializationsystem.mapdirectiontosibling")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.waypointinitializationsystem.mapdirectiontosibling", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.waypointinitializationsystem.mapdirectiontosibling", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.waypointinitializationsystem.mapdirectiontosibling", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
