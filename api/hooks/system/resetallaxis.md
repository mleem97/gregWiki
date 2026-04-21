---
title: ResetAllAxis
description: Documentation for greg.SYSTEM.ResetAllAxis
path: /api/hooks/system/resetallaxis
---

# ResetAllAxis

> **Hook ID:** `greg.SYSTEM.ResetAllAxis`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.ResetAllAxis

## Native Signature
```csharp
Il2Cpp.viperInput::ResetAllAxis()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetAllAxis` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetAllAxis", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetAllAxis");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetAllAxis", function(payload)
    greg.log("Hook greg.SYSTEM.ResetAllAxis received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetAllAxis fired")

greg.on("greg.SYSTEM.ResetAllAxis", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetAllAxis", (payload) => {
    console.log("Hook greg.SYSTEM.ResetAllAxis triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetAllAxis".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetAllAxis", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetAllAxis fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
