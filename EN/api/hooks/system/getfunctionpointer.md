---
title: GetFunctionPointer
description: Documentation for greg.SYSTEM.GetFunctionPointer
path: /api/hooks/system/getfunctionpointer
---

# GetFunctionPointer

> **Hook ID:** `greg.SYSTEM.GetFunctionPointer`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MulticastDelegateNInternalSealedVoInA_InVoObseA_stBe1.GetFunctionPointer

## Native Signature
```csharp
Il2Cpp.MulticastDelegateNInternalSealedVoInA_InVoObseA_stBe1::GetFunctionPointer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetFunctionPointer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetFunctionPointer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetFunctionPointer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetFunctionPointer", function(payload)
    greg.log("Hook greg.SYSTEM.GetFunctionPointer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetFunctionPointer fired")

greg.on("greg.SYSTEM.GetFunctionPointer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetFunctionPointer", (payload) => {
    console.log("Hook greg.SYSTEM.GetFunctionPointer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetFunctionPointer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetFunctionPointer", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetFunctionPointer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
