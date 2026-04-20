---
title: ComputerShop._Awake_b__36_0
description: Hook event for ComputerShop._Awake_b__36_0
path: /api/hooks/economy/computer-shop-_-awake_b__36_0
---

# ComputerShop._Awake_b__36_0

> **Hook ID:** `greg.economy.computershop._awake_b__36_0`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop._Awake_b__36_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _Awake_b__36_0(CallbackContext ctx)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ctx` | `CallbackContext` | ... |


## Using this Hook

::: tip
Use this hook to react to `_Awake_b__36_0` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.computershop._awake_b__36_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.computershop._awake_b__36_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.computershop._awake_b__36_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.computershop._awake_b__36_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.computershop._awake_b__36_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.computershop._awake_b__36_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
