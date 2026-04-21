---
title: OnAnimationEventFootStep
description: Documentation for greg.SYSTEM.OnAnimationEventFootStep
path: /api/hooks/system/onanimationeventfootstep
---

# OnAnimationEventFootStep

> **Hook ID:** `greg.SYSTEM.OnAnimationEventFootStep`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.OnAnimationEventFootStep

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::OnAnimationEventFootStep()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnAnimationEventFootStep` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnAnimationEventFootStep", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnAnimationEventFootStep");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnAnimationEventFootStep", function(payload)
    greg.log("Hook greg.SYSTEM.OnAnimationEventFootStep received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnAnimationEventFootStep fired")

greg.on("greg.SYSTEM.OnAnimationEventFootStep", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnAnimationEventFootStep", (payload) => {
    console.log("Hook greg.SYSTEM.OnAnimationEventFootStep triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnAnimationEventFootStep".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnAnimationEventFootStep", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnAnimationEventFootStep fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
