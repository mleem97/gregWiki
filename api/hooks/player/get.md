---
title: Get
description: Documentation for greg.PLAYER.Get
path: /api/hooks/player/get
---

# Get

> **Hook ID:** `greg.PLAYER.Get`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.Get

## Native Signature
```csharp
Il2Cpp.PlayerActions::Get()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Get` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.Get", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.Get");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.Get", function(payload)
    greg.log("Hook greg.PLAYER.Get received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.Get fired")

greg.on("greg.PLAYER.Get", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.Get", (payload) => {
    console.log("Hook greg.PLAYER.Get triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.Get".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.Get", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.Get fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
