---
title: GODMOD_delayed
description: Documentation for greg.SYSTEM.GODMOD_delayed
path: /api/hooks/system/godmod-delayed
---

# GODMOD_delayed

> **Hook ID:** `greg.SYSTEM.GODMOD_delayed`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GODMOD.GODMOD_delayed

## Native Signature
```csharp
Il2Cpp.GODMOD::GODMOD_delayed()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GODMOD_delayed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GODMOD_delayed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GODMOD_delayed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GODMOD_delayed", function(payload)
    greg.log("Hook greg.SYSTEM.GODMOD_delayed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GODMOD_delayed fired")

greg.on("greg.SYSTEM.GODMOD_delayed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GODMOD_delayed", (payload) => {
    console.log("Hook greg.SYSTEM.GODMOD_delayed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GODMOD_delayed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GODMOD_delayed", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GODMOD_delayed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
