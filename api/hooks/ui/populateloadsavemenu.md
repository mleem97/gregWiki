---
title: PopulateLoadSaveMenu
description: Documentation for greg.UI.PopulateLoadSaveMenu
path: /api/hooks/ui/populateloadsavemenu
---

# PopulateLoadSaveMenu

> **Hook ID:** `greg.UI.PopulateLoadSaveMenu`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.PopulateLoadSaveMenu

## Native Signature
```csharp
Il2Cpp.PauseMenu::PopulateLoadSaveMenu(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PopulateLoadSaveMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.PopulateLoadSaveMenu", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.PopulateLoadSaveMenu");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.PopulateLoadSaveMenu", function(payload)
    greg.log("Hook greg.UI.PopulateLoadSaveMenu received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.PopulateLoadSaveMenu fired")

greg.on("greg.UI.PopulateLoadSaveMenu", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.PopulateLoadSaveMenu", (payload) => {
    console.log("Hook greg.UI.PopulateLoadSaveMenu triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.PopulateLoadSaveMenu".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.PopulateLoadSaveMenu", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.PopulateLoadSaveMenu fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
