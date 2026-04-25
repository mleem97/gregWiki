---
title: GetObject
description: Documentation for greg.SYSTEM.GetObject
path: /api/hooks/system/getobject
---

# GetObject

> **Hook ID:** `greg.SYSTEM.GetObject`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.GetObject

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::GetObject()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetObject` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetObject", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetObject");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetObject", function(payload)
    greg.log("Hook greg.SYSTEM.GetObject received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetObject fired")

greg.on("greg.SYSTEM.GetObject", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetObject", (payload) => {
    console.log("Hook greg.SYSTEM.GetObject triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetObject".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetObject", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetObject fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
