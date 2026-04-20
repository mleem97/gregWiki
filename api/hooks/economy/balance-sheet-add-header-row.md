---
title: BalanceSheet.AddHeaderRow
description: Hook event for BalanceSheet.AddHeaderRow
path: /api/hooks/economy/balance-sheet-add-header-row
---

# BalanceSheet.AddHeaderRow

> **Hook ID:** `greg.economy.balancesheet.addheaderrow`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.AddHeaderRow()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddHeaderRow()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AddHeaderRow` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheet.addheaderrow", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheet.addheaderrow", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheet.addheaderrow")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheet.addheaderrow", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheet.addheaderrow", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheet.addheaderrow", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
