---
title: StaticUIElements.CalculateRates
description: Hook event for StaticUIElements.CalculateRates
path: /api/hooks/visualui/static-ui-elements-calculate-rates
---

# StaticUIElements.CalculateRates

> **Hook ID:** `greg.visualui.staticuielements.calculaterates`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.CalculateRates()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CalculateRates(Single& moneyPerSec, Single& xpPerSec, Single& expensesPerSec)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `moneyPerSec` | `Single&` | ... |
| `xpPerSec` | `Single&` | ... |
| `expensesPerSec` | `Single&` | ... |


## Using this Hook

::: tip
Use this hook to react to `CalculateRates` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.calculaterates", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.calculaterates", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.calculaterates")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.calculaterates", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.calculaterates", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.calculaterates", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
