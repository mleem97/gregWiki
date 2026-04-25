---
title: ClearRows
description: Documentation for greg.UI.ClearRows
path: /api/hooks/ui/clearrows
---

# ClearRows

> **Hook ID:** `greg.UI.ClearRows`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.ClearRows

## Native Signature
```csharp
Il2Cpp.BalanceSheet::ClearRows()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearRows` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ClearRows", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ClearRows");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ClearRows", function(payload)
    greg.log("Hook greg.UI.ClearRows received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ClearRows fired")

greg.on("greg.UI.ClearRows", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ClearRows", (payload) => {
    console.log("Hook greg.UI.ClearRows triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ClearRows".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ClearRows", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ClearRows fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
