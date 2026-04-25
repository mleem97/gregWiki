---
title: MainGameManager.CreateFallbackCustomer
description: Hook event for MainGameManager.CreateFallbackCustomer
path: /api/hooks/economy/main-game-manager-create-fallback-customer
---

# MainGameManager.CreateFallbackCustomer

> **Hook ID:** `greg.economy.maingamemanager.createfallbackcustomer`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.CreateFallbackCustomer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
CustomerItem CreateFallbackCustomer(CustomerItem original, Int32 customerBaseID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `original` | `CustomerItem` | ... |
| `customerBaseID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateFallbackCustomer` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.createfallbackcustomer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.createfallbackcustomer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.createfallbackcustomer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.createfallbackcustomer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.createfallbackcustomer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.createfallbackcustomer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `CustomerItem`
- **Safe to block?**: Yes
