---
title: BButtonDown
description: Documentation for greg.SYSTEM.BButtonDown
path: /api/hooks/system/bbuttondown
---

# BButtonDown

> **Hook ID:** `greg.SYSTEM.BButtonDown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.BButtonDown

## Native Signature
```csharp
Il2Cpp.viperInput::BButtonDown()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BButtonDown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BButtonDown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BButtonDown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BButtonDown", function(payload)
    greg.log("Hook greg.SYSTEM.BButtonDown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BButtonDown fired")

greg.on("greg.SYSTEM.BButtonDown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BButtonDown", (payload) => {
    console.log("Hook greg.SYSTEM.BButtonDown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BButtonDown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BButtonDown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BButtonDown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
