---
title: FromSaveLoaded
description: Documentation for greg.UI.FromSaveLoaded
path: /api/hooks/ui/fromsaveloaded
---

# FromSaveLoaded

> **Hook ID:** `greg.UI.FromSaveLoaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.LoadFromSave

## Native Signature
```csharp
Il2Cpp.BalanceSheet::LoadFromSave()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FromSaveLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.FromSaveLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.FromSaveLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.FromSaveLoaded", function(payload)
    greg.log("Hook greg.UI.FromSaveLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.FromSaveLoaded fired")

greg.on("greg.UI.FromSaveLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.FromSaveLoaded", (payload) => {
    console.log("Hook greg.UI.FromSaveLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.FromSaveLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.FromSaveLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.FromSaveLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
