---
title: SFPBox.RemoveSFPFromBox
description: Hook event for SFPBox.RemoveSFPFromBox
path: /api/hooks/networking/sfp-box-remove-sfp-from-box
---

# SFPBox.RemoveSFPFromBox

> **Hook ID:** `greg.networking.sfpbox.removesfpfrombox`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPBox.RemoveSFPFromBox()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveSFPFromBox(Int32 position)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `position` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveSFPFromBox` events in `SFPBox`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.sfpbox.removesfpfrombox", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.sfpbox.removesfpfrombox", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.sfpbox.removesfpfrombox")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.sfpbox.removesfpfrombox", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.sfpbox.removesfpfrombox", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.sfpbox.removesfpfrombox", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
