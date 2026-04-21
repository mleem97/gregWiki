---
title: MouthShape_none
description: Documentation for greg.SYSTEM.MouthShape_none
path: /api/hooks/system/mouthshape-none
---

# MouthShape_none

> **Hook ID:** `greg.SYSTEM.MouthShape_none`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.MouthShape_none

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::MouthShape_none(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouthShape_none` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouthShape_none", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouthShape_none");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouthShape_none", function(payload)
    greg.log("Hook greg.SYSTEM.MouthShape_none received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouthShape_none fired")

greg.on("greg.SYSTEM.MouthShape_none", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouthShape_none", (payload) => {
    console.log("Hook greg.SYSTEM.MouthShape_none triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouthShape_none".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouthShape_none", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouthShape_none fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
