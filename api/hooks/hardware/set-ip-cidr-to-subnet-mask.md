---
title: SetIP.CidrToSubnetMask
description: Hook event for SetIP.CidrToSubnetMask
path: /api/hooks/hardware/set-ip-cidr-to-subnet-mask
---

# SetIP.CidrToSubnetMask

> **Hook ID:** `greg.hardware.setip.cidrtosubnetmask`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.CidrToSubnetMask()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CidrToSubnetMask(Int32 cidr, Int32& m1, Int32& m2, Int32& m3, Int32& m4)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cidr` | `Int32` | ... |
| `m1` | `Int32&` | ... |
| `m2` | `Int32&` | ... |
| `m3` | `Int32&` | ... |
| `m4` | `Int32&` | ... |


## Using this Hook

::: tip
Use this hook to react to `CidrToSubnetMask` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.setip.cidrtosubnetmask", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.setip.cidrtosubnetmask", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.setip.cidrtosubnetmask")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.setip.cidrtosubnetmask", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.setip.cidrtosubnetmask", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.setip.cidrtosubnetmask", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
