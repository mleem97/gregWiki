---
title: NetworkSwitchConfiguration.ToggleVLANMulti
description: Hook event for NetworkSwitchConfiguration.ToggleVLANMulti
path: /api/hooks/networking/network-switch-configuration-toggle-vlan-multi
---

# NetworkSwitchConfiguration.ToggleVLANMulti

> **Hook ID:** `greg.networking.networkswitchconfiguration.togglevlanmulti`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.ToggleVLANMulti()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ToggleVLANMulti(List`1 portIndices, Int32 vlanId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `portIndices` | `List`1` | ... |
| `vlanId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ToggleVLANMulti` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitchconfiguration.togglevlanmulti", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitchconfiguration.togglevlanmulti", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitchconfiguration.togglevlanmulti")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitchconfiguration.togglevlanmulti", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitchconfiguration.togglevlanmulti", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitchconfiguration.togglevlanmulti", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
