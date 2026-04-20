---
title: CableLink.RemoveSFP
description: Hook event for CableLink.RemoveSFP
path: /api/hooks/networking/cable-link-remove-sfp
---

# CableLink.RemoveSFP

> **Hook ID:** `greg.networking.cablelink.removesfp`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableLink.RemoveSFP()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveSFP()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RemoveSFP` events in `CableLink`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablelink.removesfp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablelink.removesfp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablelink.removesfp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablelink.removesfp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablelink.removesfp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablelink.removesfp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
