---
title: MainGameManager.ShowBuyWallCanvas
description: Hook event for MainGameManager.ShowBuyWallCanvas
path: /api/hooks/economy/main-game-manager-show-buy-wall-canvas
---

# MainGameManager.ShowBuyWallCanvas

> **Hook ID:** `greg.economy.maingamemanager.showbuywallcanvas`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ShowBuyWallCanvas()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowBuyWallCanvas(Wall wall)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `wall` | `Wall` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowBuyWallCanvas` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.showbuywallcanvas", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.showbuywallcanvas", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.showbuywallcanvas")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.showbuywallcanvas", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.showbuywallcanvas", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.showbuywallcanvas", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
