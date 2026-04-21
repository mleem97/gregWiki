---
title: MouthShape_FV
description: Documentation for greg.SYSTEM.MouthShape_FV
path: /api/hooks/system/mouthshape-fv
---

# MouthShape_FV

> **Hook ID:** `greg.SYSTEM.MouthShape_FV`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.MouthShape_FV

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::MouthShape_FV(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouthShape_FV` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouthShape_FV", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouthShape_FV");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouthShape_FV", function(payload)
    greg.log("Hook greg.SYSTEM.MouthShape_FV received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouthShape_FV fired")

greg.on("greg.SYSTEM.MouthShape_FV", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouthShape_FV", (payload) => {
    console.log("Hook greg.SYSTEM.MouthShape_FV triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouthShape_FV".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouthShape_FV", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouthShape_FV fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
