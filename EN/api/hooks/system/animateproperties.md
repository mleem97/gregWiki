---
title: AnimateProperties
description: Documentation for greg.SYSTEM.AnimateProperties
path: /api/hooks/system/animateproperties
---

# AnimateProperties

> **Hook ID:** `greg.SYSTEM.AnimateProperties`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/ShaderPropAnimator.AnimateProperties

## Native Signature
```csharp
Il2Cpp.ShaderPropAnimator::AnimateProperties()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AnimateProperties` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AnimateProperties", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AnimateProperties");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AnimateProperties", function(payload)
    greg.log("Hook greg.SYSTEM.AnimateProperties received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AnimateProperties fired")

greg.on("greg.SYSTEM.AnimateProperties", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AnimateProperties", (payload) => {
    console.log("Hook greg.SYSTEM.AnimateProperties triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AnimateProperties".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AnimateProperties", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AnimateProperties fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
