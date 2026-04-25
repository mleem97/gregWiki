---
title: WaypointInitializationSystem.UpdateAllUI
description: Hook event for WaypointInitializationSystem.UpdateAllUI
path: /api/hooks/visualui/waypoint-initialization-system-update-all-ui
---

# WaypointInitializationSystem.UpdateAllUI

> **Hook ID:** `greg.visualui.waypointinitializationsystem.updateallui`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `WaypointInitializationSystem.UpdateAllUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateAllUI(Dictionary`2 customerInfo, List`1 allRoutes, Dictionary`2 cableLoad, Dictionary`2 cablePairLookup)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerInfo` | `Dictionary`2` | ... |
| `allRoutes` | `List`1` | ... |
| `cableLoad` | `Dictionary`2` | ... |
| `cablePairLookup` | `Dictionary`2` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateAllUI` events in `WaypointInitializationSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.waypointinitializationsystem.updateallui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.waypointinitializationsystem.updateallui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.waypointinitializationsystem.updateallui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.waypointinitializationsystem.updateallui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.waypointinitializationsystem.updateallui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.waypointinitializationsystem.updateallui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
