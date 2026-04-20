---
title: RectExtensions.InverseTransform
description: Hook event for RectExtensions.InverseTransform
path: /api/hooks/settings/rect-extensions-inverse-transform
---

# RectExtensions.InverseTransform

> **Hook ID:** `greg.settings.rectextensions.inversetransform`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RectExtensions.InverseTransform()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Rect InverseTransform(Rect r, Transform transform)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `r` | `Rect` | ... |
| `transform` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `InverseTransform` events in `RectExtensions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.rectextensions.inversetransform", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.rectextensions.inversetransform", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.rectextensions.inversetransform")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.rectextensions.inversetransform", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.rectextensions.inversetransform", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.rectextensions.inversetransform", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Rect`
- **Safe to block?**: Yes
