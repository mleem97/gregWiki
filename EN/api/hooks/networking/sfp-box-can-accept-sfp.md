---
title: SFPBox.CanAcceptSFP
description: Hook event for SFPBox.CanAcceptSFP
path: /api/hooks/networking/sfp-box-can-accept-sfp
---

# SFPBox.CanAcceptSFP

> **Hook ID:** `greg.networking.sfpbox.canacceptsfp`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPBox.CanAcceptSFP()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean CanAcceptSFP(Int32 sfpType)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `sfpType` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `CanAcceptSFP` events in `SFPBox`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.sfpbox.canacceptsfp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.sfpbox.canacceptsfp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.sfpbox.canacceptsfp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.sfpbox.canacceptsfp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.sfpbox.canacceptsfp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.sfpbox.canacceptsfp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
