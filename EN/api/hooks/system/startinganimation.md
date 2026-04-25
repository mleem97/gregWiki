---
title: StartingAnimation
description: Documentation for greg.SYSTEM.StartingAnimation
path: /api/hooks/system/startinganimation
---

# StartingAnimation

> **Hook ID:** `greg.SYSTEM.StartingAnimation`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterControl.StartingAnimation

## Native Signature
```csharp
Il2Cpp.AICharacterControl::StartingAnimation()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StartingAnimation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StartingAnimation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StartingAnimation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StartingAnimation", function(payload)
    greg.log("Hook greg.SYSTEM.StartingAnimation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StartingAnimation fired")

greg.on("greg.SYSTEM.StartingAnimation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StartingAnimation", (payload) => {
    console.log("Hook greg.SYSTEM.StartingAnimation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StartingAnimation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StartingAnimation", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StartingAnimation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
