---
title: ApplyExtraTurnRotation
description: Documentation for greg.SYSTEM.ApplyExtraTurnRotation
path: /api/hooks/system/applyextraturnrotation
---

# ApplyExtraTurnRotation

> **Hook ID:** `greg.SYSTEM.ApplyExtraTurnRotation`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.ApplyExtraTurnRotation

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::ApplyExtraTurnRotation()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ApplyExtraTurnRotation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ApplyExtraTurnRotation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ApplyExtraTurnRotation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ApplyExtraTurnRotation", function(payload)
    greg.log("Hook greg.SYSTEM.ApplyExtraTurnRotation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ApplyExtraTurnRotation fired")

greg.on("greg.SYSTEM.ApplyExtraTurnRotation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ApplyExtraTurnRotation", (payload) => {
    console.log("Hook greg.SYSTEM.ApplyExtraTurnRotation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ApplyExtraTurnRotation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ApplyExtraTurnRotation", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ApplyExtraTurnRotation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
