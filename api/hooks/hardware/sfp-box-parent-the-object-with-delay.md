---
title: SFPBox.ParentTheObjectWithDelay
description: Hook event for SFPBox.ParentTheObjectWithDelay
path: /api/hooks/hardware/sfp-box-parent-the-object-with-delay
---

# SFPBox.ParentTheObjectWithDelay

> **Hook ID:** `greg.hardware.sfpbox.parenttheobjectwithdelay`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPBox.ParentTheObjectWithDelay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator ParentTheObjectWithDelay(Transform uo, Int32 index)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `uo` | `Transform` | ... |
| `index` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ParentTheObjectWithDelay` events in `SFPBox`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.sfpbox.parenttheobjectwithdelay", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.sfpbox.parenttheobjectwithdelay", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.sfpbox.parenttheobjectwithdelay")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.sfpbox.parenttheobjectwithdelay", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.sfpbox.parenttheobjectwithdelay", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.sfpbox.parenttheobjectwithdelay", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
