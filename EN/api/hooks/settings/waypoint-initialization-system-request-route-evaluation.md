---
title: WaypointInitializationSystem.RequestRouteEvaluation
description: Hook event for WaypointInitializationSystem.RequestRouteEvaluation
path: /api/hooks/settings/waypoint-initialization-system-request-route-evaluation
---

# WaypointInitializationSystem.RequestRouteEvaluation

> **Hook ID:** `greg.settings.waypointinitializationsystem.requestrouteevaluation`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.RequestRouteEvaluation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RequestRouteEvaluation()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RequestRouteEvaluation` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.waypointinitializationsystem.requestrouteevaluation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.waypointinitializationsystem.requestrouteevaluation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.waypointinitializationsystem.requestrouteevaluation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.waypointinitializationsystem.requestrouteevaluation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.waypointinitializationsystem.requestrouteevaluation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.waypointinitializationsystem.requestrouteevaluation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
