---
title: BalanceSheet.AddRow
description: Hook event for BalanceSheet.AddRow
path: /api/hooks/economy/balance-sheet-add-row
---

# BalanceSheet.AddRow

> **Hook ID:** `greg.economy.balancesheet.addrow`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.AddRow()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddRow(String name, Single revenue, Single penalties, Single total, Sprite logo)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `name` | `String` | ... |
| `revenue` | `Single` | ... |
| `penalties` | `Single` | ... |
| `total` | `Single` | ... |
| `logo` | `Sprite` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddRow` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheet.addrow", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheet.addrow", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheet.addrow")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheet.addrow", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheet.addrow", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheet.addrow", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
