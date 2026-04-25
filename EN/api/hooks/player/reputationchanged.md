---
title: ReputationChanged
description: Documentation for greg.PLAYER.ReputationChanged
path: /api/hooks/player/reputationchanged
---

# ReputationChanged

> **Hook ID:** `greg.PLAYER.ReputationChanged`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.UpdateReputation

## Native Signature
```csharp
Il2Cpp.Player::UpdateReputation(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `amount` | `float` | ... |
| `reputation` | `float` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReputationChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.ReputationChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.ReputationChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.ReputationChanged", function(payload)
    greg.log("Hook greg.PLAYER.ReputationChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.ReputationChanged fired")

greg.on("greg.PLAYER.ReputationChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.ReputationChanged", (payload) => {
    console.log("Hook greg.PLAYER.ReputationChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.ReputationChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.ReputationChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.ReputationChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
