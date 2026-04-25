---
title: Technician.OnLoadingStarted
description: Hook event for Technician.OnLoadingStarted
path: /api/hooks/persistence/technician-on-loading-started
---

# Technician.OnLoadingStarted

> **Hook ID:** `greg.persistence.technician.onloadingstarted`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.OnLoadingStarted()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLoadingStarted()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnLoadingStarted` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.technician.onloadingstarted", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.technician.onloadingstarted", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.technician.onloadingstarted")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.technician.onloadingstarted", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.technician.onloadingstarted", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.technician.onloadingstarted", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
