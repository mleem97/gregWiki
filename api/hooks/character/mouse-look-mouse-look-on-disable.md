---
title: MouseLook.MouseLookOnDisable
description: Hook event for MouseLook.MouseLookOnDisable
path: /api/hooks/character/mouse-look-mouse-look-on-disable
---

# MouseLook.MouseLookOnDisable

> **Hook ID:** `greg.character.mouselook.mouselookondisable`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `MouseLook.MouseLookOnDisable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MouseLookOnDisable()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `MouseLookOnDisable` events in `MouseLook`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.mouselook.mouselookondisable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.mouselook.mouselookondisable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.mouselook.mouselookondisable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.mouselook.mouselookondisable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.mouselook.mouselookondisable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.mouselook.mouselookondisable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
