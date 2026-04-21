---
title: checkGroundMaterial
description: Documentation for greg.SYSTEM.checkGroundMaterial
path: /api/hooks/system/checkgroundmaterial
---

# checkGroundMaterial

> **Hook ID:** `greg.SYSTEM.checkGroundMaterial`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FootSteps.checkGroundMaterial

## Native Signature
```csharp
Il2Cpp.FootSteps::checkGroundMaterial()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `checkGroundMaterial` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.checkGroundMaterial", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.checkGroundMaterial");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.checkGroundMaterial", function(payload)
    greg.log("Hook greg.SYSTEM.checkGroundMaterial received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.checkGroundMaterial fired")

greg.on("greg.SYSTEM.checkGroundMaterial", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.checkGroundMaterial", (payload) => {
    console.log("Hook greg.SYSTEM.checkGroundMaterial triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.checkGroundMaterial".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.checkGroundMaterial", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.checkGroundMaterial fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
