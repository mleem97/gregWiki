---
title: HexChanged
description: Documentation for greg.SYSTEM.HexChanged
path: /api/hooks/system/hexchanged
---

# HexChanged

> **Hook ID:** `greg.SYSTEM.HexChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.UpdateHex

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::UpdateHex()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HexChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HexChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HexChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HexChanged", function(payload)
    greg.log("Hook greg.SYSTEM.HexChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HexChanged fired")

greg.on("greg.SYSTEM.HexChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HexChanged", (payload) => {
    console.log("Hook greg.SYSTEM.HexChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HexChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HexChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HexChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
