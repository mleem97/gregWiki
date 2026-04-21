---
title: CloseLoadSaveOverlay
description: Documentation for greg.UI.CloseLoadSaveOverlay
path: /api/hooks/ui/closeloadsaveoverlay
---

# CloseLoadSaveOverlay

> **Hook ID:** `greg.UI.CloseLoadSaveOverlay`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.CloseLoadSaveOverlay

## Native Signature
```csharp
Il2Cpp.PauseMenu::CloseLoadSaveOverlay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseLoadSaveOverlay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.CloseLoadSaveOverlay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.CloseLoadSaveOverlay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.CloseLoadSaveOverlay", function(payload)
    greg.log("Hook greg.UI.CloseLoadSaveOverlay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.CloseLoadSaveOverlay fired")

greg.on("greg.UI.CloseLoadSaveOverlay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.CloseLoadSaveOverlay", (payload) => {
    console.log("Hook greg.UI.CloseLoadSaveOverlay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.CloseLoadSaveOverlay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.CloseLoadSaveOverlay", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.CloseLoadSaveOverlay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
