---
title: Method_Internal_Void_PDM_0
description: Documentation for greg.SYSTEM.Method_Internal_Void_PDM_0
path: /api/hooks/system/method-internal-void-pdm-0
---

# Method_Internal_Void_PDM_0

> **Hook ID:** `greg.SYSTEM.Method_Internal_Void_PDM_0`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/__c__DisplayClass33_0.Method_Internal_Void_PDM_0

## Native Signature
```csharp
Il2Cpp.__c__DisplayClass33_0::Method_Internal_Void_PDM_0()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Method_Internal_Void_PDM_0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Method_Internal_Void_PDM_0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Method_Internal_Void_PDM_0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Method_Internal_Void_PDM_0", function(payload)
    greg.log("Hook greg.SYSTEM.Method_Internal_Void_PDM_0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Method_Internal_Void_PDM_0 fired")

greg.on("greg.SYSTEM.Method_Internal_Void_PDM_0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Method_Internal_Void_PDM_0", (payload) => {
    console.log("Hook greg.SYSTEM.Method_Internal_Void_PDM_0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Method_Internal_Void_PDM_0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Method_Internal_Void_PDM_0", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Method_Internal_Void_PDM_0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
