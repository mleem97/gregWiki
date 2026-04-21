---
title: HideMiddleMenu
description: Documentation for greg.UI.HideMiddleMenu
path: /api/hooks/ui/hidemiddlemenu
---

# HideMiddleMenu

> **Hook ID:** `greg.UI.HideMiddleMenu`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainMenu.HideMiddleMenu

## Native Signature
```csharp
Il2Cpp.MainMenu::HideMiddleMenu()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HideMiddleMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.HideMiddleMenu", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.HideMiddleMenu");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.HideMiddleMenu", function(payload)
    greg.log("Hook greg.UI.HideMiddleMenu received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.HideMiddleMenu fired")

greg.on("greg.UI.HideMiddleMenu", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.HideMiddleMenu", (payload) => {
    console.log("Hook greg.UI.HideMiddleMenu triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.HideMiddleMenu".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.HideMiddleMenu", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.HideMiddleMenu fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
