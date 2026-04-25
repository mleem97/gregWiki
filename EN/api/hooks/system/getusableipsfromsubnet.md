---
title: GetUsableIPsFromSubnet
description: Documentation for greg.SYSTEM.GetUsableIPsFromSubnet
path: /api/hooks/system/getusableipsfromsubnet
---

# GetUsableIPsFromSubnet

> **Hook ID:** `greg.SYSTEM.GetUsableIPsFromSubnet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.GetUsableIPsFromSubnet

## Native Signature
```csharp
Il2Cpp.SetIP::GetUsableIPsFromSubnet(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetUsableIPsFromSubnet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetUsableIPsFromSubnet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetUsableIPsFromSubnet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetUsableIPsFromSubnet", function(payload)
    greg.log("Hook greg.SYSTEM.GetUsableIPsFromSubnet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetUsableIPsFromSubnet fired")

greg.on("greg.SYSTEM.GetUsableIPsFromSubnet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetUsableIPsFromSubnet", (payload) => {
    console.log("Hook greg.SYSTEM.GetUsableIPsFromSubnet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetUsableIPsFromSubnet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetUsableIPsFromSubnet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetUsableIPsFromSubnet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
