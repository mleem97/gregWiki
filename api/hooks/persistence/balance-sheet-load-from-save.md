---
title: BalanceSheet.LoadFromSave
description: Hook event for BalanceSheet.LoadFromSave
path: /api/hooks/persistence/balance-sheet-load-from-save
---

# BalanceSheet.LoadFromSave

> **Hook ID:** `greg.persistence.balancesheet.loadfromsave`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `BalanceSheet.LoadFromSave()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadFromSave()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LoadFromSave` events in `BalanceSheet`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.balancesheet.loadfromsave", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.balancesheet.loadfromsave", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.balancesheet.loadfromsave")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.balancesheet.loadfromsave", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.balancesheet.loadfromsave", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.balancesheet.loadfromsave", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
