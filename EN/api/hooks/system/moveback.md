---
title: moveBack
description: Documentation for greg.SYSTEM.moveBack
path: /api/hooks/system/moveback
---

# moveBack

> **Hook ID:** `greg.SYSTEM.moveBack`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterControl.moveBack

## Native Signature
```csharp
Il2Cpp.AICharacterControl::moveBack(Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `moveBack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.moveBack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.moveBack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.moveBack", function(payload)
    greg.log("Hook greg.SYSTEM.moveBack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.moveBack fired")

greg.on("greg.SYSTEM.moveBack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.moveBack", (payload) => {
    console.log("Hook greg.SYSTEM.moveBack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.moveBack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.moveBack", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.moveBack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
