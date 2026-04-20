---
title: MainGameManager.ShuffleAvailableSubnets
description: Hook event for MainGameManager.ShuffleAvailableSubnets
path: /api/hooks/character/main-game-manager-shuffle-available-subnets
---

# MainGameManager.ShuffleAvailableSubnets

> **Hook ID:** `greg.character.maingamemanager.shuffleavailablesubnets`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ShuffleAvailableSubnets()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShuffleAvailableSubnets()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ShuffleAvailableSubnets` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.maingamemanager.shuffleavailablesubnets", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.maingamemanager.shuffleavailablesubnets", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.maingamemanager.shuffleavailablesubnets")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.maingamemanager.shuffleavailablesubnets", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.maingamemanager.shuffleavailablesubnets", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.maingamemanager.shuffleavailablesubnets", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
