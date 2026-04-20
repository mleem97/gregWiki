---
title: CustomerBase.SetUpApp
description: Hook event for CustomerBase.SetUpApp
path: /api/hooks/economy/customer-base-set-up-app
---

# CustomerBase.SetUpApp

> **Hook ID:** `greg.economy.customerbase.setupapp`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.SetUpApp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetUpApp(Int32 appID, Int32 difficulty, CustomerBaseSaveData saveData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `appID` | `Int32` | ... |
| `difficulty` | `Int32` | ... |
| `saveData` | `CustomerBaseSaveData` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetUpApp` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.setupapp", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.setupapp", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.setupapp")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.setupapp", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.setupapp", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.setupapp", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
