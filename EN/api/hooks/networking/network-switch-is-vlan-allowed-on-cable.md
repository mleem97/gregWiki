---
title: NetworkSwitch.IsVlanAllowedOnCable
description: Hook event for NetworkSwitch.IsVlanAllowedOnCable
path: /api/hooks/networking/network-switch-is-vlan-allowed-on-cable
---

# NetworkSwitch.IsVlanAllowedOnCable

> **Hook ID:** `greg.networking.networkswitch.isvlanallowedoncable`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.IsVlanAllowedOnCable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsVlanAllowedOnCable(Int32 cableId, Int32 vlanId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |
| `vlanId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsVlanAllowedOnCable` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.isvlanallowedoncable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.isvlanallowedoncable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.isvlanallowedoncable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.isvlanallowedoncable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.isvlanallowedoncable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.isvlanallowedoncable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
