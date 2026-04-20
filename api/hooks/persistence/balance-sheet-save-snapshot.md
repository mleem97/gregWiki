---
title: BalanceSheet.SaveSnapshot
description: Hook event for BalanceSheet.SaveSnapshot
path: /api/hooks/persistence/balance-sheet-save-snapshot
---

# BalanceSheet.SaveSnapshot

> **Hook ID:** `greg.persistence.balancesheet.savesnapshot`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.SaveSnapshot()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SaveSnapshot(Int32 month, DateTime snapshotTime)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `month` | `Int32` | ... |
| `snapshotTime` | `DateTime` | ... |


## Using this Hook

::: tip
Use this hook to react to `SaveSnapshot` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.balancesheet.savesnapshot", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.balancesheet.savesnapshot", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.balancesheet.savesnapshot")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.balancesheet.savesnapshot", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.balancesheet.savesnapshot", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.balancesheet.savesnapshot", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
