---
title: MainGameManager.GetCustomerLogo
description: Hook event for MainGameManager.GetCustomerLogo
path: /api/hooks/economy/main-game-manager-get-customer-logo
---

# MainGameManager.GetCustomerLogo

> **Hook ID:** `greg.economy.maingamemanager.getcustomerlogo`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetCustomerLogo()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Sprite GetCustomerLogo(Int32 customerID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCustomerLogo` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.getcustomerlogo", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.getcustomerlogo", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.getcustomerlogo")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.getcustomerlogo", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.getcustomerlogo", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.getcustomerlogo", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Sprite`
- **Safe to block?**: Yes
