---
title: DeleteSaveButtonClick
description: Documentation for greg.UI.DeleteSaveButtonClick
path: /api/hooks/ui/deletesavebuttonclick
---

# DeleteSaveButtonClick

> **Hook ID:** `greg.UI.DeleteSaveButtonClick`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.DeleteSaveButtonClick

## Native Signature
```csharp
Il2Cpp.PauseMenu::DeleteSaveButtonClick(TextMeshProUGUI)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DeleteSaveButtonClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.DeleteSaveButtonClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.DeleteSaveButtonClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.DeleteSaveButtonClick", function(payload)
    greg.log("Hook greg.UI.DeleteSaveButtonClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.DeleteSaveButtonClick fired")

greg.on("greg.UI.DeleteSaveButtonClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.DeleteSaveButtonClick", (payload) => {
    console.log("Hook greg.UI.DeleteSaveButtonClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.DeleteSaveButtonClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.DeleteSaveButtonClick", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.DeleteSaveButtonClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
