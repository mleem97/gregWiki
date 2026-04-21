---
title: MouthShape_U
description: Documentation for greg.SYSTEM.MouthShape_U
path: /api/hooks/system/mouthshape-u
---

# MouthShape_U

> **Hook ID:** `greg.SYSTEM.MouthShape_U`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.MouthShape_U

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::MouthShape_U(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouthShape_U` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouthShape_U", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouthShape_U");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouthShape_U", function(payload)
    greg.log("Hook greg.SYSTEM.MouthShape_U received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouthShape_U fired")

greg.on("greg.SYSTEM.MouthShape_U", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouthShape_U", (payload) => {
    console.log("Hook greg.SYSTEM.MouthShape_U triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouthShape_U".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouthShape_U", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouthShape_U fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
