---
title: CheckFallsThroughMap
description: Documentation for greg.PLAYER.CheckFallsThroughMap
path: /api/hooks/player/checkfallsthroughmap
---

# CheckFallsThroughMap

> **Hook ID:** `greg.PLAYER.CheckFallsThroughMap`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.CheckFallsThroughMap

## Native Signature
```csharp
Il2Cpp.Player::CheckFallsThroughMap()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CheckFallsThroughMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.CheckFallsThroughMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.CheckFallsThroughMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.CheckFallsThroughMap", function(payload)
    greg.log("Hook greg.PLAYER.CheckFallsThroughMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.CheckFallsThroughMap fired")

greg.on("greg.PLAYER.CheckFallsThroughMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.CheckFallsThroughMap", (payload) => {
    console.log("Hook greg.PLAYER.CheckFallsThroughMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.CheckFallsThroughMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.CheckFallsThroughMap", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.CheckFallsThroughMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
