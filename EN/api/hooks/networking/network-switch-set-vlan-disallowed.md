---
title: NetworkSwitch.SetVlanDisallowed
description: Hook event for NetworkSwitch.SetVlanDisallowed
path: /api/hooks/networking/network-switch-set-vlan-disallowed
---

# NetworkSwitch.SetVlanDisallowed

> **Hook ID:** `greg.networking.networkswitch.setvlandisallowed`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.SetVlanDisallowed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetVlanDisallowed(Int32 portIndex, Int32 vlanId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `portIndex` | `Int32` | ... |
| `vlanId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetVlanDisallowed` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitch.setvlandisallowed", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitch.setvlandisallowed", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitch.setvlandisallowed")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitch.setvlandisallowed", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitch.setvlandisallowed", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitch.setvlandisallowed", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
