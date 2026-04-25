---
title: RectExtensions.Transform
description: Hook event for RectExtensions.Transform
path: /api/hooks/settings/rect-extensions-transform
---

# RectExtensions.Transform

> **Hook ID:** `greg.settings.rectextensions.transform`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RectExtensions.Transform()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Rect Transform(Rect r, Transform transform)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `r` | `Rect` | ... |
| `transform` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `Transform` events in `RectExtensions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.rectextensions.transform", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.rectextensions.transform", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.rectextensions.transform")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.rectextensions.transform", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.rectextensions.transform", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.rectextensions.transform", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Rect`
- **Safe to block?**: Yes
