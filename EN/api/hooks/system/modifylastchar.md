---
title: ModifyLastChar
description: Documentation for greg.SYSTEM.ModifyLastChar
path: /api/hooks/system/modifylastchar
---

# ModifyLastChar

> **Hook ID:** `greg.SYSTEM.ModifyLastChar`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Receiver.ModifyLastChar

## Native Signature
```csharp
Il2Cpp.OSK_Receiver::ModifyLastChar(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ModifyLastChar` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ModifyLastChar", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ModifyLastChar");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ModifyLastChar", function(payload)
    greg.log("Hook greg.SYSTEM.ModifyLastChar received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ModifyLastChar fired")

greg.on("greg.SYSTEM.ModifyLastChar", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ModifyLastChar", (payload) => {
    console.log("Hook greg.SYSTEM.ModifyLastChar triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ModifyLastChar".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ModifyLastChar", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ModifyLastChar fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
