---
title: MouthShape_BPM
description: Documentation for greg.SYSTEM.MouthShape_BPM
path: /api/hooks/system/mouthshape-bpm
---

# MouthShape_BPM

> **Hook ID:** `greg.SYSTEM.MouthShape_BPM`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.MouthShape_BPM

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::MouthShape_BPM(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouthShape_BPM` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouthShape_BPM", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouthShape_BPM");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouthShape_BPM", function(payload)
    greg.log("Hook greg.SYSTEM.MouthShape_BPM received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouthShape_BPM fired")

greg.on("greg.SYSTEM.MouthShape_BPM", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouthShape_BPM", (payload) => {
    console.log("Hook greg.SYSTEM.MouthShape_BPM triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouthShape_BPM".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouthShape_BPM", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouthShape_BPM fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
