---
title: BalanceSheetRow.SetData
description: Hook event for BalanceSheetRow.SetData
path: /api/hooks/economy/balance-sheet-row-set-data
---

# BalanceSheetRow.SetData

> **Hook ID:** `greg.economy.balancesheetrow.setdata`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheetRow.SetData()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetData(String customerName, String revenue, String penalties, String total, Sprite customerLogo)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerName` | `String` | ... |
| `revenue` | `String` | ... |
| `penalties` | `String` | ... |
| `total` | `String` | ... |
| `customerLogo` | `Sprite` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetData` events in `BalanceSheetRow`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheetrow.setdata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheetrow.setdata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheetrow.setdata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheetrow.setdata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheetrow.setdata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheetrow.setdata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
