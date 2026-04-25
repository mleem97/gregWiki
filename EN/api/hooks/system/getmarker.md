---
title: GetMarker
description: Documentation for greg.SYSTEM.GetMarker
path: /api/hooks/system/getmarker
---

# GetMarker

> **Hook ID:** `greg.SYSTEM.GetMarker`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.GetMarker

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::GetMarker(Image, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetMarker` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetMarker", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetMarker");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetMarker", function(payload)
    greg.log("Hook greg.SYSTEM.GetMarker received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetMarker fired")

greg.on("greg.SYSTEM.GetMarker", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetMarker", (payload) => {
    console.log("Hook greg.SYSTEM.GetMarker triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetMarker".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetMarker", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetMarker fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
