---
title: ButtonFilterServers
description: Documentation for greg.SYSTEM.ButtonFilterServers
path: /api/hooks/system/buttonfilterservers
---

# ButtonFilterServers

> **Hook ID:** `greg.SYSTEM.ButtonFilterServers`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonFilterServers

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonFilterServers()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonFilterServers` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonFilterServers", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonFilterServers");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonFilterServers", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonFilterServers received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonFilterServers fired")

greg.on("greg.SYSTEM.ButtonFilterServers", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonFilterServers", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonFilterServers triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonFilterServers".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonFilterServers", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonFilterServers fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
