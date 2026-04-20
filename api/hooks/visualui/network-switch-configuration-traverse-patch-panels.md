---
title: NetworkSwitchConfiguration.TraversePatchPanels
description: Hook event for NetworkSwitchConfiguration.TraversePatchPanels
path: /api/hooks/visualui/network-switch-configuration-traverse-patch-panels
---

# NetworkSwitchConfiguration.TraversePatchPanels

> **Hook ID:** `greg.visualui.networkswitchconfiguration.traversepatchpanels`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.TraversePatchPanels()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
ValueTuple`2 TraversePatchPanels(CableLink port)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `port` | `CableLink` | ... |


## Using this Hook

::: tip
Use this hook to react to `TraversePatchPanels` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.networkswitchconfiguration.traversepatchpanels", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.networkswitchconfiguration.traversepatchpanels", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.networkswitchconfiguration.traversepatchpanels")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.networkswitchconfiguration.traversepatchpanels", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.networkswitchconfiguration.traversepatchpanels", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.networkswitchconfiguration.traversepatchpanels", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `ValueTuple`2`
- **Safe to block?**: Yes
