---
title: PauseMenu.Resume
description: Hook event for PauseMenu.Resume
path: /api/hooks/lifecycle/pause-menu-resume
---

# PauseMenu.Resume

> **Hook ID:** `greg.lifecycle.pausemenu.resume`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu.Resume()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Resume()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Resume` events in `PauseMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.pausemenu.resume", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.pausemenu.resume", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.pausemenu.resume")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.pausemenu.resume", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.pausemenu.resume", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.pausemenu.resume", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
