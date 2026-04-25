---
title: MainMenu
description: Documentation for greg.UI.MainMenu
path: /api/hooks/ui/mainmenu
---

# MainMenu

> **Hook ID:** `greg.UI.MainMenu`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.MainMenu

## Native Signature
```csharp
Il2Cpp.PauseMenu::MainMenu()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MainMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.MainMenu", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.MainMenu");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.MainMenu", function(payload)
    greg.log("Hook greg.UI.MainMenu received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.MainMenu fired")

greg.on("greg.UI.MainMenu", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.MainMenu", (payload) => {
    console.log("Hook greg.UI.MainMenu triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.MainMenu".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.MainMenu", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.MainMenu fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
