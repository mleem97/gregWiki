---
title: BalanceSheet.GetLatestSnapshot
description: Hook event for BalanceSheet.GetLatestSnapshot
path: /api/hooks/economy/balance-sheet-get-latest-snapshot
---

# BalanceSheet.GetLatestSnapshot

> **Hook ID:** `greg.economy.balancesheet.getlatestsnapshot`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.GetLatestSnapshot()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
MonthlySnapshot GetLatestSnapshot()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetLatestSnapshot` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheet.getlatestsnapshot", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheet.getlatestsnapshot", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheet.getlatestsnapshot")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheet.getlatestsnapshot", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheet.getlatestsnapshot", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheet.getlatestsnapshot", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `MonthlySnapshot`
- **Safe to block?**: Yes
