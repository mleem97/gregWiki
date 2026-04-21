---
title: Disable
description: Documentation for greg.PLAYER.Disable
path: /api/hooks/player/disable
---

# Disable

> **Hook ID:** `greg.PLAYER.Disable`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.Disable

## Native Signature
```csharp
Il2Cpp.PlayerActions::Disable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Disable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.Disable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.Disable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.Disable", function(payload)
    greg.log("Hook greg.PLAYER.Disable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.Disable fired")

greg.on("greg.PLAYER.Disable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.Disable", (payload) => {
    console.log("Hook greg.PLAYER.Disable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.Disable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.Disable", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.Disable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
