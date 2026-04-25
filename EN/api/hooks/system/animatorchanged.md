---
title: AnimatorChanged
description: Documentation for greg.SYSTEM.AnimatorChanged
path: /api/hooks/system/animatorchanged
---

# AnimatorChanged

> **Hook ID:** `greg.SYSTEM.AnimatorChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.UpdateAnimator

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::UpdateAnimator(Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AnimatorChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AnimatorChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AnimatorChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AnimatorChanged", function(payload)
    greg.log("Hook greg.SYSTEM.AnimatorChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AnimatorChanged fired")

greg.on("greg.SYSTEM.AnimatorChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AnimatorChanged", (payload) => {
    console.log("Hook greg.SYSTEM.AnimatorChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AnimatorChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AnimatorChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AnimatorChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
