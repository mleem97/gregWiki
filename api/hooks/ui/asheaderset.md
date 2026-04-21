---
title: AsHeaderSet
description: Documentation for greg.UI.AsHeaderSet
path: /api/hooks/ui/asheaderset
---

# AsHeaderSet

> **Hook ID:** `greg.UI.AsHeaderSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheetRow.SetAsHeader

## Native Signature
```csharp
Il2Cpp.BalanceSheetRow::SetAsHeader()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AsHeaderSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AsHeaderSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AsHeaderSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AsHeaderSet", function(payload)
    greg.log("Hook greg.UI.AsHeaderSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AsHeaderSet fired")

greg.on("greg.UI.AsHeaderSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AsHeaderSet", (payload) => {
    console.log("Hook greg.UI.AsHeaderSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AsHeaderSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AsHeaderSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AsHeaderSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
