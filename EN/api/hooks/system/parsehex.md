---
title: ParseHex
description: Documentation for greg.SYSTEM.ParseHex
path: /api/hooks/system/parsehex
---

# ParseHex

> **Hook ID:** `greg.SYSTEM.ParseHex`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.ParseHex

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::ParseHex(string, Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ParseHex` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ParseHex", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ParseHex");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ParseHex", function(payload)
    greg.log("Hook greg.SYSTEM.ParseHex received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ParseHex fired")

greg.on("greg.SYSTEM.ParseHex", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ParseHex", (payload) => {
    console.log("Hook greg.SYSTEM.ParseHex triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ParseHex".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ParseHex", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ParseHex fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
