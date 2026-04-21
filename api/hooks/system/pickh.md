---
title: PickH
description: Documentation for greg.SYSTEM.PickH
path: /api/hooks/system/pickh
---

# PickH

> **Hook ID:** `greg.SYSTEM.PickH`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BufferedColor.PickH

## Native Signature
```csharp
Il2Cpp.BufferedColor::PickH(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PickH` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PickH", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PickH");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PickH", function(payload)
    greg.log("Hook greg.SYSTEM.PickH received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PickH fired")

greg.on("greg.SYSTEM.PickH", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PickH", (payload) => {
    console.log("Hook greg.SYSTEM.PickH triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PickH".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PickH", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PickH fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
