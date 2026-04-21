---
title: OnModUnload
description: Documentation for greg.SYSTEM.OnModUnload
path: /api/hooks/system/onmodunload
---

# OnModUnload

> **Hook ID:** `greg.SYSTEM.OnModUnload`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IModPlugin.OnModUnload

## Native Signature
```csharp
Il2Cpp.IModPlugin::OnModUnload()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnModUnload` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnModUnload", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnModUnload");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnModUnload", function(payload)
    greg.log("Hook greg.SYSTEM.OnModUnload received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnModUnload fired")

greg.on("greg.SYSTEM.OnModUnload", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnModUnload", (payload) => {
    console.log("Hook greg.SYSTEM.OnModUnload triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnModUnload".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnModUnload", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnModUnload fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
