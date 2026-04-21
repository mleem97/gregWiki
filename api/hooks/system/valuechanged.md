---
title: ValueChanged
description: Documentation for greg.SYSTEM.ValueChanged
path: /api/hooks/system/valuechanged
---

# ValueChanged

> **Hook ID:** `greg.SYSTEM.ValueChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Receiver.ValueChanged

## Native Signature
```csharp
Il2Cpp.OSK_Receiver::ValueChanged()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ValueChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ValueChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ValueChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ValueChanged", function(payload)
    greg.log("Hook greg.SYSTEM.ValueChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ValueChanged fired")

greg.on("greg.SYSTEM.ValueChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ValueChanged", (payload) => {
    console.log("Hook greg.SYSTEM.ValueChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ValueChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ValueChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ValueChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
