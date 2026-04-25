---
title: BalanceSheet.AddTotalRow
description: Hook event for BalanceSheet.AddTotalRow
path: /api/hooks/economy/balance-sheet-add-total-row
---

# BalanceSheet.AddTotalRow

> **Hook ID:** `greg.economy.balancesheet.addtotalrow`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.AddTotalRow()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddTotalRow(Single revenue, Single penalties, Single total)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `revenue` | `Single` | ... |
| `penalties` | `Single` | ... |
| `total` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddTotalRow` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheet.addtotalrow", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheet.addtotalrow", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheet.addtotalrow")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheet.addtotalrow", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheet.addtotalrow", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheet.addtotalrow", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
