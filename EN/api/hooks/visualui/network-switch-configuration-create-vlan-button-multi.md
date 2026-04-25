---
title: NetworkSwitchConfiguration.CreateVLANButtonMulti
description: Hook event for NetworkSwitchConfiguration.CreateVLANButtonMulti
path: /api/hooks/visualui/network-switch-configuration-create-vlan-button-multi
---

# NetworkSwitchConfiguration.CreateVLANButtonMulti

> **Hook ID:** `greg.visualui.networkswitchconfiguration.createvlanbuttonmulti`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.CreateVLANButtonMulti()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
ButtonExtended CreateVLANButtonMulti(Int32 vlanId, List`1 portIndices, Transform parent)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `vlanId` | `Int32` | ... |
| `portIndices` | `List`1` | ... |
| `parent` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateVLANButtonMulti` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.networkswitchconfiguration.createvlanbuttonmulti", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.networkswitchconfiguration.createvlanbuttonmulti", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.networkswitchconfiguration.createvlanbuttonmulti")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.networkswitchconfiguration.createvlanbuttonmulti", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.networkswitchconfiguration.createvlanbuttonmulti", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.networkswitchconfiguration.createvlanbuttonmulti", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `ButtonExtended`
- **Safe to block?**: Yes
