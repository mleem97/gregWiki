---
title: GetGameObject
description: Documentation for greg.SYSTEM.GetGameObject
path: /api/hooks/system/getgameobject
---

# GetGameObject

> **Hook ID:** `greg.SYSTEM.GetGameObject`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.GetGameObject

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::GetGameObject()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetGameObject` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetGameObject", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetGameObject");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetGameObject", function(payload)
    greg.log("Hook greg.SYSTEM.GetGameObject received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetGameObject fired")

greg.on("greg.SYSTEM.GetGameObject", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetGameObject", (payload) => {
    console.log("Hook greg.SYSTEM.GetGameObject triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetGameObject".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetGameObject", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetGameObject fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
