---
title: VlanDisallowedSet
description: Documentation for greg.NETWORK.VlanDisallowedSet
path: /api/hooks/network/vlandisallowedset
---

# VlanDisallowedSet

> **Hook ID:** `greg.NETWORK.VlanDisallowedSet`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.SetVlanDisallowed

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::SetVlanDisallowed(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `VlanDisallowedSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.VlanDisallowedSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.VlanDisallowedSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.VlanDisallowedSet", function(payload)
    greg.log("Hook greg.NETWORK.VlanDisallowedSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.VlanDisallowedSet fired")

greg.on("greg.NETWORK.VlanDisallowedSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.VlanDisallowedSet", (payload) => {
    console.log("Hook greg.NETWORK.VlanDisallowedSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.VlanDisallowedSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.VlanDisallowedSet", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.VlanDisallowedSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
