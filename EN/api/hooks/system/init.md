---
title: Init
description: Documentation for greg.SYSTEM.Init
path: /api/hooks/system/init
---

# Init

> **Hook ID:** `greg.SYSTEM.Init`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/RayLookAt.Init

## Native Signature
```csharp
Il2Cpp.RayLookAt::Init()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Init` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Init", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Init");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Init", function(payload)
    greg.log("Hook greg.SYSTEM.Init received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Init fired")

greg.on("greg.SYSTEM.Init", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Init", (payload) => {
    console.log("Hook greg.SYSTEM.Init triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Init".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Init", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Init fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
