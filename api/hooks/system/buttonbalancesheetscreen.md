---
title: ButtonBalanceSheetScreen
description: Documentation for greg.SYSTEM.ButtonBalanceSheetScreen
path: /api/hooks/system/buttonbalancesheetscreen
---

# ButtonBalanceSheetScreen

> **Hook ID:** `greg.SYSTEM.ButtonBalanceSheetScreen`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonBalanceSheetScreen

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonBalanceSheetScreen()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonBalanceSheetScreen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonBalanceSheetScreen", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonBalanceSheetScreen");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonBalanceSheetScreen", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonBalanceSheetScreen received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonBalanceSheetScreen fired")

greg.on("greg.SYSTEM.ButtonBalanceSheetScreen", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonBalanceSheetScreen", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonBalanceSheetScreen triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonBalanceSheetScreen".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonBalanceSheetScreen", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonBalanceSheetScreen fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
