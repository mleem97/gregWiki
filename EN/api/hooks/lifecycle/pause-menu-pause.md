---
title: PauseMenu.Pause
description: Hook event for PauseMenu.Pause
path: /api/hooks/lifecycle/pause-menu-pause
---

# PauseMenu.Pause

> **Hook ID:** `greg.lifecycle.pausemenu.pause`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu.Pause()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Pause(Int32 openMenu)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `openMenu` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `Pause` events in `PauseMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.pausemenu.pause", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.pausemenu.pause", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.pausemenu.pause")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.pausemenu.pause", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.pausemenu.pause", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.pausemenu.pause", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
