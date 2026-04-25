---
title: IsValidHexChar
description: Documentation for greg.SYSTEM.IsValidHexChar
path: /api/hooks/system/isvalidhexchar
---

# IsValidHexChar

> **Hook ID:** `greg.SYSTEM.IsValidHexChar`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.IsValidHexChar

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::IsValidHexChar(char)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsValidHexChar` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsValidHexChar", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsValidHexChar");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsValidHexChar", function(payload)
    greg.log("Hook greg.SYSTEM.IsValidHexChar received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsValidHexChar fired")

greg.on("greg.SYSTEM.IsValidHexChar", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsValidHexChar", (payload) => {
    console.log("Hook greg.SYSTEM.IsValidHexChar triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsValidHexChar".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsValidHexChar", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsValidHexChar fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
