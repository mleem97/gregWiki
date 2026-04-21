---
title: GetCorrectedKey
description: Documentation for greg.SYSTEM.GetCorrectedKey
path: /api/hooks/system/getcorrectedkey
---

# GetCorrectedKey

> **Hook ID:** `greg.SYSTEM.GetCorrectedKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.GetCorrectedKey

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::GetCorrectedKey(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCorrectedKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetCorrectedKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetCorrectedKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetCorrectedKey", function(payload)
    greg.log("Hook greg.SYSTEM.GetCorrectedKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetCorrectedKey fired")

greg.on("greg.SYSTEM.GetCorrectedKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetCorrectedKey", (payload) => {
    console.log("Hook greg.SYSTEM.GetCorrectedKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetCorrectedKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetCorrectedKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetCorrectedKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
