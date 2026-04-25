---
title: GetSaveData
description: Documentation for greg.UI.GetSaveData
path: /api/hooks/ui/getsavedata
---

# GetSaveData

> **Hook ID:** `greg.UI.GetSaveData`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.GetSaveData

## Native Signature
```csharp
Il2Cpp.BalanceSheet::GetSaveData()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSaveData` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.GetSaveData", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.GetSaveData");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.GetSaveData", function(payload)
    greg.log("Hook greg.UI.GetSaveData received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.GetSaveData fired")

greg.on("greg.UI.GetSaveData", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.GetSaveData", (payload) => {
    console.log("Hook greg.UI.GetSaveData triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.GetSaveData".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.GetSaveData", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.GetSaveData fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
