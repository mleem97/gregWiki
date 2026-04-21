---
title: DeleteSaveConfirm
description: Documentation for greg.UI.DeleteSaveConfirm
path: /api/hooks/ui/deletesaveconfirm
---

# DeleteSaveConfirm

> **Hook ID:** `greg.UI.DeleteSaveConfirm`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.DeleteSaveConfirm

## Native Signature
```csharp
Il2Cpp.PauseMenu::DeleteSaveConfirm(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DeleteSaveConfirm` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.DeleteSaveConfirm", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.DeleteSaveConfirm");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.DeleteSaveConfirm", function(payload)
    greg.log("Hook greg.UI.DeleteSaveConfirm received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.DeleteSaveConfirm fired")

greg.on("greg.UI.DeleteSaveConfirm", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.DeleteSaveConfirm", (payload) => {
    console.log("Hook greg.UI.DeleteSaveConfirm triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.DeleteSaveConfirm".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.DeleteSaveConfirm", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.DeleteSaveConfirm fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
