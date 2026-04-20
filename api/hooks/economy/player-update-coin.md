---
title: Player.UpdateCoin
description: Hook event for Player.UpdateCoin
path: /api/hooks/economy/player-update-coin
---

# Player.UpdateCoin

> **Hook ID:** `greg.economy.player.updatecoin`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Player.UpdateCoin()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean UpdateCoin(Single _coinChhangeAmount, Boolean withoutSound)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_coinChhangeAmount` | `Single` | ... |
| `withoutSound` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateCoin` events in `Player`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.player.updatecoin", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.player.updatecoin", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.player.updatecoin")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.player.updatecoin", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.player.updatecoin", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.player.updatecoin", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
