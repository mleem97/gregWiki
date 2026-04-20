---
title: CustomerBase.GetVlanIdsPerApp
description: Hook event for CustomerBase.GetVlanIdsPerApp
path: /api/hooks/economy/customer-base-get-vlan-ids-per-app
---

# CustomerBase.GetVlanIdsPerApp

> **Hook ID:** `greg.economy.customerbase.getvlanidsperapp`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.GetVlanIdsPerApp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Dictionary`2 GetVlanIdsPerApp()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetVlanIdsPerApp` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.getvlanidsperapp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.getvlanidsperapp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.getvlanidsperapp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.getvlanidsperapp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.getvlanidsperapp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.getvlanidsperapp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Dictionary`2`
- **Safe to block?**: Yes
