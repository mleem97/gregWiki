---
title: OutputSet
description: Documentation for greg.SYSTEM.OutputSet
path: /api/hooks/system/outputset
---

# OutputSet

> **Hook ID:** `greg.SYSTEM.OutputSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.SetOutput

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::SetOutput(OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OutputSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OutputSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OutputSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OutputSet", function(payload)
    greg.log("Hook greg.SYSTEM.OutputSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OutputSet fired")

greg.on("greg.SYSTEM.OutputSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OutputSet", (payload) => {
    console.log("Hook greg.SYSTEM.OutputSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OutputSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OutputSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OutputSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
