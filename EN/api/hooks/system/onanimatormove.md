---
title: OnAnimatorMove
description: Documentation for greg.SYSTEM.OnAnimatorMove
path: /api/hooks/system/onanimatormove
---

# OnAnimatorMove

> **Hook ID:** `greg.SYSTEM.OnAnimatorMove`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.OnAnimatorMove

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::OnAnimatorMove()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnAnimatorMove` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnAnimatorMove", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnAnimatorMove");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnAnimatorMove", function(payload)
    greg.log("Hook greg.SYSTEM.OnAnimatorMove received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnAnimatorMove fired")

greg.on("greg.SYSTEM.OnAnimatorMove", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnAnimatorMove", (payload) => {
    console.log("Hook greg.SYSTEM.OnAnimatorMove triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnAnimatorMove".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnAnimatorMove", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnAnimatorMove fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
