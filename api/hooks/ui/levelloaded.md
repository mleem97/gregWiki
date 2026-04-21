---
title: LevelLoaded
description: Documentation for greg.UI.LevelLoaded
path: /api/hooks/ui/levelloaded
---

# LevelLoaded

> **Hook ID:** `greg.UI.LevelLoaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LoadingScreen.LoadLevel

## Native Signature
```csharp
Il2Cpp.LoadingScreen::LoadLevel(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LevelLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.LevelLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.LevelLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.LevelLoaded", function(payload)
    greg.log("Hook greg.UI.LevelLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.LevelLoaded fired")

greg.on("greg.UI.LevelLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.LevelLoaded", (payload) => {
    console.log("Hook greg.UI.LevelLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.LevelLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.LevelLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.LevelLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
