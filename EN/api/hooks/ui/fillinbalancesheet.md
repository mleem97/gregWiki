---
title: FillInBalanceSheet
description: Documentation for greg.UI.FillInBalanceSheet
path: /api/hooks/ui/fillinbalancesheet
---

# FillInBalanceSheet

> **Hook ID:** `greg.UI.FillInBalanceSheet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.FillInBalanceSheet

## Native Signature
```csharp
Il2Cpp.BalanceSheet::FillInBalanceSheet()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FillInBalanceSheet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.FillInBalanceSheet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.FillInBalanceSheet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.FillInBalanceSheet", function(payload)
    greg.log("Hook greg.UI.FillInBalanceSheet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.FillInBalanceSheet fired")

greg.on("greg.UI.FillInBalanceSheet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.FillInBalanceSheet", (payload) => {
    console.log("Hook greg.UI.FillInBalanceSheet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.FillInBalanceSheet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.FillInBalanceSheet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.FillInBalanceSheet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
