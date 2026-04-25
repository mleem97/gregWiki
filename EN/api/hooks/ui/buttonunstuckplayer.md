---
title: ButtonUnstuckPlayer
description: Documentation for greg.UI.ButtonUnstuckPlayer
path: /api/hooks/ui/buttonunstuckplayer
---

# ButtonUnstuckPlayer

> **Hook ID:** `greg.UI.ButtonUnstuckPlayer`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGameplay.ButtonUnstuckPlayer

## Native Signature
```csharp
Il2Cpp.SettingsGameplay::ButtonUnstuckPlayer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonUnstuckPlayer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ButtonUnstuckPlayer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ButtonUnstuckPlayer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ButtonUnstuckPlayer", function(payload)
    greg.log("Hook greg.UI.ButtonUnstuckPlayer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ButtonUnstuckPlayer fired")

greg.on("greg.UI.ButtonUnstuckPlayer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ButtonUnstuckPlayer", (payload) => {
    console.log("Hook greg.UI.ButtonUnstuckPlayer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ButtonUnstuckPlayer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ButtonUnstuckPlayer", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ButtonUnstuckPlayer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
