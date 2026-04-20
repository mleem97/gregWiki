---
title: MainGameManager.IsCustomerSuitableForBase
description: Hook event for MainGameManager.IsCustomerSuitableForBase
path: /api/hooks/economy/main-game-manager-is-customer-suitable-for-base
---

# MainGameManager.IsCustomerSuitableForBase

> **Hook ID:** `greg.economy.maingamemanager.iscustomersuitableforbase`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.IsCustomerSuitableForBase()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsCustomerSuitableForBase(CustomerItem customer, Int32 customerBaseID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customer` | `CustomerItem` | ... |
| `customerBaseID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsCustomerSuitableForBase` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.iscustomersuitableforbase", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.iscustomersuitableforbase", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.iscustomersuitableforbase")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.iscustomersuitableforbase", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.iscustomersuitableforbase", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.iscustomersuitableforbase", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
