---
title: ButtonCancelInputTextOverlay
description: Documentation for greg.SYSTEM.ButtonCancelInputTextOverlay
path: /api/hooks/system/buttoncancelinputtextoverlay
---

# ButtonCancelInputTextOverlay

> **Hook ID:** `greg.SYSTEM.ButtonCancelInputTextOverlay`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.ButtonCancelInputTextOverlay

## Native Signature
```csharp
Il2Cpp.StaticUIElements::ButtonCancelInputTextOverlay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCancelInputTextOverlay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCancelInputTextOverlay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCancelInputTextOverlay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCancelInputTextOverlay", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCancelInputTextOverlay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCancelInputTextOverlay fired")

greg.on("greg.SYSTEM.ButtonCancelInputTextOverlay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCancelInputTextOverlay", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCancelInputTextOverlay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCancelInputTextOverlay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCancelInputTextOverlay", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCancelInputTextOverlay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
