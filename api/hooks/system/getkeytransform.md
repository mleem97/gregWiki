---
title: GetKeyTransform
description: Documentation for greg.SYSTEM.GetKeyTransform
path: /api/hooks/system/getkeytransform
---

# GetKeyTransform

> **Hook ID:** `greg.SYSTEM.GetKeyTransform`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.GetKeyTransform

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::GetKeyTransform()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetKeyTransform` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetKeyTransform", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetKeyTransform");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetKeyTransform", function(payload)
    greg.log("Hook greg.SYSTEM.GetKeyTransform received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetKeyTransform fired")

greg.on("greg.SYSTEM.GetKeyTransform", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetKeyTransform", (payload) => {
    console.log("Hook greg.SYSTEM.GetKeyTransform triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetKeyTransform".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetKeyTransform", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetKeyTransform fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
