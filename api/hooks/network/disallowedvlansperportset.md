---
title: DisallowedVlansPerPortSet
description: Documentation for greg.NETWORK.DisallowedVlansPerPortSet
path: /api/hooks/network/disallowedvlansperportset
---

# DisallowedVlansPerPortSet

> **Hook ID:** `greg.NETWORK.DisallowedVlansPerPortSet`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.SetDisallowedVlansPerPort

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::SetDisallowedVlansPerPort(Dictionary<int, HashSet<int>>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisallowedVlansPerPortSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.DisallowedVlansPerPortSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.DisallowedVlansPerPortSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.DisallowedVlansPerPortSet", function(payload)
    greg.log("Hook greg.NETWORK.DisallowedVlansPerPortSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.DisallowedVlansPerPortSet fired")

greg.on("greg.NETWORK.DisallowedVlansPerPortSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.DisallowedVlansPerPortSet", (payload) => {
    console.log("Hook greg.NETWORK.DisallowedVlansPerPortSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.DisallowedVlansPerPortSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.DisallowedVlansPerPortSet", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.DisallowedVlansPerPortSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
