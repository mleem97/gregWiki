---
title: SalaryRowAdded
description: Documentation for greg.UI.SalaryRowAdded
path: /api/hooks/ui/salaryrowadded
---

# SalaryRowAdded

> **Hook ID:** `greg.UI.SalaryRowAdded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.AddSalaryRow

## Native Signature
```csharp
Il2Cpp.BalanceSheet::AddSalaryRow(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SalaryRowAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.SalaryRowAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.SalaryRowAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.SalaryRowAdded", function(payload)
    greg.log("Hook greg.UI.SalaryRowAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.SalaryRowAdded fired")

greg.on("greg.UI.SalaryRowAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.SalaryRowAdded", (payload) => {
    console.log("Hook greg.UI.SalaryRowAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.SalaryRowAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.SalaryRowAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.SalaryRowAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
