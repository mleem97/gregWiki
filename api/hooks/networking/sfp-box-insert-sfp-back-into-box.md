---
title: SFPBox.InsertSFPBackIntoBox
description: Hook event for SFPBox.InsertSFPBackIntoBox
path: /api/hooks/networking/sfp-box-insert-sfp-back-into-box
---

# SFPBox.InsertSFPBackIntoBox

> **Hook ID:** `greg.networking.sfpbox.insertsfpbackintobox`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPBox.InsertSFPBackIntoBox()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InsertSFPBackIntoBox()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `InsertSFPBackIntoBox` events in `SFPBox`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.sfpbox.insertsfpbackintobox", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.sfpbox.insertsfpbackintobox", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.sfpbox.insertsfpbackintobox")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.sfpbox.insertsfpbackintobox", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.sfpbox.insertsfpbackintobox", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.sfpbox.insertsfpbackintobox", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
