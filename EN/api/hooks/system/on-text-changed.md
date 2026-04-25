---
title: ON_TEXT_CHANGED
description: Documentation for greg.SYSTEM.ON_TEXT_CHANGED
path: /api/hooks/system/on-text-changed
---

# ON_TEXT_CHANGED

> **Hook ID:** `greg.SYSTEM.ON_TEXT_CHANGED`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/VertexZoom.ON_TEXT_CHANGED

## Native Signature
```csharp
Il2Cpp.VertexZoom::ON_TEXT_CHANGED(UnityEngine.Object)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ON_TEXT_CHANGED` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ON_TEXT_CHANGED", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ON_TEXT_CHANGED");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ON_TEXT_CHANGED", function(payload)
    greg.log("Hook greg.SYSTEM.ON_TEXT_CHANGED received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ON_TEXT_CHANGED fired")

greg.on("greg.SYSTEM.ON_TEXT_CHANGED", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ON_TEXT_CHANGED", (payload) => {
    console.log("Hook greg.SYSTEM.ON_TEXT_CHANGED triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ON_TEXT_CHANGED".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ON_TEXT_CHANGED", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ON_TEXT_CHANGED fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
