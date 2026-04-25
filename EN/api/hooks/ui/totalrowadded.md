---
title: TotalRowAdded
description: Documentation for greg.UI.TotalRowAdded
path: /api/hooks/ui/totalrowadded
---

# TotalRowAdded

> **Hook ID:** `greg.UI.TotalRowAdded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.AddTotalRow

## Native Signature
```csharp
Il2Cpp.BalanceSheet::AddTotalRow(float, float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TotalRowAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.TotalRowAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.TotalRowAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.TotalRowAdded", function(payload)
    greg.log("Hook greg.UI.TotalRowAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.TotalRowAdded fired")

greg.on("greg.UI.TotalRowAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.TotalRowAdded", (payload) => {
    console.log("Hook greg.UI.TotalRowAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.TotalRowAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.TotalRowAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.TotalRowAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
