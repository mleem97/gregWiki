---
title: Tutorials.ButtonShowTutorialInPauseMenu
description: Hook event for Tutorials.ButtonShowTutorialInPauseMenu
path: /api/hooks/lifecycle/tutorials-button-show-tutorial-in-pause-menu
---

# Tutorials.ButtonShowTutorialInPauseMenu

> **Hook ID:** `greg.lifecycle.tutorials.buttonshowtutorialinpausemenu`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials.ButtonShowTutorialInPauseMenu()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonShowTutorialInPauseMenu(Int32 i)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `i` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ButtonShowTutorialInPauseMenu` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.tutorials.buttonshowtutorialinpausemenu", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.tutorials.buttonshowtutorialinpausemenu", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.tutorials.buttonshowtutorialinpausemenu")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.tutorials.buttonshowtutorialinpausemenu", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.tutorials.buttonshowtutorialinpausemenu", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.tutorials.buttonshowtutorialinpausemenu", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
