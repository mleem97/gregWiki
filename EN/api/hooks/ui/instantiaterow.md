---
title: InstantiateRow
description: Documentation for greg.UI.InstantiateRow
path: /api/hooks/ui/instantiaterow
---

# InstantiateRow

> **Hook ID:** `greg.UI.InstantiateRow`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.InstantiateRow

## Native Signature
```csharp
Il2Cpp.BalanceSheet::InstantiateRow()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InstantiateRow` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.InstantiateRow", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.InstantiateRow");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.InstantiateRow", function(payload)
    greg.log("Hook greg.UI.InstantiateRow received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.InstantiateRow fired")

greg.on("greg.UI.InstantiateRow", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.InstantiateRow", (payload) => {
    console.log("Hook greg.UI.InstantiateRow triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.InstantiateRow".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.InstantiateRow", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.InstantiateRow fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
