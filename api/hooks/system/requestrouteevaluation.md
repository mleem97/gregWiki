---
title: RequestRouteEvaluation
description: Documentation for greg.SYSTEM.RequestRouteEvaluation
path: /api/hooks/system/requestrouteevaluation
---

# RequestRouteEvaluation

> **Hook ID:** `greg.SYSTEM.RequestRouteEvaluation`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.RequestRouteEvaluation

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::RequestRouteEvaluation()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RequestRouteEvaluation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RequestRouteEvaluation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RequestRouteEvaluation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RequestRouteEvaluation", function(payload)
    greg.log("Hook greg.SYSTEM.RequestRouteEvaluation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RequestRouteEvaluation fired")

greg.on("greg.SYSTEM.RequestRouteEvaluation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RequestRouteEvaluation", (payload) => {
    console.log("Hook greg.SYSTEM.RequestRouteEvaluation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RequestRouteEvaluation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RequestRouteEvaluation", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RequestRouteEvaluation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
