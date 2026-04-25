---
title: CableLink.InsertSFP
description: Hook event for CableLink.InsertSFP
path: /api/hooks/networking/cable-link-insert-sfp
---

# CableLink.InsertSFP

> **Hook ID:** `greg.networking.cablelink.insertsfp`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableLink.InsertSFP()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InsertSFP(Single speed, Int32 type, SFPModule module)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `speed` | `Single` | ... |
| `type` | `Int32` | ... |
| `module` | `SFPModule` | ... |


## Using this Hook

::: tip
Use this hook to react to `InsertSFP` events in `CableLink`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablelink.insertsfp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablelink.insertsfp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablelink.insertsfp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablelink.insertsfp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablelink.insertsfp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablelink.insertsfp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
