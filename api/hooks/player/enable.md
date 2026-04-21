---
title: Enable
description: Documentation for greg.PLAYER.Enable
path: /api/hooks/player/enable
---

# Enable

> **Hook ID:** `greg.PLAYER.Enable`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.Enable

## Native Signature
```csharp
Il2Cpp.PlayerActions::Enable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Enable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.Enable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.Enable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.Enable", function(payload)
    greg.log("Hook greg.PLAYER.Enable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.Enable fired")

greg.on("greg.PLAYER.Enable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.Enable", (payload) => {
    console.log("Hook greg.PLAYER.Enable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.Enable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.Enable", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.Enable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
