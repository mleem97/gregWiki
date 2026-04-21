---
title: PowerButton
description: Documentation for greg.SYSTEM.PowerButton
path: /api/hooks/system/powerbutton
---

# PowerButton

> **Hook ID:** `greg.SYSTEM.PowerButton`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.PowerButton

## Native Signature
```csharp
Il2Cpp.SetIP::PowerButton()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PowerButton` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PowerButton", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PowerButton");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PowerButton", function(payload)
    greg.log("Hook greg.SYSTEM.PowerButton received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PowerButton fired")

greg.on("greg.SYSTEM.PowerButton", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PowerButton", (payload) => {
    console.log("Hook greg.SYSTEM.PowerButton triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PowerButton".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PowerButton", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PowerButton fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
