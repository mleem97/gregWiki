---
title: KeyDown
description: Documentation for greg.SYSTEM.KeyDown
path: /api/hooks/system/keydown
---

# KeyDown

> **Hook ID:** `greg.SYSTEM.KeyDown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.KeyDown

## Native Signature
```csharp
Il2Cpp.viperInput::KeyDown(KeyCode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyDown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyDown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyDown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyDown", function(payload)
    greg.log("Hook greg.SYSTEM.KeyDown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyDown fired")

greg.on("greg.SYSTEM.KeyDown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyDown", (payload) => {
    console.log("Hook greg.SYSTEM.KeyDown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyDown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyDown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyDown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
