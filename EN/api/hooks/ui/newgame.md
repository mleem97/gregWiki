---
title: NewGame
description: Documentation for greg.UI.NewGame
path: /api/hooks/ui/newgame
---

# NewGame

> **Hook ID:** `greg.UI.NewGame`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainMenu.NewGame

## Native Signature
```csharp
Il2Cpp.MainMenu::NewGame()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NewGame` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.NewGame", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.NewGame");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.NewGame", function(payload)
    greg.log("Hook greg.UI.NewGame received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.NewGame fired")

greg.on("greg.UI.NewGame", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.NewGame", (payload) => {
    console.log("Hook greg.UI.NewGame triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.NewGame".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.NewGame", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.NewGame fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
