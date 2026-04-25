---
title: PickS
description: Documentation for greg.SYSTEM.PickS
path: /api/hooks/system/picks
---

# PickS

> **Hook ID:** `greg.SYSTEM.PickS`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BufferedColor.PickS

## Native Signature
```csharp
Il2Cpp.BufferedColor::PickS(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PickS` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PickS", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PickS");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PickS", function(payload)
    greg.log("Hook greg.SYSTEM.PickS received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PickS fired")

greg.on("greg.SYSTEM.PickS", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PickS", (payload) => {
    console.log("Hook greg.SYSTEM.PickS triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PickS".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PickS", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PickS fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
