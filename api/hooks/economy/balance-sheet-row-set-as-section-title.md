---
title: BalanceSheetRow.SetAsSectionTitle
description: Hook event for BalanceSheetRow.SetAsSectionTitle
path: /api/hooks/economy/balance-sheet-row-set-as-section-title
---

# BalanceSheetRow.SetAsSectionTitle

> **Hook ID:** `greg.economy.balancesheetrow.setassectiontitle`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheetRow.SetAsSectionTitle()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetAsSectionTitle(String title)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `title` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetAsSectionTitle` events in `BalanceSheetRow`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.balancesheetrow.setassectiontitle", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.balancesheetrow.setassectiontitle", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.balancesheetrow.setassectiontitle")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.balancesheetrow.setassectiontitle", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.balancesheetrow.setassectiontitle", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.balancesheetrow.setassectiontitle", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
