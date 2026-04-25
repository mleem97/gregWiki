---
title: NetworkSwitch.IsVlanAllowedOnPort
description: Hook event for NetworkSwitch.IsVlanAllowedOnPort
path: /api/hooks/networking/network-switch-is-vlan-allowed-on-port
---

# NetworkSwitch.IsVlanAllowedOnPort

> **Hook ID:** `greg.networking.networkswitch.isvlanallowedonport`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.IsVlanAllowedOnPort()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsVlanAllowedOnPort(Int32 portIndex, Int32 vlanId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `portIndex` | `Int32` | ... |
| `vlanId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsVlanAllowedOnPort` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.isvlanallowedonport", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.isvlanallowedonport", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.isvlanallowedonport")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.isvlanallowedonport", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.isvlanallowedonport", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.isvlanallowedonport", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
