---
title: NetworkSwitch.PatchStaleSwitchId
description: Hook event for NetworkSwitch.PatchStaleSwitchId
path: /api/hooks/hardware/network-switch-patch-stale-switch-id
---

# NetworkSwitch.PatchStaleSwitchId

> **Hook ID:** `greg.hardware.networkswitch.patchstaleswitchid`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.PatchStaleSwitchId()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PatchStaleSwitchId(CableEndpoint& endpoint)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `endpoint` | `CableEndpoint&` | ... |


## Using this Hook

::: tip
Use this hook to react to `PatchStaleSwitchId` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkswitch.patchstaleswitchid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkswitch.patchstaleswitchid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkswitch.patchstaleswitchid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkswitch.patchstaleswitchid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkswitch.patchstaleswitchid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkswitch.patchstaleswitchid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
