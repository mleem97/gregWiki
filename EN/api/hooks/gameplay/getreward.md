---
title: GetReward
description: Documentation for greg.GAMEPLAY.GetReward
path: /api/hooks/gameplay/getreward
---

# GetReward

> **Hook ID:** `greg.GAMEPLAY.GetReward`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ObjectiveObject.GetReward

## Native Signature
```csharp
Il2Cpp.ObjectiveObject::GetReward()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetReward` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.GetReward", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.GetReward");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.GetReward", function(payload)
    greg.log("Hook greg.GAMEPLAY.GetReward received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.GetReward fired")

greg.on("greg.GAMEPLAY.GetReward", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.GetReward", (payload) => {
    console.log("Hook greg.GAMEPLAY.GetReward triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.GetReward".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.GetReward", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.GetReward fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
