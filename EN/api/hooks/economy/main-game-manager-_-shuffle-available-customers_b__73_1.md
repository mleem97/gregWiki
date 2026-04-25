---
title: MainGameManager._ShuffleAvailableCustomers_b__73_1
description: Hook event for MainGameManager._ShuffleAvailableCustomers_b__73_1
path: /api/hooks/economy/main-game-manager-_-shuffle-available-customers_b__73_1
---

# MainGameManager._ShuffleAvailableCustomers_b__73_1

> **Hook ID:** `greg.economy.maingamemanager._shuffleavailablecustomers_b__73_1`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager._ShuffleAvailableCustomers_b__73_1()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 _ShuffleAvailableCustomers_b__73_1(Int32 index)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `index` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `_ShuffleAvailableCustomers_b__73_1` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager._shuffleavailablecustomers_b__73_1", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager._shuffleavailablecustomers_b__73_1", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager._shuffleavailablecustomers_b__73_1")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager._shuffleavailablecustomers_b__73_1", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager._shuffleavailablecustomers_b__73_1", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager._shuffleavailablecustomers_b__73_1", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
