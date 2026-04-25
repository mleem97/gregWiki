---
title: InputActionMap
description: Documentation for greg.PLAYER.InputActionMap
path: /api/hooks/player/inputactionmap
---

# InputActionMap

> **Hook ID:** `greg.PLAYER.InputActionMap`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerActions.InputActionMap

## Native Signature
```csharp
Il2Cpp.PlayerActions::InputActionMap(InputController.PlayerActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InputActionMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.InputActionMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.InputActionMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.InputActionMap", function(payload)
    greg.log("Hook greg.PLAYER.InputActionMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.InputActionMap fired")

greg.on("greg.PLAYER.InputActionMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.InputActionMap", (payload) => {
    console.log("Hook greg.PLAYER.InputActionMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.InputActionMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.InputActionMap", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.InputActionMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
