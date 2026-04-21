---
title: DroppedAllItems
description: Documentation for greg.PLAYER.DroppedAllItems
path: /api/hooks/player/droppedallitems
---

# DroppedAllItems

> **Hook ID:** `greg.PLAYER.DroppedAllItems`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Player.DropAllItems

## Native Signature
```csharp
Il2Cpp.Player::DropAllItems()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `money` | `float` | ... |
| `reputation` | `float` | ... |
| `xp` | `float` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DroppedAllItems` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.DroppedAllItems", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.DroppedAllItems");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.DroppedAllItems", function(payload)
    greg.log("Hook greg.PLAYER.DroppedAllItems received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.DroppedAllItems fired")

greg.on("greg.PLAYER.DroppedAllItems", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.DroppedAllItems", (payload) => {
    console.log("Hook greg.PLAYER.DroppedAllItems triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.DroppedAllItems".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.DroppedAllItems", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.DroppedAllItems fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
