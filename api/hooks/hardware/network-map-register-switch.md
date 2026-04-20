---
title: NetworkMap.RegisterSwitch
description: Hook event for NetworkMap.RegisterSwitch
path: /api/hooks/hardware/network-map-register-switch
---

# NetworkMap.RegisterSwitch

> **Hook ID:** `greg.hardware.networkmap.registerswitch`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RegisterSwitch()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RegisterSwitch(NetworkSwitch networkSwitch)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |


## Using this Hook

::: tip
Use this hook to react to `RegisterSwitch` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkmap.registerswitch", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkmap.registerswitch", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkmap.registerswitch")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkmap.registerswitch", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkmap.registerswitch", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkmap.registerswitch", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
