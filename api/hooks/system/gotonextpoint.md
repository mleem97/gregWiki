---
title: GotoNextPoint
description: Documentation for greg.SYSTEM.GotoNextPoint
path: /api/hooks/system/gotonextpoint
---

# GotoNextPoint

> **Hook ID:** `greg.SYSTEM.GotoNextPoint`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterControl.GotoNextPoint

## Native Signature
```csharp
Il2Cpp.AICharacterControl::GotoNextPoint(Il2CppReferenceArray<Transform>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GotoNextPoint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GotoNextPoint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GotoNextPoint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GotoNextPoint", function(payload)
    greg.log("Hook greg.SYSTEM.GotoNextPoint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GotoNextPoint fired")

greg.on("greg.SYSTEM.GotoNextPoint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GotoNextPoint", (payload) => {
    console.log("Hook greg.SYSTEM.GotoNextPoint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GotoNextPoint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GotoNextPoint", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GotoNextPoint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
