---
title: GenerateWind
description: Documentation for greg.SYSTEM.GenerateWind
path: /api/hooks/system/generatewind
---

# GenerateWind

> **Hook ID:** `greg.SYSTEM.GenerateWind`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeWindEffect.GenerateWind

## Native Signature
```csharp
Il2Cpp.RopeWindEffect::GenerateWind()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenerateWind` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GenerateWind", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GenerateWind");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GenerateWind", function(payload)
    greg.log("Hook greg.SYSTEM.GenerateWind received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GenerateWind fired")

greg.on("greg.SYSTEM.GenerateWind", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GenerateWind", (payload) => {
    console.log("Hook greg.SYSTEM.GenerateWind triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GenerateWind".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GenerateWind", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GenerateWind fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
