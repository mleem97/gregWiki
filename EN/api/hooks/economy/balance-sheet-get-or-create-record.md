---
title: BalanceSheet.GetOrCreateRecord
description: Hook event for BalanceSheet.GetOrCreateRecord
path: /api/hooks/economy/balance-sheet-get-or-create-record
---

# BalanceSheet.GetOrCreateRecord

> **Hook ID:** `greg.economy.balancesheet.getorcreaterecord`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.GetOrCreateRecord()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
CustomerRecord GetOrCreateRecord(CustomerItem item)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `item` | `CustomerItem` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetOrCreateRecord` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheet.getorcreaterecord", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheet.getorcreaterecord", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheet.getorcreaterecord")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheet.getorcreaterecord", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheet.getorcreaterecord", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheet.getorcreaterecord", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `CustomerRecord`
- **Safe to block?**: Yes
