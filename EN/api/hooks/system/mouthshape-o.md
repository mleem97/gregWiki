---
title: MouthShape_O
description: Documentation for greg.SYSTEM.MouthShape_O
path: /api/hooks/system/mouthshape-o
---

# MouthShape_O

> **Hook ID:** `greg.SYSTEM.MouthShape_O`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.MouthShape_O

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::MouthShape_O(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouthShape_O` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouthShape_O", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouthShape_O");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouthShape_O", function(payload)
    greg.log("Hook greg.SYSTEM.MouthShape_O received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouthShape_O fired")

greg.on("greg.SYSTEM.MouthShape_O", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouthShape_O", (payload) => {
    console.log("Hook greg.SYSTEM.MouthShape_O triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouthShape_O".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouthShape_O", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouthShape_O fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
