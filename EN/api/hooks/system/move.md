---
title: Move
description: Documentation for greg.SYSTEM.Move
path: /api/hooks/system/move
---

# Move

> **Hook ID:** `greg.SYSTEM.Move`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.Move

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::Move(Vector3, bool, bool, bool, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Move` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Move", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Move");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Move", function(payload)
    greg.log("Hook greg.SYSTEM.Move received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Move fired")

greg.on("greg.SYSTEM.Move", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Move", (payload) => {
    console.log("Hook greg.SYSTEM.Move triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Move".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Move", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Move fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
