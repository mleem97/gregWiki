---
title: SaveOnButtonClickLoaded
description: Documentation for greg.UI.SaveOnButtonClickLoaded
path: /api/hooks/ui/saveonbuttonclickloaded
---

# SaveOnButtonClickLoaded

> **Hook ID:** `greg.UI.SaveOnButtonClickLoaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.LoadSaveOnButtonClick

## Native Signature
```csharp
Il2Cpp.PauseMenu::LoadSaveOnButtonClick(TextMeshProUGUI)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SaveOnButtonClickLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.SaveOnButtonClickLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.SaveOnButtonClickLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.SaveOnButtonClickLoaded", function(payload)
    greg.log("Hook greg.UI.SaveOnButtonClickLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.SaveOnButtonClickLoaded fired")

greg.on("greg.UI.SaveOnButtonClickLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.SaveOnButtonClickLoaded", (payload) => {
    console.log("Hook greg.UI.SaveOnButtonClickLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.SaveOnButtonClickLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.SaveOnButtonClickLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.SaveOnButtonClickLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
