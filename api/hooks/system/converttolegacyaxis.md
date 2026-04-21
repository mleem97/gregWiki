---
title: ConvertToLegacyAxis
description: Documentation for greg.SYSTEM.ConvertToLegacyAxis
path: /api/hooks/system/converttolegacyaxis
---

# ConvertToLegacyAxis

> **Hook ID:** `greg.SYSTEM.ConvertToLegacyAxis`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.ConvertToLegacyAxis

## Native Signature
```csharp
Il2Cpp.viperInput::ConvertToLegacyAxis(AXIS_INPUT)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConvertToLegacyAxis` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ConvertToLegacyAxis", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ConvertToLegacyAxis");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ConvertToLegacyAxis", function(payload)
    greg.log("Hook greg.SYSTEM.ConvertToLegacyAxis received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ConvertToLegacyAxis fired")

greg.on("greg.SYSTEM.ConvertToLegacyAxis", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ConvertToLegacyAxis", (payload) => {
    console.log("Hook greg.SYSTEM.ConvertToLegacyAxis triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ConvertToLegacyAxis".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ConvertToLegacyAxis", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ConvertToLegacyAxis fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
