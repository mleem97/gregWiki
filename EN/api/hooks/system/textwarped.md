---
title: TextWarped
description: Documentation for greg.SYSTEM.TextWarped
path: /api/hooks/system/textwarped
---

# TextWarped

> **Hook ID:** `greg.SYSTEM.TextWarped`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/WarpTextExample.WarpText

## Native Signature
```csharp
Il2Cpp.WarpTextExample::WarpText()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TextWarped` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TextWarped", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TextWarped");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TextWarped", function(payload)
    greg.log("Hook greg.SYSTEM.TextWarped received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TextWarped fired")

greg.on("greg.SYSTEM.TextWarped", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TextWarped", (payload) => {
    console.log("Hook greg.SYSTEM.TextWarped triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TextWarped".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TextWarped", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TextWarped fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
