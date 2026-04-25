---
title: SFPModule.SlideIntoPort
description: Hook event for SFPModule.SlideIntoPort
path: /api/hooks/hardware/sfp-module-slide-into-port
---

# SFPModule.SlideIntoPort

> **Hook ID:** `greg.hardware.sfpmodule.slideintoport`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPModule.SlideIntoPort()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator SlideIntoPort(Transform port)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `port` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `SlideIntoPort` events in `SFPModule`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.sfpmodule.slideintoport", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.sfpmodule.slideintoport", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.sfpmodule.slideintoport")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.sfpmodule.slideintoport", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.sfpmodule.slideintoport", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.sfpmodule.slideintoport", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
