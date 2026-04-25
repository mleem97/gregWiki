---
title: TrolleyPositionLoaded
description: Documentation for greg.SYSTEM.TrolleyPositionLoaded
path: /api/hooks/system/trolleypositionloaded
---

# TrolleyPositionLoaded

> **Hook ID:** `greg.SYSTEM.TrolleyPositionLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.LoadTrolleyPosition

## Native Signature
```csharp
Il2Cpp.MainGameManager::LoadTrolleyPosition(Vector3, Quaternion)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TrolleyPositionLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TrolleyPositionLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TrolleyPositionLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TrolleyPositionLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.TrolleyPositionLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TrolleyPositionLoaded fired")

greg.on("greg.SYSTEM.TrolleyPositionLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TrolleyPositionLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.TrolleyPositionLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TrolleyPositionLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TrolleyPositionLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TrolleyPositionLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
