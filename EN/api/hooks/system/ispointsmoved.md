---
title: IsPointsMoved
description: Documentation for greg.SYSTEM.IsPointsMoved
path: /api/hooks/system/ispointsmoved
---

# IsPointsMoved

> **Hook ID:** `greg.SYSTEM.IsPointsMoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.IsPointsMoved

## Native Signature
```csharp
Il2Cpp.Rope::IsPointsMoved()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsPointsMoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsPointsMoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsPointsMoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsPointsMoved", function(payload)
    greg.log("Hook greg.SYSTEM.IsPointsMoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsPointsMoved fired")

greg.on("greg.SYSTEM.IsPointsMoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsPointsMoved", (payload) => {
    console.log("Hook greg.SYSTEM.IsPointsMoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsPointsMoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsPointsMoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsPointsMoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
