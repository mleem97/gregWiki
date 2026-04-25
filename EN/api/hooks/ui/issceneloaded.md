---
title: IsSceneLoaded
description: Documentation for greg.UI.IsSceneLoaded
path: /api/hooks/ui/issceneloaded
---

# IsSceneLoaded

> **Hook ID:** `greg.UI.IsSceneLoaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LoadingScreen.IsSceneLoaded

## Native Signature
```csharp
Il2Cpp.LoadingScreen::IsSceneLoaded(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsSceneLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.IsSceneLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.IsSceneLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.IsSceneLoaded", function(payload)
    greg.log("Hook greg.UI.IsSceneLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.IsSceneLoaded fired")

greg.on("greg.UI.IsSceneLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.IsSceneLoaded", (payload) => {
    console.log("Hook greg.UI.IsSceneLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.IsSceneLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.IsSceneLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.IsSceneLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
