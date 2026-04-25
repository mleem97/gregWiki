---
title: KeyUp
description: Documentation for greg.SYSTEM.KeyUp
path: /api/hooks/system/keyup
---

# KeyUp

> **Hook ID:** `greg.SYSTEM.KeyUp`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.KeyUp

## Native Signature
```csharp
Il2Cpp.viperInput::KeyUp(KeyCode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyUp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyUp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyUp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyUp", function(payload)
    greg.log("Hook greg.SYSTEM.KeyUp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyUp fired")

greg.on("greg.SYSTEM.KeyUp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyUp", (payload) => {
    console.log("Hook greg.SYSTEM.KeyUp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyUp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyUp", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyUp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
