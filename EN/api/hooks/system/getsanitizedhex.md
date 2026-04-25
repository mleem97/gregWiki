---
title: GetSanitizedHex
description: Documentation for greg.SYSTEM.GetSanitizedHex
path: /api/hooks/system/getsanitizedhex
---

# GetSanitizedHex

> **Hook ID:** `greg.SYSTEM.GetSanitizedHex`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetSanitizedHex

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetSanitizedHex(string, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSanitizedHex` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetSanitizedHex", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetSanitizedHex");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetSanitizedHex", function(payload)
    greg.log("Hook greg.SYSTEM.GetSanitizedHex received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetSanitizedHex fired")

greg.on("greg.SYSTEM.GetSanitizedHex", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetSanitizedHex", (payload) => {
    console.log("Hook greg.SYSTEM.GetSanitizedHex triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetSanitizedHex".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetSanitizedHex", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetSanitizedHex fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
