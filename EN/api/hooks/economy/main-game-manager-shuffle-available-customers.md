---
title: MainGameManager.ShuffleAvailableCustomers
description: Hook event for MainGameManager.ShuffleAvailableCustomers
path: /api/hooks/economy/main-game-manager-shuffle-available-customers
---

# MainGameManager.ShuffleAvailableCustomers

> **Hook ID:** `greg.economy.maingamemanager.shuffleavailablecustomers`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ShuffleAvailableCustomers()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShuffleAvailableCustomers()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ShuffleAvailableCustomers` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.shuffleavailablecustomers", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.shuffleavailablecustomers", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.shuffleavailablecustomers")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.shuffleavailablecustomers", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.shuffleavailablecustomers", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.shuffleavailablecustomers", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
