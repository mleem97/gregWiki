---
title: RayLookAt.CloseInteractionMenu
description: Hook event for RayLookAt.CloseInteractionMenu
path: /api/hooks/visualui/ray-look-at-close-interaction-menu
---

# RayLookAt.CloseInteractionMenu

> **Hook ID:** `greg.visualui.raylookat.closeinteractionmenu`
> **Category:** Visualui
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `RayLookAt.CloseInteractionMenu()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CloseInteractionMenu()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CloseInteractionMenu` events in `RayLookAt`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.raylookat.closeinteractionmenu", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.raylookat.closeinteractionmenu", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.raylookat.closeinteractionmenu")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.raylookat.closeinteractionmenu", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.raylookat.closeinteractionmenu", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.raylookat.closeinteractionmenu", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
