---
title: AnyPhysicalKey
description: Documentation for greg.SYSTEM.AnyPhysicalKey
path: /api/hooks/system/anyphysicalkey
---

# AnyPhysicalKey

> **Hook ID:** `greg.SYSTEM.AnyPhysicalKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.AnyPhysicalKey

## Native Signature
```csharp
Il2Cpp.viperInput::AnyPhysicalKey()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AnyPhysicalKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AnyPhysicalKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AnyPhysicalKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AnyPhysicalKey", function(payload)
    greg.log("Hook greg.SYSTEM.AnyPhysicalKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AnyPhysicalKey fired")

greg.on("greg.SYSTEM.AnyPhysicalKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AnyPhysicalKey", (payload) => {
    console.log("Hook greg.SYSTEM.AnyPhysicalKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AnyPhysicalKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AnyPhysicalKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AnyPhysicalKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
