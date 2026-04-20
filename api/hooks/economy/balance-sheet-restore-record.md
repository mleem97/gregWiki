---
title: BalanceSheet.RestoreRecord
description: Hook event for BalanceSheet.RestoreRecord
path: /api/hooks/economy/balance-sheet-restore-record
---

# BalanceSheet.RestoreRecord

> **Hook ID:** `greg.economy.balancesheet.restorerecord`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.RestoreRecord()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
CustomerRecord RestoreRecord(CustomerRecordSaveData recData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `recData` | `CustomerRecordSaveData` | ... |


## Using this Hook

::: tip
Use this hook to react to `RestoreRecord` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheet.restorerecord", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheet.restorerecord", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheet.restorerecord")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheet.restorerecord", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheet.restorerecord", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheet.restorerecord", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `CustomerRecord`
- **Safe to block?**: Yes
