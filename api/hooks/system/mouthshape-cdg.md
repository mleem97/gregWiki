---
title: MouthShape_CDG
description: Documentation for greg.SYSTEM.MouthShape_CDG
path: /api/hooks/system/mouthshape-cdg
---

# MouthShape_CDG

> **Hook ID:** `greg.SYSTEM.MouthShape_CDG`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.MouthShape_CDG

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::MouthShape_CDG(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouthShape_CDG` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouthShape_CDG", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouthShape_CDG");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouthShape_CDG", function(payload)
    greg.log("Hook greg.SYSTEM.MouthShape_CDG received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouthShape_CDG fired")

greg.on("greg.SYSTEM.MouthShape_CDG", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouthShape_CDG", (payload) => {
    console.log("Hook greg.SYSTEM.MouthShape_CDG triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouthShape_CDG".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouthShape_CDG", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouthShape_CDG fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
