---
title: BackgroundColorSet
description: Documentation for greg.UI.BackgroundColorSet
path: /api/hooks/ui/backgroundcolorset
---

# BackgroundColorSet

> **Hook ID:** `greg.UI.BackgroundColorSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheetRow.SetBackgroundColor

## Native Signature
```csharp
Il2Cpp.BalanceSheetRow::SetBackgroundColor(Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BackgroundColorSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.BackgroundColorSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.BackgroundColorSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.BackgroundColorSet", function(payload)
    greg.log("Hook greg.UI.BackgroundColorSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.BackgroundColorSet fired")

greg.on("greg.UI.BackgroundColorSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.BackgroundColorSet", (payload) => {
    console.log("Hook greg.UI.BackgroundColorSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.BackgroundColorSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.BackgroundColorSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.BackgroundColorSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
