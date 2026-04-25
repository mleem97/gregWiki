---
title: NumControllers
description: Documentation for greg.SYSTEM.NumControllers
path: /api/hooks/system/numcontrollers
---

# NumControllers

> **Hook ID:** `greg.SYSTEM.NumControllers`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.NumControllers

## Native Signature
```csharp
Il2Cpp.viperInput::NumControllers()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NumControllers` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.NumControllers", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.NumControllers");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.NumControllers", function(payload)
    greg.log("Hook greg.SYSTEM.NumControllers received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.NumControllers fired")

greg.on("greg.SYSTEM.NumControllers", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.NumControllers", (payload) => {
    console.log("Hook greg.SYSTEM.NumControllers triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.NumControllers".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.NumControllers", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.NumControllers fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
