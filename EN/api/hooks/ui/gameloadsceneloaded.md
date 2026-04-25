---
title: GameLoadSceneLoaded
description: Documentation for greg.UI.GameLoadSceneLoaded
path: /api/hooks/ui/gameloadsceneloaded
---

# GameLoadSceneLoaded

> **Hook ID:** `greg.UI.GameLoadSceneLoaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LoadingScreen.LoadGameLoadScene

## Native Signature
```csharp
Il2Cpp.LoadingScreen::LoadGameLoadScene(Il2CppStructArray<int>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GameLoadSceneLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.GameLoadSceneLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.GameLoadSceneLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.GameLoadSceneLoaded", function(payload)
    greg.log("Hook greg.UI.GameLoadSceneLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.GameLoadSceneLoaded fired")

greg.on("greg.UI.GameLoadSceneLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.GameLoadSceneLoaded", (payload) => {
    console.log("Hook greg.UI.GameLoadSceneLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.GameLoadSceneLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.GameLoadSceneLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.GameLoadSceneLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
