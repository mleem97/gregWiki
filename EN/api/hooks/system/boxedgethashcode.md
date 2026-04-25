---
title: BoxedGetHashCode
description: Documentation for greg.SYSTEM.BoxedGetHashCode
path: /api/hooks/system/boxedgethashcode
---

# BoxedGetHashCode

> **Hook ID:** `greg.SYSTEM.BoxedGetHashCode`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Unity/AssemblyTypeRegistry.BoxedGetHashCode

## Native Signature
```csharp
Il2Cpp.AssemblyTypeRegistry::BoxedGetHashCode(Il2CppSystem.Object, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BoxedGetHashCode` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BoxedGetHashCode", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BoxedGetHashCode");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BoxedGetHashCode", function(payload)
    greg.log("Hook greg.SYSTEM.BoxedGetHashCode received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BoxedGetHashCode fired")

greg.on("greg.SYSTEM.BoxedGetHashCode", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BoxedGetHashCode", (payload) => {
    console.log("Hook greg.SYSTEM.BoxedGetHashCode triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BoxedGetHashCode".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BoxedGetHashCode", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BoxedGetHashCode fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
