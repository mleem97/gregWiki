---
title: OnCloseMenu
description: Documentation for greg.SYSTEM.OnCloseMenu
path: /api/hooks/system/onclosemenu
---

# OnCloseMenu

> **Hook ID:** `greg.SYSTEM.OnCloseMenu`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnCloseMenu

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnCloseMenu(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCloseMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCloseMenu", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCloseMenu");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCloseMenu", function(payload)
    greg.log("Hook greg.SYSTEM.OnCloseMenu received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCloseMenu fired")

greg.on("greg.SYSTEM.OnCloseMenu", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCloseMenu", (payload) => {
    console.log("Hook greg.SYSTEM.OnCloseMenu triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCloseMenu".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCloseMenu", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCloseMenu fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
