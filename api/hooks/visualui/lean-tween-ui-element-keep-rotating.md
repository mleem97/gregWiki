---
title: LeanTweenUIElement.KeepRotating
description: Hook event for LeanTweenUIElement.KeepRotating
path: /api/hooks/visualui/lean-tween-ui-element-keep-rotating
---

# LeanTweenUIElement.KeepRotating

> **Hook ID:** `greg.visualui.leantweenuielement.keeprotating`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LeanTweenUIElement.KeepRotating()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator KeepRotating()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `KeepRotating` events in `LeanTweenUIElement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.leantweenuielement.keeprotating", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.leantweenuielement.keeprotating", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.leantweenuielement.keeprotating")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.leantweenuielement.keeprotating", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.leantweenuielement.keeprotating", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.leantweenuielement.keeprotating", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
