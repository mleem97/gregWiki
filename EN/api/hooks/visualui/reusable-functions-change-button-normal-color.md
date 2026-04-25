---
title: ReusableFunctions.ChangeButtonNormalColor
description: Hook event for ReusableFunctions.ChangeButtonNormalColor
path: /api/hooks/visualui/reusable-functions-change-button-normal-color
---

# ReusableFunctions.ChangeButtonNormalColor

> **Hook ID:** `greg.visualui.reusablefunctions.changebuttonnormalcolor`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.ChangeButtonNormalColor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ChangeButtonNormalColor(Button button, Color color)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `button` | `Button` | ... |
| `color` | `Color` | ... |


## Using this Hook

::: tip
Use this hook to react to `ChangeButtonNormalColor` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.reusablefunctions.changebuttonnormalcolor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.reusablefunctions.changebuttonnormalcolor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.reusablefunctions.changebuttonnormalcolor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.reusablefunctions.changebuttonnormalcolor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.reusablefunctions.changebuttonnormalcolor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.reusablefunctions.changebuttonnormalcolor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
