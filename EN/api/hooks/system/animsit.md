---
title: AnimSit
description: Documentation for greg.SYSTEM.AnimSit
path: /api/hooks/system/animsit
---

# AnimSit

> **Hook ID:** `greg.SYSTEM.AnimSit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterControl.AnimSit

## Native Signature
```csharp
Il2Cpp.AICharacterControl::AnimSit(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AnimSit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AnimSit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AnimSit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AnimSit", function(payload)
    greg.log("Hook greg.SYSTEM.AnimSit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AnimSit fired")

greg.on("greg.SYSTEM.AnimSit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AnimSit", (payload) => {
    console.log("Hook greg.SYSTEM.AnimSit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AnimSit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AnimSit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AnimSit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
