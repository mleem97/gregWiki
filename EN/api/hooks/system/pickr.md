---
title: PickR
description: Documentation for greg.SYSTEM.PickR
path: /api/hooks/system/pickr
---

# PickR

> **Hook ID:** `greg.SYSTEM.PickR`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BufferedColor.PickR

## Native Signature
```csharp
Il2Cpp.BufferedColor::PickR(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PickR` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PickR", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PickR");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PickR", function(payload)
    greg.log("Hook greg.SYSTEM.PickR received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PickR fired")

greg.on("greg.SYSTEM.PickR", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PickR", (payload) => {
    console.log("Hook greg.SYSTEM.PickR triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PickR".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PickR", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PickR fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
