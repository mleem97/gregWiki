---
title: ButtonShowTutorialInPauseMenu
description: Documentation for greg.UI.ButtonShowTutorialInPauseMenu
path: /api/hooks/ui/buttonshowtutorialinpausemenu
---

# ButtonShowTutorialInPauseMenu

> **Hook ID:** `greg.UI.ButtonShowTutorialInPauseMenu`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.ButtonShowTutorialInPauseMenu

## Native Signature
```csharp
Il2Cpp.Tutorials::ButtonShowTutorialInPauseMenu(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonShowTutorialInPauseMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ButtonShowTutorialInPauseMenu", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ButtonShowTutorialInPauseMenu");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ButtonShowTutorialInPauseMenu", function(payload)
    greg.log("Hook greg.UI.ButtonShowTutorialInPauseMenu received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ButtonShowTutorialInPauseMenu fired")

greg.on("greg.UI.ButtonShowTutorialInPauseMenu", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ButtonShowTutorialInPauseMenu", (payload) => {
    console.log("Hook greg.UI.ButtonShowTutorialInPauseMenu triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ButtonShowTutorialInPauseMenu".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ButtonShowTutorialInPauseMenu", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ButtonShowTutorialInPauseMenu fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
