---
title: RayLookAt.HandleLookAtRay
description: Hook event for RayLookAt.HandleLookAtRay
path: /api/hooks/character/ray-look-at-handle-look-at-ray
---

# RayLookAt.HandleLookAtRay

> **Hook ID:** `greg.character.raylookat.handlelookatray`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `RayLookAt.HandleLookAtRay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void HandleLookAtRay(Transform character)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `character` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `HandleLookAtRay` events in `RayLookAt`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.raylookat.handlelookatray", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.raylookat.handlelookatray", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.raylookat.handlelookatray")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.raylookat.handlelookatray", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.raylookat.handlelookatray", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.raylookat.handlelookatray", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
