---
title: SFPModule.InsertedInSFPPort
description: Hook event for SFPModule.InsertedInSFPPort
path: /api/hooks/networking/sfp-module-inserted-in-sfp-port
---

# SFPModule.InsertedInSFPPort

> **Hook ID:** `greg.networking.sfpmodule.insertedinsfpport`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPModule.InsertedInSFPPort()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InsertedInSFPPort(CableLink _link, Boolean immediate)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_link` | `CableLink` | ... |
| `immediate` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `InsertedInSFPPort` events in `SFPModule`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.sfpmodule.insertedinsfpport", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.sfpmodule.insertedinsfpport", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.sfpmodule.insertedinsfpport")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.sfpmodule.insertedinsfpport", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.sfpmodule.insertedinsfpport", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.sfpmodule.insertedinsfpport", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
