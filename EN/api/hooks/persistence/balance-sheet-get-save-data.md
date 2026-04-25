---
title: BalanceSheet.GetSaveData
description: Hook event for BalanceSheet.GetSaveData
path: /api/hooks/persistence/balance-sheet-get-save-data
---

# BalanceSheet.GetSaveData

> **Hook ID:** `greg.persistence.balancesheet.getsavedata`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.GetSaveData()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
BalanceSheetSaveData GetSaveData()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetSaveData` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.balancesheet.getsavedata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.balancesheet.getsavedata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.balancesheet.getsavedata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.balancesheet.getsavedata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.balancesheet.getsavedata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.balancesheet.getsavedata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `BalanceSheetSaveData`
- **Safe to block?**: Yes
