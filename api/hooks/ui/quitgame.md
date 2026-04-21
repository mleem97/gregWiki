---
title: QuitGame
description: Documentation for greg.UI.QuitGame
path: /api/hooks/ui/quitgame
---

# QuitGame

> **Hook ID:** `greg.UI.QuitGame`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainMenu.QuitGame

## Native Signature
```csharp
Il2Cpp.MainMenu::QuitGame()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `QuitGame` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.QuitGame", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.QuitGame");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.QuitGame", function(payload)
    greg.log("Hook greg.UI.QuitGame received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.QuitGame fired")

greg.on("greg.UI.QuitGame", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.QuitGame", (payload) => {
    console.log("Hook greg.UI.QuitGame triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.QuitGame".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.QuitGame", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.QuitGame fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
