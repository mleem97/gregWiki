---
title: CustomerBase.UpdateSpeedOnCustomerBaseApp
description: Hook event for CustomerBase.UpdateSpeedOnCustomerBaseApp
path: /api/hooks/economy/customer-base-update-speed-on-customer-base-app
---

# CustomerBase.UpdateSpeedOnCustomerBaseApp

> **Hook ID:** `greg.economy.customerbase.updatespeedoncustomerbaseapp`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.UpdateSpeedOnCustomerBaseApp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateSpeedOnCustomerBaseApp(Int32 appID, Single speed)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `appID` | `Int32` | ... |
| `speed` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateSpeedOnCustomerBaseApp` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.updatespeedoncustomerbaseapp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.updatespeedoncustomerbaseapp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.updatespeedoncustomerbaseapp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.updatespeedoncustomerbaseapp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.updatespeedoncustomerbaseapp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.updatespeedoncustomerbaseapp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
