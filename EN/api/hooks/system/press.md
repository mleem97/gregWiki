---
title: Press
description: Documentation for greg.SYSTEM.Press
path: /api/hooks/system/press
---

# Press

> **Hook ID:** `greg.SYSTEM.Press`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.Press

## Native Signature
```csharp
Il2Cpp.ButtonExtended::Press()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Press` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Press", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Press");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Press", function(payload)
    greg.log("Hook greg.SYSTEM.Press received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Press fired")

greg.on("greg.SYSTEM.Press", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Press", (payload) => {
    console.log("Hook greg.SYSTEM.Press triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Press".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Press", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Press fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
