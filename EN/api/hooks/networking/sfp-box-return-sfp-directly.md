---
title: SFPBox.ReturnSFPDirectly
description: Hook event for SFPBox.ReturnSFPDirectly
path: /api/hooks/networking/sfp-box-return-sfp-directly
---

# SFPBox.ReturnSFPDirectly

> **Hook ID:** `greg.networking.sfpbox.returnsfpdirectly`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPBox.ReturnSFPDirectly()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean ReturnSFPDirectly(SFPModule sfpmodule)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `sfpmodule` | `SFPModule` | ... |


## Using this Hook

::: tip
Use this hook to react to `ReturnSFPDirectly` events in `SFPBox`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.sfpbox.returnsfpdirectly", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.sfpbox.returnsfpdirectly", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.sfpbox.returnsfpdirectly")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.sfpbox.returnsfpdirectly", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.sfpbox.returnsfpdirectly", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.sfpbox.returnsfpdirectly", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
