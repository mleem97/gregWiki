---
title: KeyPress
description: Documentation for greg.SYSTEM.KeyPress
path: /api/hooks/system/keypress
---

# KeyPress

> **Hook ID:** `greg.SYSTEM.KeyPress`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.KeyPress

## Native Signature
```csharp
Il2Cpp.viperInput::KeyPress(KeyCode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyPress` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyPress", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyPress");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyPress", function(payload)
    greg.log("Hook greg.SYSTEM.KeyPress received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyPress fired")

greg.on("greg.SYSTEM.KeyPress", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyPress", (payload) => {
    console.log("Hook greg.SYSTEM.KeyPress triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyPress".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyPress", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyPress fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
