---
title: StopLoopingDestinationPointsSet
description: Documentation for greg.SYSTEM.StopLoopingDestinationPointsSet
path: /api/hooks/system/stoploopingdestinationpointsset
---

# StopLoopingDestinationPointsSet

> **Hook ID:** `greg.SYSTEM.StopLoopingDestinationPointsSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterControl.SetStopLoopingDestinationPoints

## Native Signature
```csharp
Il2Cpp.AICharacterControl::SetStopLoopingDestinationPoints()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StopLoopingDestinationPointsSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StopLoopingDestinationPointsSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StopLoopingDestinationPointsSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StopLoopingDestinationPointsSet", function(payload)
    greg.log("Hook greg.SYSTEM.StopLoopingDestinationPointsSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StopLoopingDestinationPointsSet fired")

greg.on("greg.SYSTEM.StopLoopingDestinationPointsSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StopLoopingDestinationPointsSet", (payload) => {
    console.log("Hook greg.SYSTEM.StopLoopingDestinationPointsSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StopLoopingDestinationPointsSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StopLoopingDestinationPointsSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StopLoopingDestinationPointsSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
