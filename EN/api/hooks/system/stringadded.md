---
title: StringAdded
description: Documentation for greg.SYSTEM.StringAdded
path: /api/hooks/system/stringadded
---

# StringAdded

> **Hook ID:** `greg.SYSTEM.StringAdded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.AddString

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::AddString(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StringAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StringAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StringAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StringAdded", function(payload)
    greg.log("Hook greg.SYSTEM.StringAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StringAdded fired")

greg.on("greg.SYSTEM.StringAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StringAdded", (payload) => {
    console.log("Hook greg.SYSTEM.StringAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StringAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StringAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StringAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
