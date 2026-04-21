---
title: TexturesChanged
description: Documentation for greg.SYSTEM.TexturesChanged
path: /api/hooks/system/textureschanged
---

# TexturesChanged

> **Hook ID:** `greg.SYSTEM.TexturesChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.UpdateTextures

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::UpdateTextures()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TexturesChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TexturesChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TexturesChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TexturesChanged", function(payload)
    greg.log("Hook greg.SYSTEM.TexturesChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TexturesChanged fired")

greg.on("greg.SYSTEM.TexturesChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TexturesChanged", (payload) => {
    console.log("Hook greg.SYSTEM.TexturesChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TexturesChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TexturesChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TexturesChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
