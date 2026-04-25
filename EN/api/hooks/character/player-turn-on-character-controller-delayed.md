---
title: Player.TurnOnCharacterControllerDelayed
description: Hook event for Player.TurnOnCharacterControllerDelayed
path: /api/hooks/character/player-turn-on-character-controller-delayed
---

# Player.TurnOnCharacterControllerDelayed

> **Hook ID:** `greg.character.player.turnoncharactercontrollerdelayed`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Player.TurnOnCharacterControllerDelayed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator TurnOnCharacterControllerDelayed()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TurnOnCharacterControllerDelayed` events in `Player`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.player.turnoncharactercontrollerdelayed", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.player.turnoncharactercontrollerdelayed", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.player.turnoncharactercontrollerdelayed")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.player.turnoncharactercontrollerdelayed", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.player.turnoncharactercontrollerdelayed", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.player.turnoncharactercontrollerdelayed", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
