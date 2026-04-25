---
title: RayLookAt.HideItemNameOrSiluete
description: Hook event for RayLookAt.HideItemNameOrSiluete
path: /api/hooks/uncategorized/ray-look-at-hide-item-name-or-siluete
---

# RayLookAt.HideItemNameOrSiluete

> **Hook ID:** `greg.uncategorized.raylookat.hideitemnameorsiluete`
> **Category:** Uncategorized
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `RayLookAt.HideItemNameOrSiluete()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void HideItemNameOrSiluete()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `HideItemNameOrSiluete` events in `RayLookAt`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.raylookat.hideitemnameorsiluete", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.raylookat.hideitemnameorsiluete", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.raylookat.hideitemnameorsiluete")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.raylookat.hideitemnameorsiluete", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.raylookat.hideitemnameorsiluete", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.raylookat.hideitemnameorsiluete", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
