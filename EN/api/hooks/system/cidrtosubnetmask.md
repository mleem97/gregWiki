---
title: CidrToSubnetMask
description: Documentation for greg.SYSTEM.CidrToSubnetMask
path: /api/hooks/system/cidrtosubnetmask
---

# CidrToSubnetMask

> **Hook ID:** `greg.SYSTEM.CidrToSubnetMask`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.CidrToSubnetMask

## Native Signature
```csharp
Il2Cpp.SetIP::CidrToSubnetMask(int, int, int, int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CidrToSubnetMask` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CidrToSubnetMask", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CidrToSubnetMask");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CidrToSubnetMask", function(payload)
    greg.log("Hook greg.SYSTEM.CidrToSubnetMask received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CidrToSubnetMask fired")

greg.on("greg.SYSTEM.CidrToSubnetMask", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CidrToSubnetMask", (payload) => {
    console.log("Hook greg.SYSTEM.CidrToSubnetMask triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CidrToSubnetMask".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CidrToSubnetMask", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CidrToSubnetMask fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
