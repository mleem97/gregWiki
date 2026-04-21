---
title: FreeTrolleySlot
description: Documentation for greg.SYSTEM.FreeTrolleySlot
path: /api/hooks/system/freetrolleyslot
---

# FreeTrolleySlot

> **Hook ID:** `greg.SYSTEM.FreeTrolleySlot`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TrolleyLoadingBay.FreeTrolleySlot

## Native Signature
```csharp
Il2Cpp.TrolleyLoadingBay::FreeTrolleySlot(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FreeTrolleySlot` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FreeTrolleySlot", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FreeTrolleySlot");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FreeTrolleySlot", function(payload)
    greg.log("Hook greg.SYSTEM.FreeTrolleySlot received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FreeTrolleySlot fired")

greg.on("greg.SYSTEM.FreeTrolleySlot", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FreeTrolleySlot", (payload) => {
    console.log("Hook greg.SYSTEM.FreeTrolleySlot triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FreeTrolleySlot".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FreeTrolleySlot", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FreeTrolleySlot fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
