---
title: ExitGame
description: Documentation for greg.UI.ExitGame
path: /api/hooks/ui/exitgame
---

# ExitGame

> **Hook ID:** `greg.UI.ExitGame`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.ExitGame

## Native Signature
```csharp
Il2Cpp.PauseMenu::ExitGame()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ExitGame` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ExitGame", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ExitGame");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ExitGame", function(payload)
    greg.log("Hook greg.UI.ExitGame received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ExitGame fired")

greg.on("greg.UI.ExitGame", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ExitGame", (payload) => {
    console.log("Hook greg.UI.ExitGame triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ExitGame".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ExitGame", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ExitGame fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
