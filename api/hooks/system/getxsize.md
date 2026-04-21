---
title: getXSize
description: Documentation for greg.SYSTEM.getXSize
path: /api/hooks/system/getxsize
---

# getXSize

> **Hook ID:** `greg.SYSTEM.getXSize`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.getXSize

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::getXSize()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `getXSize` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.getXSize", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.getXSize");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.getXSize", function(payload)
    greg.log("Hook greg.SYSTEM.getXSize received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.getXSize fired")

greg.on("greg.SYSTEM.getXSize", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.getXSize", (payload) => {
    console.log("Hook greg.SYSTEM.getXSize triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.getXSize".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.getXSize", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.getXSize fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
