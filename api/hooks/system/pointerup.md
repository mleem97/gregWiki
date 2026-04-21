---
title: PointerUp
description: Documentation for greg.SYSTEM.PointerUp
path: /api/hooks/system/pointerup
---

# PointerUp

> **Hook ID:** `greg.SYSTEM.PointerUp`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.PointerUp

## Native Signature
```csharp
Il2Cpp.viperInput::PointerUp(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PointerUp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PointerUp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PointerUp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PointerUp", function(payload)
    greg.log("Hook greg.SYSTEM.PointerUp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PointerUp fired")

greg.on("greg.SYSTEM.PointerUp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PointerUp", (payload) => {
    console.log("Hook greg.SYSTEM.PointerUp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PointerUp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PointerUp", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PointerUp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
