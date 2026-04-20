---
title: GamepadIcons.GetSprite
description: Hook event for GamepadIcons.GetSprite
path: /api/hooks/unityengine/gamepad-icons-get-sprite
---

# GamepadIcons.GetSprite

> **Hook ID:** `greg.unityengine.gamepadicons.getsprite`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `GamepadIcons.GetSprite()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Sprite GetSprite(String controlPath)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `controlPath` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetSprite` events in `GamepadIcons`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.gamepadicons.getsprite", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.gamepadicons.getsprite", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.gamepadicons.getsprite")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.gamepadicons.getsprite", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.gamepadicons.getsprite", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.gamepadicons.getsprite", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Sprite`
- **Safe to block?**: Yes
