---
title: FullScreenSet
description: Documentation for greg.UI.FullScreenSet
path: /api/hooks/ui/fullscreenset
---

# FullScreenSet

> **Hook ID:** `greg.UI.FullScreenSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetFullScreen

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetFullScreen(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FullScreenSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.FullScreenSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.FullScreenSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.FullScreenSet", function(payload)
    greg.log("Hook greg.UI.FullScreenSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.FullScreenSet fired")

greg.on("greg.UI.FullScreenSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.FullScreenSet", (payload) => {
    console.log("Hook greg.UI.FullScreenSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.FullScreenSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.FullScreenSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.FullScreenSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
