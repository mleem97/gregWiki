---
title: MouthShape_A
description: Documentation for greg.SYSTEM.MouthShape_A
path: /api/hooks/system/mouthshape-a
---

# MouthShape_A

> **Hook ID:** `greg.SYSTEM.MouthShape_A`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.MouthShape_A

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::MouthShape_A(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouthShape_A` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouthShape_A", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouthShape_A");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouthShape_A", function(payload)
    greg.log("Hook greg.SYSTEM.MouthShape_A received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouthShape_A fired")

greg.on("greg.SYSTEM.MouthShape_A", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouthShape_A", (payload) => {
    console.log("Hook greg.SYSTEM.MouthShape_A triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouthShape_A".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouthShape_A", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouthShape_A fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
