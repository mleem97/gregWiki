---
title: NotAllowedToSaveOverlayOff
description: Documentation for greg.UI.NotAllowedToSaveOverlayOff
path: /api/hooks/ui/notallowedtosaveoverlayoff
---

# NotAllowedToSaveOverlayOff

> **Hook ID:** `greg.UI.NotAllowedToSaveOverlayOff`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.NotAllowedToSaveOverlayOff

## Native Signature
```csharp
Il2Cpp.PauseMenu::NotAllowedToSaveOverlayOff()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NotAllowedToSaveOverlayOff` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.NotAllowedToSaveOverlayOff", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.NotAllowedToSaveOverlayOff");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.NotAllowedToSaveOverlayOff", function(payload)
    greg.log("Hook greg.UI.NotAllowedToSaveOverlayOff received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.NotAllowedToSaveOverlayOff fired")

greg.on("greg.UI.NotAllowedToSaveOverlayOff", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.NotAllowedToSaveOverlayOff", (payload) => {
    console.log("Hook greg.UI.NotAllowedToSaveOverlayOff triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.NotAllowedToSaveOverlayOff".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.NotAllowedToSaveOverlayOff", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.NotAllowedToSaveOverlayOff fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
