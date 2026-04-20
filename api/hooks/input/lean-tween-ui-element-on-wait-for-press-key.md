---
title: LeanTweenUIElement.OnWaitForPressKey
description: Hook event for LeanTweenUIElement.OnWaitForPressKey
path: /api/hooks/input/lean-tween-ui-element-on-wait-for-press-key
---

# LeanTweenUIElement.OnWaitForPressKey

> **Hook ID:** `greg.input.leantweenuielement.onwaitforpresskey`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LeanTweenUIElement.OnWaitForPressKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnWaitForPressKey()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnWaitForPressKey` events in `LeanTweenUIElement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.leantweenuielement.onwaitforpresskey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.leantweenuielement.onwaitforpresskey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.leantweenuielement.onwaitforpresskey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.leantweenuielement.onwaitforpresskey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.leantweenuielement.onwaitforpresskey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.leantweenuielement.onwaitforpresskey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
