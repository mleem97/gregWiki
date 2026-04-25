---
title: Generate
description: Documentation for greg.SYSTEM.Generate
path: /api/hooks/system/generate
---

# Generate

> **Hook ID:** `greg.SYSTEM.Generate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.Generate

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::Generate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Generate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Generate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Generate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Generate", function(payload)
    greg.log("Hook greg.SYSTEM.Generate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Generate fired")

greg.on("greg.SYSTEM.Generate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Generate", (payload) => {
    console.log("Hook greg.SYSTEM.Generate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Generate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Generate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Generate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
