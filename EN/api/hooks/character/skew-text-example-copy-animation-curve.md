---
title: SkewTextExample.CopyAnimationCurve
description: Hook event for SkewTextExample.CopyAnimationCurve
path: /api/hooks/character/skew-text-example-copy-animation-curve
---

# SkewTextExample.CopyAnimationCurve

> **Hook ID:** `greg.character.skewtextexample.copyanimationcurve`
> **Category:** Character
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `SkewTextExample.CopyAnimationCurve()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `CopyAnimationCurve` events in `SkewTextExample`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.skewtextexample.copyanimationcurve", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.skewtextexample.copyanimationcurve", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.skewtextexample.copyanimationcurve")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.skewtextexample.copyanimationcurve", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.skewtextexample.copyanimationcurve", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.skewtextexample.copyanimationcurve", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `AnimationCurve`
- **Safe to block?**: Yes
