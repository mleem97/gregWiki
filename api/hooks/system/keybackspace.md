---
title: KeyBackspace
description: Documentation for greg.SYSTEM.KeyBackspace
path: /api/hooks/system/keybackspace
---

# KeyBackspace

> **Hook ID:** `greg.SYSTEM.KeyBackspace`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.KeyBackspace

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::KeyBackspace(OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyBackspace` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyBackspace", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyBackspace");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyBackspace", function(payload)
    greg.log("Hook greg.SYSTEM.KeyBackspace received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyBackspace fired")

greg.on("greg.SYSTEM.KeyBackspace", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyBackspace", (payload) => {
    console.log("Hook greg.SYSTEM.KeyBackspace triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyBackspace".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyBackspace", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyBackspace fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
