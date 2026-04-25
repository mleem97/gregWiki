---
title: ConfirmSaved
description: Documentation for greg.UI.ConfirmSaved
path: /api/hooks/ui/confirmsaved
---

# ConfirmSaved

> **Hook ID:** `greg.UI.ConfirmSaved`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.SaveConfirm

## Native Signature
```csharp
Il2Cpp.PauseMenu::SaveConfirm(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConfirmSaved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ConfirmSaved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ConfirmSaved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ConfirmSaved", function(payload)
    greg.log("Hook greg.UI.ConfirmSaved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ConfirmSaved fired")

greg.on("greg.UI.ConfirmSaved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ConfirmSaved", (payload) => {
    console.log("Hook greg.UI.ConfirmSaved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ConfirmSaved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ConfirmSaved", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ConfirmSaved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
