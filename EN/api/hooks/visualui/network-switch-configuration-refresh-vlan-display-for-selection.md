---
title: NetworkSwitchConfiguration.RefreshVLANDisplayForSelection
description: Hook event for NetworkSwitchConfiguration.RefreshVLANDisplayForSelection
path: /api/hooks/visualui/network-switch-configuration-refresh-vlan-display-for-selection
---

# NetworkSwitchConfiguration.RefreshVLANDisplayForSelection

> **Hook ID:** `greg.visualui.networkswitchconfiguration.refreshvlandisplayforselection`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.RefreshVLANDisplayForSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RefreshVLANDisplayForSelection(Int32 selectVlanId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `selectVlanId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `RefreshVLANDisplayForSelection` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.networkswitchconfiguration.refreshvlandisplayforselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.networkswitchconfiguration.refreshvlandisplayforselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.networkswitchconfiguration.refreshvlandisplayforselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.networkswitchconfiguration.refreshvlandisplayforselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.networkswitchconfiguration.refreshvlandisplayforselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.networkswitchconfiguration.refreshvlandisplayforselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
