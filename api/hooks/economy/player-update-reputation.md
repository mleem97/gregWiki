---
title: Player.UpdateReputation
description: Hook event for Player.UpdateReputation
path: /api/hooks/economy/player-update-reputation
---

# Player.UpdateReputation

> **Hook ID:** `greg.economy.player.updatereputation`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Player.UpdateReputation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateReputation(Single amount)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `amount` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateReputation` events in `Player`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.player.updatereputation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.player.updatereputation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.player.updatereputation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.player.updatereputation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.player.updatereputation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.player.updatereputation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
