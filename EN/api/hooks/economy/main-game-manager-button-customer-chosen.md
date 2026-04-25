---
title: MainGameManager.ButtonCustomerChosen
description: Hook event for MainGameManager.ButtonCustomerChosen
path: /api/hooks/economy/main-game-manager-button-customer-chosen
---

# MainGameManager.ButtonCustomerChosen

> **Hook ID:** `greg.economy.maingamemanager.buttoncustomerchosen`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ButtonCustomerChosen()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonCustomerChosen(Int32 _cardID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_cardID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ButtonCustomerChosen` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.buttoncustomerchosen", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.buttoncustomerchosen", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.buttoncustomerchosen")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.buttoncustomerchosen", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.buttoncustomerchosen", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.buttoncustomerchosen", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
