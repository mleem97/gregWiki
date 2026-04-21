---
title: __ThrowCodeGenException
description: Documentation for greg.SYSTEM.__ThrowCodeGenException
path: /api/hooks/system/--throwcodegenexception
---

# __ThrowCodeGenException

> **Hook ID:** `greg.SYSTEM.__ThrowCodeGenException`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UpdatePacketsJob.__ThrowCodeGenException

## Native Signature
```csharp
Il2Cpp.UpdatePacketsJob::__ThrowCodeGenException()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__ThrowCodeGenException` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.__ThrowCodeGenException", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.__ThrowCodeGenException");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.__ThrowCodeGenException", function(payload)
    greg.log("Hook greg.SYSTEM.__ThrowCodeGenException received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.__ThrowCodeGenException fired")

greg.on("greg.SYSTEM.__ThrowCodeGenException", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.__ThrowCodeGenException", (payload) => {
    console.log("Hook greg.SYSTEM.__ThrowCodeGenException triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.__ThrowCodeGenException".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.__ThrowCodeGenException", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.__ThrowCodeGenException fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
