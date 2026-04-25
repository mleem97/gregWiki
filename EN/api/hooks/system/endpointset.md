---
title: EndPointSet
description: Documentation for greg.SYSTEM.EndPointSet
path: /api/hooks/system/endpointset
---

# EndPointSet

> **Hook ID:** `greg.SYSTEM.EndPointSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.SetEndPoint

## Native Signature
```csharp
Il2Cpp.Rope::SetEndPoint(Transform, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EndPointSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.EndPointSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.EndPointSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.EndPointSet", function(payload)
    greg.log("Hook greg.SYSTEM.EndPointSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.EndPointSet fired")

greg.on("greg.SYSTEM.EndPointSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.EndPointSet", (payload) => {
    console.log("Hook greg.SYSTEM.EndPointSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.EndPointSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.EndPointSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.EndPointSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
