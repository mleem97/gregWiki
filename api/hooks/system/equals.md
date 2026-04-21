---
title: Equals
description: Documentation for greg.SYSTEM.Equals
path: /api/hooks/system/equals
---

# Equals

> **Hook ID:** `greg.SYSTEM.Equals`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Unity/AssemblyTypeRegistry.Equals

## Native Signature
```csharp
Il2Cpp.AssemblyTypeRegistry::Equals(Il2CppSystem.Object, void*, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Equals` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Equals", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Equals");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Equals", function(payload)
    greg.log("Hook greg.SYSTEM.Equals received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Equals fired")

greg.on("greg.SYSTEM.Equals", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Equals", (payload) => {
    console.log("Hook greg.SYSTEM.Equals triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Equals".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Equals", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Equals fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
