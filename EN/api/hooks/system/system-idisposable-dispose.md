---
title: System_IDisposable_Dispose
description: Documentation for greg.SYSTEM.System_IDisposable_Dispose
path: /api/hooks/system/system-idisposable-dispose
---

# System_IDisposable_Dispose

> **Hook ID:** `greg.SYSTEM.System_IDisposable_Dispose`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/_OnFinishSubmit_d__25.System_IDisposable_Dispose

## Native Signature
```csharp
Il2Cpp._OnFinishSubmit_d__25::System_IDisposable_Dispose()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `System_IDisposable_Dispose` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.System_IDisposable_Dispose", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.System_IDisposable_Dispose");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.System_IDisposable_Dispose", function(payload)
    greg.log("Hook greg.SYSTEM.System_IDisposable_Dispose received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.System_IDisposable_Dispose fired")

greg.on("greg.SYSTEM.System_IDisposable_Dispose", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.System_IDisposable_Dispose", (payload) => {
    console.log("Hook greg.SYSTEM.System_IDisposable_Dispose triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.System_IDisposable_Dispose".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.System_IDisposable_Dispose", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.System_IDisposable_Dispose fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
