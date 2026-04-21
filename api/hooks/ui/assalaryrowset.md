---
title: AsSalaryRowSet
description: Documentation for greg.UI.AsSalaryRowSet
path: /api/hooks/ui/assalaryrowset
---

# AsSalaryRowSet

> **Hook ID:** `greg.UI.AsSalaryRowSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheetRow.SetAsSalaryRow

## Native Signature
```csharp
Il2Cpp.BalanceSheetRow::SetAsSalaryRow(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AsSalaryRowSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AsSalaryRowSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AsSalaryRowSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AsSalaryRowSet", function(payload)
    greg.log("Hook greg.UI.AsSalaryRowSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AsSalaryRowSet fired")

greg.on("greg.UI.AsSalaryRowSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AsSalaryRowSet", (payload) => {
    console.log("Hook greg.UI.AsSalaryRowSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AsSalaryRowSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AsSalaryRowSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AsSalaryRowSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
