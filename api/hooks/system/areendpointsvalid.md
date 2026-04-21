---
title: AreEndPointsValid
description: Documentation for greg.SYSTEM.AreEndPointsValid
path: /api/hooks/system/areendpointsvalid
---

# AreEndPointsValid

> **Hook ID:** `greg.SYSTEM.AreEndPointsValid`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.AreEndPointsValid

## Native Signature
```csharp
Il2Cpp.Rope::AreEndPointsValid()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AreEndPointsValid` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AreEndPointsValid", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AreEndPointsValid");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AreEndPointsValid", function(payload)
    greg.log("Hook greg.SYSTEM.AreEndPointsValid received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AreEndPointsValid fired")

greg.on("greg.SYSTEM.AreEndPointsValid", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AreEndPointsValid", (payload) => {
    console.log("Hook greg.SYSTEM.AreEndPointsValid triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AreEndPointsValid".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AreEndPointsValid", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AreEndPointsValid fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
