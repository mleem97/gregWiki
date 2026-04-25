---
title: Selection
description: Documentation for greg.SYSTEM.Selection
path: /api/hooks/system/selection
---

# Selection

> **Hook ID:** `greg.SYSTEM.Selection`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_CustomReceiver.Selection

## Native Signature
```csharp
Il2Cpp.OSK_UI_CustomReceiver::Selection(Vector3, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Selection` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Selection", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Selection");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Selection", function(payload)
    greg.log("Hook greg.SYSTEM.Selection received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Selection fired")

greg.on("greg.SYSTEM.Selection", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Selection", (payload) => {
    console.log("Hook greg.SYSTEM.Selection triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Selection".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Selection", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Selection fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
