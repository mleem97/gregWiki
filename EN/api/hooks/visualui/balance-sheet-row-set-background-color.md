---
title: BalanceSheetRow.SetBackgroundColor
description: Hook event for BalanceSheetRow.SetBackgroundColor
path: /api/hooks/visualui/balance-sheet-row-set-background-color
---

# BalanceSheetRow.SetBackgroundColor

> **Hook ID:** `greg.visualui.balancesheetrow.setbackgroundcolor`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheetRow.SetBackgroundColor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetBackgroundColor(Color color)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `color` | `Color` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetBackgroundColor` events in `BalanceSheetRow`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.balancesheetrow.setbackgroundcolor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.balancesheetrow.setbackgroundcolor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.balancesheetrow.setbackgroundcolor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.balancesheetrow.setbackgroundcolor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.balancesheetrow.setbackgroundcolor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.balancesheetrow.setbackgroundcolor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
