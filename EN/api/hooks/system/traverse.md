---
title: Traverse
description: Documentation for greg.SYSTEM.Traverse
path: /api/hooks/system/traverse
---

# Traverse

> **Hook ID:** `greg.SYSTEM.Traverse`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.Traverse

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::Traverse()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Traverse` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Traverse", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Traverse");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Traverse", function(payload)
    greg.log("Hook greg.SYSTEM.Traverse received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Traverse fired")

greg.on("greg.SYSTEM.Traverse", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Traverse", (payload) => {
    console.log("Hook greg.SYSTEM.Traverse triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Traverse".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Traverse", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Traverse fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
