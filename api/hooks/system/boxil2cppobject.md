---
title: BoxIl2CppObject
description: Documentation for greg.SYSTEM.BoxIl2CppObject
path: /api/hooks/system/boxil2cppobject
---

# BoxIl2CppObject

> **Hook ID:** `greg.SYSTEM.BoxIl2CppObject`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Unity/AssemblyTypeRegistry.BoxIl2CppObject

## Native Signature
```csharp
Il2Cpp.AssemblyTypeRegistry::BoxIl2CppObject()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BoxIl2CppObject` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BoxIl2CppObject", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BoxIl2CppObject");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BoxIl2CppObject", function(payload)
    greg.log("Hook greg.SYSTEM.BoxIl2CppObject received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BoxIl2CppObject fired")

greg.on("greg.SYSTEM.BoxIl2CppObject", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BoxIl2CppObject", (payload) => {
    console.log("Hook greg.SYSTEM.BoxIl2CppObject triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BoxIl2CppObject".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BoxIl2CppObject", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BoxIl2CppObject fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
