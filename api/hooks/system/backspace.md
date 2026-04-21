---
title: Backspace
description: Documentation for greg.SYSTEM.Backspace
path: /api/hooks/system/backspace
---

# Backspace

> **Hook ID:** `greg.SYSTEM.Backspace`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.Backspace

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::Backspace()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Backspace` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Backspace", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Backspace");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Backspace", function(payload)
    greg.log("Hook greg.SYSTEM.Backspace received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Backspace fired")

greg.on("greg.SYSTEM.Backspace", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Backspace", (payload) => {
    console.log("Hook greg.SYSTEM.Backspace triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Backspace".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Backspace", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Backspace fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
