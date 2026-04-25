---
title: Player.UpdateXP
description: Hook event for Player.UpdateXP
path: /api/hooks/economy/player-update-xp
---

# Player.UpdateXP

> **Hook ID:** `greg.economy.player.updatexp`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Player.UpdateXP()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean UpdateXP(Single amount)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `amount` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateXP` events in `Player`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.player.updatexp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.player.updatexp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.player.updatexp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.player.updatexp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.player.updatexp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.player.updatexp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
