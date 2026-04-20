---
title: PlayerManager.GainIOPSEffect
description: Hook event for PlayerManager.GainIOPSEffect
path: /api/hooks/economy/player-manager-gain-iops-effect
---

# PlayerManager.GainIOPSEffect

> **Hook ID:** `greg.economy.playermanager.gainiopseffect`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PlayerManager.GainIOPSEffect()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void GainIOPSEffect()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GainIOPSEffect` events in `PlayerManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.playermanager.gainiopseffect", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.playermanager.gainiopseffect", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.playermanager.gainiopseffect")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.playermanager.gainiopseffect", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.playermanager.gainiopseffect", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.playermanager.gainiopseffect", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
