---
title: BalanceSheet.CountFailingApps
description: Hook event for BalanceSheet.CountFailingApps
path: /api/hooks/economy/balance-sheet-count-failing-apps
---

# BalanceSheet.CountFailingApps

> **Hook ID:** `greg.economy.balancesheet.countfailingapps`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.CountFailingApps()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 CountFailingApps(CustomerBase cb)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cb` | `CustomerBase` | ... |


## Using this Hook

::: tip
Use this hook to react to `CountFailingApps` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheet.countfailingapps", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheet.countfailingapps", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheet.countfailingapps")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheet.countfailingapps", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheet.countfailingapps", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheet.countfailingapps", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
