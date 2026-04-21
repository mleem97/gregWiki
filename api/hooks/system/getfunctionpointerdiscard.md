---
title: GetFunctionPointerDiscard
description: Documentation for greg.SYSTEM.GetFunctionPointerDiscard
path: /api/hooks/system/getfunctionpointerdiscard
---

# GetFunctionPointerDiscard

> **Hook ID:** `greg.SYSTEM.GetFunctionPointerDiscard`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MulticastDelegateNInternalSealedVoInA_InVoObseA_stBe1.GetFunctionPointerDiscard

## Native Signature
```csharp
Il2Cpp.MulticastDelegateNInternalSealedVoInA_InVoObseA_stBe1::GetFunctionPointerDiscard(System.IntPtr)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetFunctionPointerDiscard` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetFunctionPointerDiscard", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetFunctionPointerDiscard");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetFunctionPointerDiscard", function(payload)
    greg.log("Hook greg.SYSTEM.GetFunctionPointerDiscard received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetFunctionPointerDiscard fired")

greg.on("greg.SYSTEM.GetFunctionPointerDiscard", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetFunctionPointerDiscard", (payload) => {
    console.log("Hook greg.SYSTEM.GetFunctionPointerDiscard triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetFunctionPointerDiscard".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetFunctionPointerDiscard", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetFunctionPointerDiscard fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
