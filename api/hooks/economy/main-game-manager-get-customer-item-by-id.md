---
title: MainGameManager.GetCustomerItemByID
description: Hook event for MainGameManager.GetCustomerItemByID
path: /api/hooks/economy/main-game-manager-get-customer-item-by-id
---

# MainGameManager.GetCustomerItemByID

> **Hook ID:** `greg.economy.maingamemanager.getcustomeritembyid`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetCustomerItemByID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
CustomerItem GetCustomerItemByID(Int32 customerID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCustomerItemByID` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.getcustomeritembyid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.getcustomeritembyid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.getcustomeritembyid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.getcustomeritembyid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.getcustomeritembyid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.getcustomeritembyid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `CustomerItem`
- **Safe to block?**: Yes
