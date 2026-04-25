---
title: OnValidate
description: Documentation for greg.SYSTEM.OnValidate
path: /api/hooks/system/onvalidate
---

# OnValidate

> **Hook ID:** `greg.SYSTEM.OnValidate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeMesh.OnValidate

## Native Signature
```csharp
Il2Cpp.RopeMesh::OnValidate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnValidate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnValidate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnValidate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnValidate", function(payload)
    greg.log("Hook greg.SYSTEM.OnValidate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnValidate fired")

greg.on("greg.SYSTEM.OnValidate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnValidate", (payload) => {
    console.log("Hook greg.SYSTEM.OnValidate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnValidate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnValidate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnValidate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
