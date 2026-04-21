---
title: WithOverlayLoaded
description: Documentation for greg.UI.WithOverlayLoaded
path: /api/hooks/ui/withoverlayloaded
---

# WithOverlayLoaded

> **Hook ID:** `greg.UI.WithOverlayLoaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.LoadWithOverlay

## Native Signature
```csharp
Il2Cpp.PauseMenu::LoadWithOverlay(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `WithOverlayLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.WithOverlayLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.WithOverlayLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.WithOverlayLoaded", function(payload)
    greg.log("Hook greg.UI.WithOverlayLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.WithOverlayLoaded fired")

greg.on("greg.UI.WithOverlayLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.WithOverlayLoaded", (payload) => {
    console.log("Hook greg.UI.WithOverlayLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.WithOverlayLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.WithOverlayLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.WithOverlayLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
