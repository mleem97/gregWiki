---
title: FCP_Persistence.InitStatic
description: Hook event for FCP_Persistence.InitStatic
path: /api/hooks/serialization/fcp_-persistence-init-static
---

# FCP_Persistence.InitStatic

> **Hook ID:** `greg.serialization.fcp_persistence.initstatic`
> **Category:** Serialization
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FCP_Persistence.InitStatic()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InitStatic()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `InitStatic` events in `FCP_Persistence`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.fcp_persistence.initstatic", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.fcp_persistence.initstatic", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.fcp_persistence.initstatic")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.fcp_persistence.initstatic", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.fcp_persistence.initstatic", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.fcp_persistence.initstatic", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
