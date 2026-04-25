---
title: EarlyInit
description: Documentation for greg.SYSTEM.EarlyInit
path: /api/hooks/system/earlyinit
---

# EarlyInit

> **Hook ID:** `greg.SYSTEM.EarlyInit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/__UnmanagedPostProcessorOutput__1221673671587648887.EarlyInit

## Native Signature
```csharp
Il2Cpp.__UnmanagedPostProcessorOutput__1221673671587648887::EarlyInit()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EarlyInit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.EarlyInit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.EarlyInit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.EarlyInit", function(payload)
    greg.log("Hook greg.SYSTEM.EarlyInit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.EarlyInit fired")

greg.on("greg.SYSTEM.EarlyInit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.EarlyInit", (payload) => {
    console.log("Hook greg.SYSTEM.EarlyInit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.EarlyInit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.EarlyInit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.EarlyInit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
