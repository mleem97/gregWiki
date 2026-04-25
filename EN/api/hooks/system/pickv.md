---
title: PickV
description: Documentation for greg.SYSTEM.PickV
path: /api/hooks/system/pickv
---

# PickV

> **Hook ID:** `greg.SYSTEM.PickV`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BufferedColor.PickV

## Native Signature
```csharp
Il2Cpp.BufferedColor::PickV(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PickV` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PickV", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PickV");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PickV", function(payload)
    greg.log("Hook greg.SYSTEM.PickV received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PickV fired")

greg.on("greg.SYSTEM.PickV", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PickV", (payload) => {
    console.log("Hook greg.SYSTEM.PickV triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PickV".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PickV", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PickV fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
