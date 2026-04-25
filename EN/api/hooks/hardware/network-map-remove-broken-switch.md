---
title: NetworkMap.RemoveBrokenSwitch
description: Hook event for NetworkMap.RemoveBrokenSwitch
path: /api/hooks/hardware/network-map-remove-broken-switch
---

# NetworkMap.RemoveBrokenSwitch

> **Hook ID:** `greg.hardware.networkmap.removebrokenswitch`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RemoveBrokenSwitch()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveBrokenSwitch(String switchId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `switchId` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveBrokenSwitch` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkmap.removebrokenswitch", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkmap.removebrokenswitch", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkmap.removebrokenswitch")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkmap.removebrokenswitch", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkmap.removebrokenswitch", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkmap.removebrokenswitch", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
