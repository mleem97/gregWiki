---
title: PlayerManager.DefaultActionEffect
description: Hook event for PlayerManager.DefaultActionEffect
path: /api/hooks/economy/player-manager-default-action-effect
---

# PlayerManager.DefaultActionEffect

> **Hook ID:** `greg.economy.playermanager.defaultactioneffect`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PlayerManager.DefaultActionEffect()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DefaultActionEffect(Vector3 _position, Single _time)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_position` | `Vector3` | ... |
| `_time` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `DefaultActionEffect` events in `PlayerManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.playermanager.defaultactioneffect", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.playermanager.defaultactioneffect", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.playermanager.defaultactioneffect")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.playermanager.defaultactioneffect", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.playermanager.defaultactioneffect", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.playermanager.defaultactioneffect", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
