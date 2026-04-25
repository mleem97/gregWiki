---
title: ComponentInitialized
description: Documentation for greg.PLAYER.ComponentInitialized
path: /api/hooks/player/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.PLAYER.ComponentInitialized`
> **Category:** Player
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PlayerManager.Start

## Native Signature
```csharp
Il2Cpp.PlayerManager::Start()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentInitialized` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.PLAYER.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.PLAYER.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.PLAYER.ComponentInitialized", function(payload)
    greg.log("Hook greg.PLAYER.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.PLAYER.ComponentInitialized fired")

greg.on("greg.PLAYER.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.PLAYER.ComponentInitialized", (payload) => {
    console.log("Hook greg.PLAYER.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.PLAYER.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.PLAYER.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.PLAYER.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
