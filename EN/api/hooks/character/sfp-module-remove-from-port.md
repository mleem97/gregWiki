---
title: SFPModule.RemoveFromPort
description: Hook event for SFPModule.RemoveFromPort
path: /api/hooks/character/sfp-module-remove-from-port
---

# SFPModule.RemoveFromPort

> **Hook ID:** `greg.character.sfpmodule.removefromport`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPModule.RemoveFromPort()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveFromPort()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RemoveFromPort` events in `SFPModule`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.sfpmodule.removefromport", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.sfpmodule.removefromport", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.sfpmodule.removefromport")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.sfpmodule.removefromport", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.sfpmodule.removefromport", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.sfpmodule.removefromport", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
