---
title: LeanTweenUIElement._Awake_b__15_2
description: Hook event for LeanTweenUIElement._Awake_b__15_2
path: /api/hooks/visualui/lean-tween-ui-element-_-awake_b__15_2
---

# LeanTweenUIElement._Awake_b__15_2

> **Hook ID:** `greg.visualui.leantweenuielement._awake_b__15_2`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LeanTweenUIElement._Awake_b__15_2()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _Awake_b__15_2(CallbackContext ctx)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ctx` | `CallbackContext` | ... |


## Using this Hook

::: tip
Use this hook to react to `_Awake_b__15_2` events in `LeanTweenUIElement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.leantweenuielement._awake_b__15_2", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.leantweenuielement._awake_b__15_2", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.leantweenuielement._awake_b__15_2")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.leantweenuielement._awake_b__15_2", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.leantweenuielement._awake_b__15_2", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.leantweenuielement._awake_b__15_2", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
