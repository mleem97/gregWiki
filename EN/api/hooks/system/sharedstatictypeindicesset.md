---
title: SharedStaticTypeIndicesSet
description: Documentation for greg.SYSTEM.SharedStaticTypeIndicesSet
path: /api/hooks/system/sharedstatictypeindicesset
---

# SharedStaticTypeIndicesSet

> **Hook ID:** `greg.SYSTEM.SharedStaticTypeIndicesSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Unity/AssemblyTypeRegistry.SetSharedStaticTypeIndices

## Native Signature
```csharp
Il2Cpp.AssemblyTypeRegistry::SetSharedStaticTypeIndices(int*, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SharedStaticTypeIndicesSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SharedStaticTypeIndicesSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SharedStaticTypeIndicesSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SharedStaticTypeIndicesSet", function(payload)
    greg.log("Hook greg.SYSTEM.SharedStaticTypeIndicesSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SharedStaticTypeIndicesSet fired")

greg.on("greg.SYSTEM.SharedStaticTypeIndicesSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SharedStaticTypeIndicesSet", (payload) => {
    console.log("Hook greg.SYSTEM.SharedStaticTypeIndicesSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SharedStaticTypeIndicesSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SharedStaticTypeIndicesSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SharedStaticTypeIndicesSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
