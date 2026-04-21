---
title: StopVideoInPauseMenu
description: Documentation for greg.UI.StopVideoInPauseMenu
path: /api/hooks/ui/stopvideoinpausemenu
---

# StopVideoInPauseMenu

> **Hook ID:** `greg.UI.StopVideoInPauseMenu`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.StopVideoInPauseMenu

## Native Signature
```csharp
Il2Cpp.Tutorials::StopVideoInPauseMenu()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StopVideoInPauseMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.StopVideoInPauseMenu", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.StopVideoInPauseMenu");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.StopVideoInPauseMenu", function(payload)
    greg.log("Hook greg.UI.StopVideoInPauseMenu received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.StopVideoInPauseMenu fired")

greg.on("greg.UI.StopVideoInPauseMenu", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.StopVideoInPauseMenu", (payload) => {
    console.log("Hook greg.UI.StopVideoInPauseMenu triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.StopVideoInPauseMenu".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.StopVideoInPauseMenu", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.StopVideoInPauseMenu fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
