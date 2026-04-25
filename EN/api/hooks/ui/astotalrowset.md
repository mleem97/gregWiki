---
title: AsTotalRowSet
description: Documentation for greg.UI.AsTotalRowSet
path: /api/hooks/ui/astotalrowset
---

# AsTotalRowSet

> **Hook ID:** `greg.UI.AsTotalRowSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheetRow.SetAsTotalRow

## Native Signature
```csharp
Il2Cpp.BalanceSheetRow::SetAsTotalRow(float, float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AsTotalRowSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AsTotalRowSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AsTotalRowSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AsTotalRowSet", function(payload)
    greg.log("Hook greg.UI.AsTotalRowSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AsTotalRowSet fired")

greg.on("greg.UI.AsTotalRowSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AsTotalRowSet", (payload) => {
    console.log("Hook greg.UI.AsTotalRowSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AsTotalRowSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AsTotalRowSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AsTotalRowSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
