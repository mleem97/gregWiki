---
title: GetOSKKey
description: Documentation for greg.SYSTEM.GetOSKKey
path: /api/hooks/system/getoskkey
---

# GetOSKKey

> **Hook ID:** `greg.SYSTEM.GetOSKKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.GetOSKKey

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::GetOSKKey(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetOSKKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetOSKKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetOSKKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetOSKKey", function(payload)
    greg.log("Hook greg.SYSTEM.GetOSKKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetOSKKey fired")

greg.on("greg.SYSTEM.GetOSKKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetOSKKey", (payload) => {
    console.log("Hook greg.SYSTEM.GetOSKKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetOSKKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetOSKKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetOSKKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
