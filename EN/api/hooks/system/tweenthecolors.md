---
title: TweenTheColors
description: Documentation for greg.SYSTEM.TweenTheColors
path: /api/hooks/system/tweenthecolors
---

# TweenTheColors

> **Hook ID:** `greg.SYSTEM.TweenTheColors`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PulsatingText.TweenTheColors

## Native Signature
```csharp
Il2Cpp.PulsatingText::TweenTheColors()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TweenTheColors` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TweenTheColors", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TweenTheColors");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TweenTheColors", function(payload)
    greg.log("Hook greg.SYSTEM.TweenTheColors received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TweenTheColors fired")

greg.on("greg.SYSTEM.TweenTheColors", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TweenTheColors", (payload) => {
    console.log("Hook greg.SYSTEM.TweenTheColors triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TweenTheColors".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TweenTheColors", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TweenTheColors fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
