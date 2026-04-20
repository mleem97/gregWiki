---
title: CustomerBase.GetSubnetsPerApp
description: Hook event for CustomerBase.GetSubnetsPerApp
path: /api/hooks/economy/customer-base-get-subnets-per-app
---

# CustomerBase.GetSubnetsPerApp

> **Hook ID:** `greg.economy.customerbase.getsubnetsperapp`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.GetSubnetsPerApp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Dictionary`2 GetSubnetsPerApp()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetSubnetsPerApp` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.getsubnetsperapp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.getsubnetsperapp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.getsubnetsperapp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.getsubnetsperapp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.getsubnetsperapp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.getsubnetsperapp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Dictionary`2`
- **Safe to block?**: Yes
