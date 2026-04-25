---
title: PointerDown
description: Documentation for greg.SYSTEM.PointerDown
path: /api/hooks/system/pointerdown
---

# PointerDown

> **Hook ID:** `greg.SYSTEM.PointerDown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.PointerDown

## Native Signature
```csharp
Il2Cpp.viperInput::PointerDown(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PointerDown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PointerDown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PointerDown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PointerDown", function(payload)
    greg.log("Hook greg.SYSTEM.PointerDown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PointerDown fired")

greg.on("greg.SYSTEM.PointerDown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PointerDown", (payload) => {
    console.log("Hook greg.SYSTEM.PointerDown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PointerDown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PointerDown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PointerDown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
