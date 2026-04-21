---
title: PointerUpdate
description: Documentation for greg.SYSTEM.PointerUpdate
path: /api/hooks/system/pointerupdate
---

# PointerUpdate

> **Hook ID:** `greg.SYSTEM.PointerUpdate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.PointerUpdate

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::PointerUpdate(BaseEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PointerUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PointerUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PointerUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PointerUpdate", function(payload)
    greg.log("Hook greg.SYSTEM.PointerUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PointerUpdate fired")

greg.on("greg.SYSTEM.PointerUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PointerUpdate", (payload) => {
    console.log("Hook greg.SYSTEM.PointerUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PointerUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PointerUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PointerUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
