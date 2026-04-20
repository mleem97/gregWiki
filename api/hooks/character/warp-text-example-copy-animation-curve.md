---
title: WarpTextExample.CopyAnimationCurve
description: Hook event for WarpTextExample.CopyAnimationCurve
path: /api/hooks/character/warp-text-example-copy-animation-curve
---

# WarpTextExample.CopyAnimationCurve

> **Hook ID:** `greg.character.warptextexample.copyanimationcurve`
> **Category:** Character
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `WarpTextExample.CopyAnimationCurve()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
AnimationCurve CopyAnimationCurve(AnimationCurve curve)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `curve` | `AnimationCurve` | ... |


## Using this Hook

::: tip
Use this hook to react to `CopyAnimationCurve` events in `WarpTextExample`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.warptextexample.copyanimationcurve", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.warptextexample.copyanimationcurve", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.warptextexample.copyanimationcurve")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.warptextexample.copyanimationcurve", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.warptextexample.copyanimationcurve", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.warptextexample.copyanimationcurve", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `AnimationCurve`
- **Safe to block?**: Yes
