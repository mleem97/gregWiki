---
title: ButtonSaveInputTextOverlay
description: Documentation for greg.SYSTEM.ButtonSaveInputTextOverlay
path: /api/hooks/system/buttonsaveinputtextoverlay
---

# ButtonSaveInputTextOverlay

> **Hook ID:** `greg.SYSTEM.ButtonSaveInputTextOverlay`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.ButtonSaveInputTextOverlay

## Native Signature
```csharp
Il2Cpp.StaticUIElements::ButtonSaveInputTextOverlay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonSaveInputTextOverlay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonSaveInputTextOverlay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonSaveInputTextOverlay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonSaveInputTextOverlay", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonSaveInputTextOverlay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonSaveInputTextOverlay fired")

greg.on("greg.SYSTEM.ButtonSaveInputTextOverlay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonSaveInputTextOverlay", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonSaveInputTextOverlay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonSaveInputTextOverlay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonSaveInputTextOverlay", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonSaveInputTextOverlay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
