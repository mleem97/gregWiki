---
title: OnPhysicalKeyStroke
description: Documentation for greg.SYSTEM.OnPhysicalKeyStroke
path: /api/hooks/system/onphysicalkeystroke
---

# OnPhysicalKeyStroke

> **Hook ID:** `greg.SYSTEM.OnPhysicalKeyStroke`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.OnPhysicalKeyStroke

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::OnPhysicalKeyStroke(char)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPhysicalKeyStroke` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPhysicalKeyStroke", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPhysicalKeyStroke");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPhysicalKeyStroke", function(payload)
    greg.log("Hook greg.SYSTEM.OnPhysicalKeyStroke received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPhysicalKeyStroke fired")

greg.on("greg.SYSTEM.OnPhysicalKeyStroke", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPhysicalKeyStroke", (payload) => {
    console.log("Hook greg.SYSTEM.OnPhysicalKeyStroke triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPhysicalKeyStroke".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPhysicalKeyStroke", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPhysicalKeyStroke fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
