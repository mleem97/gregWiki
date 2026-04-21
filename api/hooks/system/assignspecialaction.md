---
title: AssignSpecialAction
description: Documentation for greg.SYSTEM.AssignSpecialAction
path: /api/hooks/system/assignspecialaction
---

# AssignSpecialAction

> **Hook ID:** `greg.SYSTEM.AssignSpecialAction`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.AssignSpecialAction

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::AssignSpecialAction(Il2CppSystem.Action<string, OSK_Receiver>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AssignSpecialAction` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AssignSpecialAction", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AssignSpecialAction");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AssignSpecialAction", function(payload)
    greg.log("Hook greg.SYSTEM.AssignSpecialAction received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AssignSpecialAction fired")

greg.on("greg.SYSTEM.AssignSpecialAction", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AssignSpecialAction", (payload) => {
    console.log("Hook greg.SYSTEM.AssignSpecialAction triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AssignSpecialAction".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AssignSpecialAction", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AssignSpecialAction fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
