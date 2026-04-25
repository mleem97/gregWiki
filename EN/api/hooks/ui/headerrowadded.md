---
title: HeaderRowAdded
description: Documentation for greg.UI.HeaderRowAdded
path: /api/hooks/ui/headerrowadded
---

# HeaderRowAdded

> **Hook ID:** `greg.UI.HeaderRowAdded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.AddHeaderRow

## Native Signature
```csharp
Il2Cpp.BalanceSheet::AddHeaderRow()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HeaderRowAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.HeaderRowAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.HeaderRowAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.HeaderRowAdded", function(payload)
    greg.log("Hook greg.UI.HeaderRowAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.HeaderRowAdded fired")

greg.on("greg.UI.HeaderRowAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.HeaderRowAdded", (payload) => {
    console.log("Hook greg.UI.HeaderRowAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.HeaderRowAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.HeaderRowAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.HeaderRowAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
