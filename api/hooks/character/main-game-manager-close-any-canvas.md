---
title: MainGameManager.CloseAnyCanvas
description: Hook event for MainGameManager.CloseAnyCanvas
path: /api/hooks/character/main-game-manager-close-any-canvas
---

# MainGameManager.CloseAnyCanvas

> **Hook ID:** `greg.character.maingamemanager.closeanycanvas`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.CloseAnyCanvas()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CloseAnyCanvas(Boolean isCustomerChoice)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `isCustomerChoice` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `CloseAnyCanvas` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.maingamemanager.closeanycanvas", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.maingamemanager.closeanycanvas", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.maingamemanager.closeanycanvas")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.maingamemanager.closeanycanvas", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.maingamemanager.closeanycanvas", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.maingamemanager.closeanycanvas", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
