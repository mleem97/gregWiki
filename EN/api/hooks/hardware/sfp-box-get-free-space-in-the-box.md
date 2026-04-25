---
title: SFPBox.GetFreeSpaceInTheBox
description: Hook event for SFPBox.GetFreeSpaceInTheBox
path: /api/hooks/hardware/sfp-box-get-free-space-in-the-box
---

# SFPBox.GetFreeSpaceInTheBox

> **Hook ID:** `greg.hardware.sfpbox.getfreespaceinthebox`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPBox.GetFreeSpaceInTheBox()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetFreeSpaceInTheBox()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetFreeSpaceInTheBox` events in `SFPBox`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.sfpbox.getfreespaceinthebox", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.sfpbox.getfreespaceinthebox", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.sfpbox.getfreespaceinthebox")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.sfpbox.getfreespaceinthebox", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.sfpbox.getfreespaceinthebox", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.sfpbox.getfreespaceinthebox", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
